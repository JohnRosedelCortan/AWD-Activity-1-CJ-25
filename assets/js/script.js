document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Loaded!");

    const demoSection = document.getElementById("demoSection");
    const startDemoButton = document.getElementById("startDemo");
    const backButton = document.getElementById("backButton");

    // Show the demo section and hide the landing page button
    startDemoButton.addEventListener("click", () => {
        console.log("Start Demo Clicked!");
        demoSection.style.display = "block";
        startDemoButton.style.display = "none";
    });

    // Back to landing page
    backButton.addEventListener("click", () => {
        console.log("Back to Landing Page Clicked!");
        demoSection.style.display = "none";
        startDemoButton.style.display = "inline-block";
    });

    // Variables and Input/Output
    const greetButton = document.getElementById("greetButton");
    greetButton.addEventListener("click", () => {
        const name = document.getElementById("nameInput").value.trim();
        const greeting = name ? `Hello, ${name}! Welcome to the demo.` : "Please enter your name.";
        document.getElementById("greetingOutput").innerText = greeting;
    });

    // Conditionals
    const checkButton = document.getElementById("checkButton");
    checkButton.addEventListener("click", () => {
        const numberInput = document.getElementById("numberInput").value;
        const number = parseInt(numberInput, 10);

        if (isNaN(number)) {
            document.getElementById("conditionOutput").innerText = "Please enter a valid number.";
            return;
        }

        const result = number % 2 === 0 ? `${number} is even.` : `${number} is odd.`;
        document.getElementById("conditionOutput").innerText = result;
    });

    // Looping (Summation)
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", () => {
        const numInput = document.getElementById("sumInput").value;
        const num = parseInt(numInput, 10);

        if (isNaN(num) || num < 1) {
            document.getElementById("loopOutput").innerText = "Please enter a valid number greater than 0.";
            return;
        }

        let sum = 0;
        for (let i = 1; i <= num; i++) {
            sum += i;
        }
        document.getElementById("loopOutput").innerText = `The sum of numbers from 1 to ${num} is ${sum}.`;
    });
});
