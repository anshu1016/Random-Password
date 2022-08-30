const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let showPassword = document.querySelectorAll(".pa")

let generateBtn = document.querySelector("#btn")
generateBtn.addEventListener("click",clickHandler);
let passLength = 15;
function getRandom(){
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}

function clickHandler(){
    let passwords = generatePassword(passLength)
    for(let i=0;i<showPassword.length;i++)
    {
        showPassword[i].textContent = passwords[i];
        //navigator.clipboard.writeText(showPassword[i].textContent);
        syncText(showPassword[i]);
    }
}
function syncText(text){
    navigator.clipboard.writeText(text.textContent);
}
function generatePassword(passLength){
    const passwordArray = []
    for(let i=1;i<=2;i++)
    {
        let resultString = "";
        for(let j=1;j<=passLength;j++){
            let randomIndex = Math.floor(Math.random() * characters.length)
            resultString+=characters[randomIndex]
        }
        passwordArray.push(resultString)
    }
    return passwordArray
}