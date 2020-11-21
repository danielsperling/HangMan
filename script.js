
const wordsArray = [['beautiful','attractive'],['bossy','controlling'],['fair','unbiassed'],
['funny','humorous'],['happy','content'],['diligent','hardworking'],['lazy','lethargic'],
['mean','unfriendly'],['outgoing', 'friendly'],['strong','stable'],['weak','frail'],
['valid','authorized'],['positive','optimistic']]

// Random words from the list should be chosen 
let randomWordEl = wordsArray[Math.floor(Math.random() * wordsArray.length)];
const words = document.querySelector('.words');
const wrongLetters = document.querySelector('.letters');
const bodyPart = document.querySelectorAll('.bodyParts');
const popup = document.querySelector('.notification');
const congrats = document.querySelector('.final-message-container');
const cong = document.querySelector('.final');
const button = document.querySelector('.btn');
const points = document.querySelector('.score');
const tip = document.querySelector('.tips');


let score = 0

const correctLetter = [];
const wrongLetter = [];
console.log(randomWordEl);


tip.innerHTML = randomWordEl[1]


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
        if(wrongLetter.length === bodyPart.length){
            cong.innerHTML = `You Lost! <br> The correct word was : <u>${randomWordEl}</u> `
            congrats.style.display = "flex"
            window.removeEventListener("keydown", typing, true);  
            tip.innerHTML = randomWordEl[1]    // Succeeds

        }

}


function showNotification() {
    popup.classList.add('show');
    
    setTimeout(() => {
        popup.classList.remove('show');

    }, 2000);
    
}
const typing = function(letter)  {
    if(letter.keyCode >= 65 && letter.keyCode <= 90){
        const lettr = letter.key
    

        if(randomWordEl[0].includes(lettr)){
            if(!correctLetter.includes(lettr)){
                correctLetter.push(lettr);
                displayWord();
            } else {
                correctLetter.push(lettr);
                displayWord();
                showNotification()
                tip.innerHTML = randomWordEl[1]
            }
      
        }else if(!randomWordEl[0].includes(lettr)){
            if(!wrongLetter.includes(lettr)){
                wrongLetter.push(lettr);
                console.log(wrongLetter);
                displayWrongLetter();
            }else {
                showNotification();
            }
        }
    }
    };

    window.addEventListener('keydown', typing, true)

button.addEventListener('click', () => {
     correctLetter.splice(0);
     wrongLetter.splice(0);

     randomWordEl = wordsArray[Math.floor(Math.random() * wordsArray.length)];

     displayWord()
     displayWrongLetter()

     congrats.style.display ="none"
     window.addEventListener('keydown', typing, true)
     tip.innerHTML = randomWordEl[1]
     console.log(randomWordEl);


})

function displayFirst(){
    words.innerHTML = `<span class="letter">${randomWordEl[0].split('')[0]}</span>`
}

function displayWord(){

    words.innerHTML = `${randomWordEl[0].split('').map(
        letter => `<span class="letter">
            
            ${correctLetter.includes(letter) ? letter : '' }
        </span>`).join('')}`;

        const correctWord = words.innerText.replace(/\n/g, '')
        console.log(correctWord);
        if(randomWordEl[0] === correctWord){
            cong.innerHTML = "CONGRATS YOU WON!!!"
            congrats.style.display = "flex"
            window.removeEventListener("keydown", typing, true); 
            points.innerHTML = `Words Found : ${score += 1}`
           
        }
}
 

    displayWord()

// I want when someone types a wrong letter to make the body parts appear

