

// I want to have a list of words 
const wordsArray = ['hello', 'goodbye', 'test', 'two words'];

// Random words from the list should be chosen 
const randomWordEl = wordsArray[Math.floor(Math.random() * wordsArray.length)];
const words = document.querySelector('.words');



const correctLetter = ['h', 'e', 'l', 'l', 'o'];






function displayWord(){
    words.innerHTML = `${randomWordEl.split('').map(
        letter => `<span class="letter"> 
            ${correctLetter.includes(letter) ? letter : '' }
        </span>`).join('')}`;
}

displayWord();