

// I want to have a list of words 
const wordsArray = ['hello', 'goodbye', 'test'];

// Random words from the list should be chosen 
const randomWordEl = wordsArray[Math.floor(Math.random() * wordsArray.length)];
const words = document.querySelector('.words');
const wrongLetters = document.querySelector('.letters');
const bodyPart = document.querySelectorAll('.bodyParts');
const popup = document.querySelector('.notification');
const congrats = document.querySelector('.final-message-container')
const cong = document.querySelector('.popay')

console.log(popup);




const correctLetter = [];
const wrongLetter = [];

function displayWord(){

    words.innerHTML = `${randomWordEl.split('').map(
        letter => `<span class="letter"> 
            ${correctLetter.includes(letter) ? letter : '' }
        </span>`).join('')}`;

        const correctWord = words.innerText.replace(/\n/g, '')
        console.log(correctWord);
        if(randomWordEl === correctWord){
            cong.innerHTML = "CONGRATS YOU WON!!!"
            congrats.style.display = "flex"
            
        }
}


function displayWrongLetter(){

    wrongLetters.innerHTML = 
    `${wrongLetter.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetter.map(letter =>`<span class="wrongLetter"> ${letter} </span>`)}`;

        bodyPart.forEach((part, index) => {
            const wrongGuess = wrongLetter.length; 
            if(index < wrongGuess) {
                part.style.display = 'block';
            } else {
                part.style.display = 'none';
            }
        });
        

}


function showNotification() {
    popup.classList.add('show');
    
    setTimeout(() => {
        popup.classList.remove('show');

    }, 2000);
    
}


window.addEventListener('keydown', letter => {
    if(letter.keyCode >= 65 && letter.keyCode <= 90){
        const lettr = letter.key
    

        if(randomWordEl.includes(lettr)){
            if(!correctLetter.includes(lettr)){
                correctLetter.push(lettr);
                displayWord();
            } else {
                correctLetter.push(lettr);
                displayWord();
            }
      
        }else if(!randomWordEl.includes(lettr)){
            if(!wrongLetter.includes(lettr)){
                wrongLetter.push(lettr);
                console.log(wrongLetter);
                displayWrongLetter();
            }else {
                showNotification();
            }
        }
    }
    });



 


    displayWord()

// I want when someone types a wrong letter to make the body parts appear

