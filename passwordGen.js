const lowerCase = document.getElementById("lowerCase")
const upperCase = document.getElementById("upperCase")
const nums = document.getElementById("nums")
const symbols = document.getElementById("symbols")
const lengthElement = document.getElementById("length")
const passResult = document.getElementById("passResult")



function genPass(){

    const lengthPass = lengthElement.value;

    const lowerLetters= "abcdefghijklmnopqrstuvwxyz";
    const upperLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers="0123456789";
    const symbolChars = "!@#$%^&*()_-+=";
    let allowedChars = "";
    let password = ""; 

    lowerCase.checked ? allowedChars += lowerLetters : '';
    upperCase.checked ? allowedChars += upperLetters : '';
    numbers.checked ? allowedChars += numbers : '';
    symbols.checked ? allowedChars += symbolChars : '';

    console.log(allowedChars)
    console.log(lengthPass);
    if (lengthPass <= 0){
        passResult.textContent = "cannot have a password with a length less than 0"
    } else if(lengthPass > 30){
        passResult.textContent = "We recommend your password being under 30 characters"
    } else if(allowedChars.length === 0){
        passResult.textContent = "Atleast 1 set of characters must be selected"
    } else {
        for (let i = 0; i < lengthPass; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
        passResult.textContent = `Generated Password: ${password}`;
    }

}

