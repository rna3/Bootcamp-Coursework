document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#guess-form");
    const guessInput = document.querySelector("#guess-input");
    const guessButton = document.querySelector("#guess-button");
    const messageArea = document.querySelector("#message-area");
    const scoreDisplay = document.querySelector("#game-stats .score")
    const timerDisplay = document.querySelector("#timer");
    let timeLeft = 60;

    function updateTimer() {
        if (timeLeft > 0) {
            timeLeft--;
            timerDisplay.innerText = `Time left: ${timeLeft}s`;
        } else {
            guessInput.disabled = true;
            guessButton.disabled = true;
            timerDisplay.innerText = "Time's up!";
        }
    }

    const timer = setInterval(updateTimer, 1000);


    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        const guess = guessInput.value;

        try {  
            const response = await axios.get("/submit-guess", {params:{guess: guess}})
            
            messageArea.innerText = response.data.message;

            scoreDisplay.innerText = `Current Score: ${response.data.score}`;

            guessInput.value = "";

        } catch (error) {
                console.error("Error:", error);}

        });
})