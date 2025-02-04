document.addEventListener("DOMContentLoaded", () => {
    const colorBox = document.querySelector(".color-box");
    const colorOptionsContainer = document.getElementById("colorOptions");
    const gameStatus = document.getElementById("gameStatus");
    const scoreDisplay = document.getElementById("score");
    const newGameButton = document.getElementById("newGameButton");

    let score = 0;
    let targetColor = "";

    function getRandomColor() {
        return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }

    function generateColors() {
        colorOptionsContainer.innerHTML = "";
        let colors = [];
        targetColor = getRandomColor();
        colorBox.style.backgroundColor = targetColor;

        for (let i = 0; i < 6; i++) {
            let color = getRandomColor();
            colors.push(color);
        }

        if (!colors.includes(targetColor)) {
            colors[Math.floor(Math.random() * 6)] = targetColor;
        }

        colors.forEach(color => {
            const button = document.createElement("button");
            button.style.backgroundColor = color;
            button.dataset.testid = "colorOption";
            button.addEventListener("click", () => checkGuess(color));
            colorOptionsContainer.appendChild(button);
        });
    }

    function checkGuess(selectedColor) {
        if (selectedColor === targetColor) {
            gameStatus.textContent = "Correct! 🎉";
            score++;
            scoreDisplay.textContent = score;
            setTimeout(generateColors, 1000); // Change target color after a short delay
        } else {
            gameStatus.textContent = "Wrong! Try again. ❌";
        }
    }

    newGameButton.addEventListener("click", () => {
        score = 0;
        scoreDisplay.textContent = score;
        gameStatus.textContent = "";
        generateColors();
    });

    generateColors();
});