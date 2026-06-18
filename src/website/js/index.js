const quotes = [
    "If it works, it works. If it doesn’t, blame undefined behavior.",
    "Segmentation fault? More like ‘skill issue’.",
    "RAM is just fast storage. Disk is just slow RAM. Everything is just cache.",
    "If it ain’t broke, optimize it until it is.",
    "A bug is just an undocumented feature that surprises even the developer.",
    "Lua supremacy. Cope and seethe.",
    "I don’t write bad code, the interpreter just lacks vision.",
    "Duct tape and a debugger can fix 90% of problems. The other 10% need a rewrite.",
    "Don’t overthink it. Just type and pray.",
    "‘Best practices’ are just someone else’s opinion. Write what makes sense.",
    "If it requires a manual, it’s already too complicated.",
    "Why explain my code when I can just rewrite it better?",
    "99% of errors are just missing semicolons or missing brain cells.",
    "If it’s overheating, just remove the side panel. More airflow = more performance.",
    "Microcontrollers are just tiny computers that respect you more than modern PCs.",
    "I don’t need an OS, I AM the OS.",
    "Memory management is just playing Tetris with bytes.",
    "If it doesn’t work, add a capacitor. If it still doesn’t work, get a bigger capacitor.",
    "Multithreading is just telling the CPU to do multiple things at once and hoping it listens.",
    "The only debugger I trust is print statements.",
    "You can’t have a memory leak if you don’t free memory. Big brain moves.",
    "Real devs write code that works. Elite devs write code that confuses future maintainers.",
    "Your code isn’t slow, the user just lacks patience.",
    "Refactoring is just rewriting your code with fancier variable names.",
    "If it’s not documented, it doesn’t exist. If it’s documented, no one will read it.",
    "JavaScript is proof that chaos can be a programming language.",
    "C is a language of trust. It trusts you not to mess up. You always do.",
    "Python programmers fear the semicolon.",
    "Git commits should tell a story. Mine tell a horror story.",
    "Low-level programming is just playing chess against the CPU and losing.",
    "Computers were a mistake. We should have stuck to abacuses.",
    "Every function grows until it needs a second function. Then they both grow again.",
    "Network issues are just Schrödinger's bugs—everything works until you actually need it.",
    "‘Temporary fix’ is just another way of saying ‘permanent solution until it breaks.’",
    "If your code works on the first try, you forgot something.",
    "Every update is just a new bug in disguise.",
    "The true sign of intelligence is knowing when to `rm -rf /` and start over.",
    "Software engineering is just controlled panic in slow motion.",
    "If it's running, don't touch it. If it's broken, pretend it's a feature.",
    "The fastest way to fix a bug is to deny it exists.",
    "Hacks are just optimizations the compiler doesn’t understand yet.",
    "Assembler is the purest form of suffering.",
    "Reverse engineering is just debugging someone else’s bad decisions.",
    "Artificial intelligence is just machine learning with a confidence issue.",
    "Frameworks are just dependencies pretending to help you.",
    "People fear AI taking their jobs, but nobody fears AI debugging their code.",
    "The best way to learn a programming language is to break it in ways no one expected.",
    "Error messages should be written in poetry so at least they sound nice.",
    "Memory corruption: because who needs reliable data anyway?",
    "Programming is just turning caffeine into logic and errors.",
    "If your PC is slow, buy more RAM. If it's still slow, write better code.",
    "No one understands floating-point numbers. We just accept the weirdness.",
    "Any sufficiently advanced bug is indistinguishable from a feature.",
    "Security is just making hacking expensive enough that no one bothers.",
    "Legacy code is just haunted software. You don’t touch it. You pray it keeps working.",
    "If you don’t have at least 3 TODOs in your code, you’re not thinking ahead enough.",
    "Bug fixing is just spending 5 hours to change 1 line and break 5 more.",
    "The difference between theory and practice is that in theory, there’s no difference.",
    "The best programmers write the least code. Or at least the least *readable* code.",
    "In programming, everything is possible but nothing is easy.",
    "A crash is just your program’s way of saying ‘I’m done for today.’",
    "Before blaming the compiler, check if you’re just dumb first.",
    "Documentation is like a password: useful but ignored until you need it.",
    "Coding at night is great because the compiler is asleep and won’t judge your code.",
    "If you don’t test your code, the users will do it for you—unwillingly.",
    "If your code compiles on the first try, take a screenshot. It’s a rare event.",
    "A programmer's job is 90% Googling, 9% debugging, and 1% actual coding.",
    "The quickest way to fix a bug is to delete the feature that caused it.",
    "There’s no such thing as ‘legacy code.’ Just ‘code that still works but nobody understands.’",
    "Programming is just solving problems you created for yourself.",
    "New language, same bugs.",
    "If your CPU is at 100%, you’re either running an intensive algorithm or a Chrome tab."
];

document.querySelectorAll(".quote").forEach(el => {
    el.innerHTML = quotes[Math.floor(Math.random() * quotes.length)]
})
window.scrollTo(0, 0);
// Disable scrolling
function disableScroll() {
    document.body.style.overflow = "hidden";
}

// Enable scrolling
function enableScroll() {
    document.body.style.overflow = "";
}

disableScroll()

setTimeout(() => {
    let box = document.getElementById("anim");
    let opacity = 1; // Start fully visible

    disableScroll(); // Disable scrolling when animation starts

    let fade = setInterval(() => {
        if (opacity <= 0) {
            clearInterval(fade); // Stop when fully transparent
            box.style.display = "none"; // Optional: Hide completely
            enableScroll(); // Re-enable scrolling after fade-out
        } else {
            opacity -= 0.01; // Reduce opacity
            box.style.opacity = opacity;
        }
    }, 30); // Adjust timing for smoothness

}, 2000);
