const passwordChars = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0","1","2","3","4","5","6","7","8","9",
    "!","@","#","$","%","^","&","*","(",")",
    "_","-","+","=","[","]","{","}","|",
    ";",":",",",".","<",">","?","/","~"
];

let generatePassword = document.getElementById("pass-btn");

let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");

let passLen = Math.floor(Math.random() * 8)  + 10;

generatePassword.addEventListener("click", function(){
    let p1 = "";
    let p2 = "";

    for(let i=0;i<passLen;i++){
        let r1 = Math.floor(Math.random() * passwordChars.length);
        p1 += passwordChars[r1];

        let r2 = Math.floor(Math.random() * passwordChars.length);
        p2 += passwordChars[r2];
    }
    pass1.textContent = p1;
    pass2.textContent = p2;
});

document.getElementById("pass1").addEventListener("click", function(){
    navigator.clipboard.writeText(this.textContent);
    alert("copied");
});

document.getElementById("pass2").addEventListener("click", function(){
    navigator.clipboard.writeText(this.textContent);
    alert("copied");
});

