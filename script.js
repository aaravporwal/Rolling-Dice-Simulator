document.addEventListener("DOMContentLoaded", function() {
    const rollButton = document.getElementById("rollButton");
    const diceImage = document.getElementById("diceImage");
    const resultParagraph = document.getElementById("result");
    const diceImages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
    
    rollButton.addEventListener("click", function() {
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        resultParagraph.textContent = `You rolled the number: ${diceRoll} !` ;
        
        diceImage.classList.add("rolling");
        setTimeout(() => {
            diceImage.classList.remove("rolling");
            diceImage.src = diceImages[diceRoll - 1];
        }, 1000);
    });
});
