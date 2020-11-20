

// I want to have a list of words 
const wordsArray = ["penetrating", "topmost", "macabre", "impolitic", "unanalyzed", "roughshod", "homebound",
                    "sanest", "tolerable", "steely", "wearisome", "wealthy", "interior", "downtalking", "bimonthly", "beribboned", "sorest",
                    "human", "thoughtful", "sceptical", "salivary", "beloved", "answerable", "unconcerned", "holy", "unprecedented", "conscionable",
                    "voluble", "slim", "tentative", "resident", "derogatory", "unequal", "corporate", "vernacular", "grotesque", "older", "ghostlike", "aflame", "copernican",
                    "inadvertent", "international", "indelible", "ineluctable", "seductive", "undeclared", "dual", "gingerly", "modern", "bilinear", "theatrical", "proportionate",
                    "febrile", "ivory", "coltish", "immovable", "untidy", "informational", "uppermost","expectable", "inhospitable", "ecumenical", "arctic", "charitable", "opalescent",
                    "humanitarian", "canny", "bedfast", "clean", "talkative", "unreconstructed",
                    "enzymatic", "defiant", "puny", "rash", "quickest", "insubordinate", "inexcusable",
                    "surly", "intranasal", "priestly", "dark", "lifelong", "nonexistent", "shorter", "rougher", "objective", "hardboiled", "indigestible", "quiet", "watchful", "arcaded",
                    "safer", "very", "unanswered", "chubby", "unresolved", "cylindrical", "lewd", "anemic"]

// Random words from the list should be chosen 
let randomWordEl = wordsArray[Math.floor(Math.random() * wordsArray.length)];
const words = document.querySelector('.words');
const wrongLetters = document.querySelector('.letters');
const bodyPart = document.querySelectorAll('.bodyParts');
const popup = document.querySelector('.notification');
const congrats = document.querySelector('.final-message-container')
const cong = document.querySelector('.final')
const button = document.querySelector('.btn')





const correctLetter = [];
const wrongLetter = [];
console.log(randomWordEl);



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
            cong.innerHTML = "You Lost!"
            congrats.style.display = "flex"
            
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
    

        if(randomWordEl.includes(lettr)){
            if(!correctLetter.includes(lettr)){
                correctLetter.push(lettr);
                displayWord();
            } else {
                correctLetter.push(lettr);
                displayWord();
                showNotification()
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
    };

    window.addEventListener('keydown', typing, true)

button.addEventListener('click', () => {
     correctLetter.splice(0);
     wrongLetter.splice(0);

     randomWordEl = wordsArray[Math.floor(Math.random() * wordsArray.length)];

     displayWord()
     displayWrongLetter()

     congrats.style.display ="none"
     console.log(randomWordEl);
})

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
            window.removeEventListener('keydown', typing, true);      // Succeeds

        }
}
 


    displayWord()

// I want when someone types a wrong letter to make the body parts appear

