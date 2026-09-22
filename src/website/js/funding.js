function copyUPI(){
    const upi = document.getElementById("upi-id").textContent.trim();

    navigator.clipboard.writeText(upi);

    const button = event.target;
    const original = button.textContent;

    button.textContent = "Copied! :3";

    setTimeout(() => {
        button.textContent = original;
    }, 1500);
}