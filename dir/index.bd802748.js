"use strict";let secretNumber=Math.trunc(10*Math.random())+1,score=5,highscore=0;const displayMessage=function(e){document.querySelector(".message").textContent=e};document.querySelector(".check").addEventListener("click",(function(){const e=Number(document.querySelector(".guess").value);console.log(e,typeof e),e?e===secretNumber?(displayMessage("🎉 shedey SUPERRR!"),document.querySelector(".number").textContent=secretNumber,document.querySelector("body").style.backgroundColor="#60b347",document.querySelector(".number").style.width="30rem",score>highscore&&(highscore=score,document.querySelector(".highscore").textContent=highscore)):e!==secretNumber&&(score>1?(displayMessage(e>secretNumber?"📈 Too high!":"📉 Too low!"),score--,document.querySelector(".score").textContent=score):(displayMessage("💥 Aye Thot!"),document.querySelector(".score").textContent=0)):displayMessage("⛔️ No number!")})),document.querySelector(".again").addEventListener("click",(function(){score=5,secretNumber=Math.trunc(10*Math.random())+1,displayMessage("Start guessing..."),document.querySelector(".score").textContent=score,document.querySelector(".number").textContent="?",document.querySelector(".guess").value="",document.querySelector("body").style.backgroundColor="#222",document.querySelector(".number").style.width="15rem"}));
//# sourceMappingURL=index.bd802748.js.map