

// I want to have a list of words 
const wordsArray = ['hello', 'goodbye', 'test', 'two words'];

// Random words from the list should be chosen 
const randomWordEl = Math.floor(Math.random() * wordsArray.length);

// display random words in html
const letterEl = document.querySelector('.letter').innerHTML = wordsArray[randomWordEl];


console.log(wordsArray[randomWordEl]);



// ----------------------

// The word should be hidden 
// if keydown is correct then the letter should show 
// else the letter should go in the letter array