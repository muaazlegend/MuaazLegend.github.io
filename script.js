const SECRET="0910";let entered="";let popped=0;let candle=false;
const names=["Rameen"];
function makeSparkles(){const box=document.getElementById("sparkles");for(let i=0;i<55;i++){let s=document.createElement("i");s.className="spark";s.style.left=Math.random()*100+"%";s.style.animationDelay=(Math.random()*5)+"s";s.style.animationDuration=(3+Math.random()*5)+"s";s.style.width=s.style.height=(2+Math.random()*5)+"px";box.appendChild(s)}}makeSparkles();
function go(n){document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));document.getElementById("s"+n).classList.add("active");window.scrollTo(0,0)}
function updateDots(){document.getElementById("dots").textContent=[0,1,2,3].map(i=>i<entered.length?"●":"○").join(" ")}
function key(n){if(entered.length>=4)return;entered+=n;updateDots();if(entered.length===4){setTimeout(()=>{if(entered===SECRET){entered="";updateDots();go(3)}else{document.getElementById("error").textContent="Wrong code 💔 — try again";entered="";setTimeout(()=>{document.getElementById("error").textContent="";updateDots()},900)}},180)}}
function backspace(){entered=entered.slice(0,-1);updateDots()}
function blowCandles(){if(candle)return;candle=true;document.querySelector(".flame").textContent="✨ 1 7 ✨";document.getElementById("afterCake").classList.remove("hidden")}
function pop(el,msg){if(el.classList.contains("popped"))return;el.classList.add("popped");popped++;document.getElementById("wishCount").textContent=`Popped ${popped}/6`;document.getElementById("wishbox").textContent=msg;if(popped===6)document.getElementById("afterBalloons").classList.remove("hidden")}
function revealScratch(el){el.classList.add("revealed");document.getElementById("afterScratch").classList.remove("hidden")}
