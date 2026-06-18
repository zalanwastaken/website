const http = require("http")
const crypto = require("crypto")

const SECRET = "super_secret_owo_key"

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

    req.on("data", chunk => {
        chunks.push(chunk)
    })

    req.on("end", () => {
        const rawBody = Buffer.concat(chunks) // 👈 THIS IS THE REAL BODY

        const sig = req.headers["x-hub-signature-256"]

        if (!verifySignature(sig, rawBody)) {
            res.statusCode = 403
            return res.end("nope >:(")
        }

        console.log("VALID REQUEST LETS GOOOO 🔥")

        res.end("ok")
    })

}).listen(3008)
