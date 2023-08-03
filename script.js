let input = document.getElementById("input")
let h1 = document.getElementById("h1")
let words =["" ,"xiami", "subaru", "bmw","opel","mazda","datsun","bugatti","maserati","chevrolet","rolls-royce"]
let secretWord = words[Math.floor(Math.random())*10]
let shifr = document.getElementById("shifr")
shifr.innerHTML = "_".repeat(secretWord.length)
let ok = document.getElementById("ok")
let letters = ""
let newgame = document.getElementById("newGame")
let rules = document.getElementById("rules")
let mistakes = 0
let image = document.getElementById("image")
ok.onclick = function (event) {
    event.preventDefault();
    letters = letters + input.value
    rules.innerHTML = "used letters: " + letters
    if (secretWord.includes(input.value)) {
    
        shifr.innerHTML = ""
        for (let i = 0; i < secretWord.length; i = i + 1) {
            console.log("maxim" + i);
            if (letters.includes(secretWord[i])) {
                console.log("yes");
                shifr.innerHTML = shifr.innerHTML + secretWord[i]
            }
            else {
                console.log("no");
                shifr.innerHTML = shifr.innerHTML + "_"
            }

        }
if (shifr.innerHTML==secretWord) {
    h1.innerHTML = "you win"
}
    }
    else {
        console.log("no");
        mistakes = mistakes + 1
        image.src="hangman/hangman"+mistakes+".png"
        console.log(mistakes);
        
     if(mistakes==6
     ){
        h1.innerHTML = "you lose secretword="+secretWord
        ok.disabled=true
     }
    }
}
for (let i = 0; i < 100; i = i + 1) {
    console.log("maxim" + i);
}
newgame.onclick=function (event) {
    h1.innerHTML="hangman"
    event.preventDefault();
    mistakes=0
 image.src="hangman/hangman"+0+".png"
rules.innerHTML='Type your letter and press “ok”'
secretWord = words[Math.floor(Math.random()*10)]
shifr.innerHTML="_".repeat(secretWord.length)
 letters = ""
 ok.disabled=false
}
// 1. Повторить HTML, CSS, Javascript