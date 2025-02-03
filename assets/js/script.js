document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Loaded!");

    const demoSection = document.getElementById("demoSection");
    const startDemoButton = document.getElementById("startDemo");
    const backButton = document.getElementById("backButton");

    startDemoButton.addEventListener("click", () => {
        console.log("Start Demo Clicked!");
        demoSection.style.display = "block";
        startDemoButton.style.display = "none";
    });

    backButton.addEventListener("click", () => {
        console.log("Back to Landing Page Clicked!");
        demoSection.style.display = "none";
        startDemoButton.style.display = "inline-block";
    });

    const greetButton = document.getElementById("greetButton");
    greetButton.addEventListener("click", () => {
        const name = document.getElementById("nameInput").value.trim();
        const greeting = name ? `Hello, ${name}! Welcome to the demo.` : "Please enter your name.";
        document.getElementById("greetingOutput").innerText = greeting;
    });

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
