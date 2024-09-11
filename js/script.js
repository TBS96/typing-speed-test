'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        "The quick brown fox jumps over the lazy dog.",
        "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        "Life is like a coin. You can spend it any way you wish, but you only spend it once.",
        "Never let the fear of striking out keep you from playing the game.",
        "The best way to predict your future is to create it.",
        "If you want to live a happy life, tie it to a goal, not to people or things.",
        "You must expect great things of yourself before you can do them.",
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        "Everything you want is on the other side of fear.",
        "Believe and act as if it were impossible to fail.",
        "Spread love everywhere you go. Let no one ever come without leaving happier."
    ];

    const quoteDisplay = document.getElementById('quote');
    const inputBox = document.getElementById('input-box');
    const startBtn = document.getElementById('start-btn');
    const resultDisplay = document.getElementById('result-div');

    let currentQuote, startTime;
    startBtn.addEventListener('click', startTest);
    inputBox.addEventListener('input', checkInput);

    function startTest(){
        const randomIndex = Math.floor(Math.random() * quotes.length);
        currentQuote = quotes[randomIndex];
        quoteDisplay.textContent = currentQuote;
        inputBox.value = '';
        inputBox.removeAttribute('disabled');
        inputBox.focus();
        resultDisplay.textContent = '';
        startTime = new Date().getTime();
    }

    function checkInput(){
        const typedText = inputBox.value;

        if(typedText === currentQuote)
        {
            const endTime = new Date().getTime();
            const timeTaken = (endTime - startTime) / 1000;

            // words per minute:
            const wordsPerMin = typedText.split(' ').length / timeTaken * 60;
            inputBox.setAttribute('disabled', 'true');

            resultDisplay.innerHTML = `
                <p>Your typing speed: <span style="font-weight: bold;">${wordsPerMin.toFixed(2)} </span>Words/Minute</p>
                <p>You took <span style="font-weight: bold;">${((endTime - startTime) / 1000)}</span>s to write <span style="color: red">'${currentQuote}'</span></p>
            `;
        }
    }
	
	window.onbeforeunload = () => {
		return '';
	}
});