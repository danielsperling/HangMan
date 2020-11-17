

// I want to have a list of words 
const wordsArray = ['hello', 'goodbye', 'test', 'two words'];

// Random words from the list should be chosen 
const randomWordEl = wordsArray[Math.floor(Math.random() * wordsArray.length)];
const words = document.querySelector('.words');
const wrongLetters = document.querySelector('.letters')



const correctLetter = [];
const wrongLetter = [];


console.log(correctLetter);




function displayWord(){
    words.innerHTML = `${randomWordEl.split('').map(
        letter => `<span class="letter"> 
            ${correctLetter.includes(letter) ? letter : '' }
        </span>`).join('')}`;
}


function displayWrongLetter(){
    wrongLetters.innerHTML = `${wrongLetter.map
        (letter =>`<span class="wrongLetter"> ${letter} </span>`).join('')}`;


}


window.addEventListener('keydown', letter => {
    console.log(letter.key)
    console.log(randomWordEl)

        if(randomWordEl.includes(letter.key)){
            if(!correctLetter.includes(letter.key))
            correctLetter.push(letter.key);
            console.log(correctLetter);
            displayWord();

        }else if(!randomWordEl.includes(letter.key)){
            if(!wrongLetter.includes(letter.key)){
                wrongLetter.push(letter.key);
                console.log(wrongLetter);
                displayWrongLetter();
            }
        }
    });




    if(typeof wrongLetter[0] === 'string') {
        document.querySelector('#head').classList.remove('body-part')
    }
// I want when someone types a wrong letter to make the body parts appear

