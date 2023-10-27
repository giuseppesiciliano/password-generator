// SETTINGS

// Params
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = "!@#$%^&*()_-+=<>?";

const rangeInput = document.getElementById('myRange');

// min
rangeInput.min = 4;
setMinValue = document.getElementById("min-value").innerHTML = rangeInput.min;

// default
rangeInput.value = 8;
let setDefault = document.getElementById("value-show").innerHTML = rangeInput.value;

// max
rangeInput.max = 20;
setMaxValue = document.getElementById("max-value").innerHTML = rangeInput.max;


let valueSpan = document.getElementById('value-show');

// al cambio del numero di caratteri (imput) viene restituito il valore numeri alla "LUNGHEZZA"
rangeInput.addEventListener('input', function () {
    valueSpan.textContent = rangeInput.value;
});


function generatePassword() { 
    let passwordLength = rangeInput.value;
    
    let includeUppercase = document.getElementById("switch-1").checked;
    let includeLowercase = document.getElementById("switch-2").checked;
    let includeNumbers = document.getElementById("switch-3").checked;
    let includeSpecialChars = document.getElementById("switch-4").checked;
    
    let validChars = "";

    // validations
    if(!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialChars) {
        alert('Seleziona almeno un parametro per continuare!');
    }
    if(includeUppercase) {
        validChars += uppercase;
    }
    if(includeLowercase) {
        validChars += lowercase;
    }
    if(includeNumbers) {
        validChars += numbers;
    }
    if(includeSpecialChars) {
        validChars += specialChars;
    }

    // reset the password in the screen
    let password = "";
    
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars.charAt(randomIndex);
    }
    
    // display password in the screen
    document.getElementById("password").textContent = password;
}
