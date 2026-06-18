// Randomized descriptions for projects
const descriptions = [
    "Works 60% of the time, every time.",
    "Warning: May cause kernel panics.",
    "Written at 3 AM. No guarantees.",
    "Not a bug, a feature.",
    "Tested on my machine. Good luck.",
    "If it crashes, you win a prize.",
    "More patches than a pirate convention.",
    "This code is held together by hope.",
    "Debugging? Never heard of it.",
    "It's not broken, it's just creatively functional."
];

document.querySelectorAll('.project p').forEach((el) => {
    el.innerHTML += "<br><i>" + descriptions[Math.floor(Math.random() * descriptions.length)] + "</i>";
});
