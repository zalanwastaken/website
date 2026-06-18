const http = require("http")
const crypto = require("crypto")
const { exec } = require("child_process")

const SECRET = "super_secret_owo_key" //! CHANGE TO KEY
const REPO = "https://github.com/zalanwastaken/website.git" //! CHANGE TO REPO
const DIR = "/var/www/html"
const REPO_DIR = "dir"

function verifySignature(sig, body) {
    const hmac = crypto
        .createHmac("sha256", SECRET)
        .update(body)
        .digest("hex")

    const expected = `sha256=${hmac}`

    return sig && crypto.timingSafeEqual(
        Buffer.from(sig),
        Buffer.from(expected)
    )
}

http.createServer((req, res) => {
    let chunks = []

    req.on("data", chunk => chunks.push(chunk))

    req.on("end", () => {
        const rawBody = Buffer.concat(chunks)
        const sig = req.headers["x-hub-signature-256"]

        if (!verifySignature(sig, rawBody)) {
            res.statusCode = 403
            return res.end("nope >:(")
        }

        const event = req.headers["x-github-event"]

        // 🧃 handle ping
        if (event === "ping") {
            console.log("ping owo")
            return res.end("pong")
        }

        // 🧠 parse payload
        const payload = JSON.parse(rawBody.toString())

        if (payload.ref !== "refs/heads/main") {
            console.log("not main, skipping")
            return res.end("skip")
        }

        console.log("DEPLOY TIME 🔥")

        // 🚀 deploy logic
        exec(`
            if [ -d "${REPO_DIR}/.git" ]; then
                cd ${REPO_DIR} && git pull
            else
                rm -rf ${REPO_DIR}
                git clone ${REPO} ${REPO_DIR}
            fi

            rm -rf ${DIR}/*
            cp -r ${REPO_DIR}/src/website/. ${DIR}/
        `, (err, stdout, stderr) => {
            if (err) {
                console.error("deploy failed 😭", err)
                return res.end("fail")
            }

            console.log(stdout)
            console.error(stderr)

            res.end("deployed 🚀")
        })
    })

}).listen(3008)
