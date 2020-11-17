

// I want to have a list of words 
const wordsArray = ['hello', 'goodbye', 'test', 'two words'];

// Random words from the list should be chosen 
const randomWordEl = wordsArray[Math.floor(Math.random() * wordsArray.length)];
const words = document.querySelector('.words');



const correctLetter = [];


console.log(correctLetter);




function displayWord(){
    words.innerHTML = `${randomWordEl.split('').map(
        letter => `<span class="letter"> 
            ${correctLetter.includes(letter) ? letter : '' }
        </span>`).join('')}`;
}


window.addEventListener('keydown', letter => {
    console.log(letter.key)
    console.log(randomWordEl)
        if(randomWordEl.includes(letter.key)){
            correctLetter.push(letter.key)
            console.log(correctLetter);
            
        }
        displayWord();
    });




    // console.log("hellotest");
            
    // displayWord();
    // console.log(correctLetter);



displayWord();