var count=3
let choices=["rock","paper","scissors"];var vaalue;document.getElementById("submit").addEventListener("click",()=>{if(document.querySelector("#chances").value>0&&document.querySelector("#chances").value<100){vaalue=document.querySelector("#chances").value
setTimeout(()=>{document.querySelector("#chances").style.display="none"
document.querySelector("#submit").style.display="none"
document.querySelector(".type").textContent="The game is starting hold on"
var text=document.querySelector(".type").textContent
setTimeout(()=>{},500);const interval1=setInterval(()=>{document.querySelector(".type").textContent=text+" "+count
count--},800);setTimeout(()=>{clearInterval(interval1)},2600)
setTimeout(()=>{document.querySelector(".type").textContent="Every this is ready start the game "
document.querySelector("#start").style.display="block"},4000)},500)}else{document.querySelector(".type").textContent="please enter number and above 0 and below than 100 thank u refresh the page again to restart"}
var left=vaalue})
var draw=0;document.querySelector("#start").addEventListener("click",()=>{document.querySelector("#start").style.display="none"
document.querySelector(".middle").style.display="none"
document.querySelector(".before").style.display="none"
document.querySelector(".after").style.display="block"
document.querySelector(".finalScore").textContent="Your choice || Computer choice || Won - 0 || Lost - 0 || Draw - 0 || Chances left -"+vaalue
for(let i=0;i<3;i++){document.querySelectorAll(".btn")[i].addEventListener("click",(e)=>{if(vaalue>0){vaalue--
let rNum=Math.floor(Math.random()*3);const computerChoice=choices[rNum];let userChoice=who(e);let winner=whoWon(userChoice,computerChoice);document.querySelector(".txt").textContent=realWinner(winner);document.querySelector(".txt").classList.add("blink")
setTimeout(()=>{document.querySelector(".txt").classList.remove("blink")},300)
document.getElementsByClassName("ur")[0].textContent="Your Score - "+myScore
document.getElementsByClassName("cp")[0].textContent=compScore+" - Computer Score"
document.querySelector(".finalScore").textContent=userChoice+" || "+computerChoice+" || "+"Won - "+myScore+" || "+"Lost - "+compScore+" || "+"Draw - "+draw+" || "+"Chances left - "+" "+vaalue
console.log("Comp choice - "+computerChoice);console.log("Your choice - "+userChoice)}if(vaalue<=0){if(myScore>compScore){document.querySelector(".txt").textContent="Yooooooo you won "}else if(compScore>myScore){document.querySelector(".txt").textContent="damm! no problem try again"}else{document.querySelector(".txt").textContent="wait what it's too rare that the match is draw"}}})}})
function who(s){if(s.target==document.querySelectorAll(".btn")[0]){return"rock"}else if(s.target==document.querySelectorAll(".btn")[1]){return"paper"}else if(s.target==document.querySelectorAll(".btn")[2]){return"scissors"}}
var myScore=0;var compScore=0;function whoWon(userChoice,computerChoice){if((userChoice=="rock"&&computerChoice=="scissors")||(userChoice=="paper"&&computerChoice=="rock")||(userChoice=="scissors"&&computerChoice=="paper")){myScore++
return!0}else if(userChoice===computerChoice){return"draw"}else{compScore++
return!1}}
function realWinner(result){if(result===!0){document.querySelector(".txt").style.color="black"
setTimeout(()=>{document.querySelector(".txt").style.color="#43ffcd"},300);return"You won this round!"}else if(result===!1){document.querySelector(".txt").style.color="black"
setTimeout(()=>{document.querySelector(".txt").style.color="red"},300);return"Computer won this round!"}else{document.querySelector(".txt").style.color="black"
setTimeout(()=>{document.querySelector(".txt").style.color="#ff8000"},300);return"It's a draw!"}}