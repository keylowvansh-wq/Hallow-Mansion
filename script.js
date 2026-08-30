var step = 1;
var cur = document.getElementById('cursor');
var aud = null;
document.addEventListener('mousemove', function(e){
cur.style.left = e.clientX + 'px';
cur.style.top = e.clientY + 'px';
});
document.addEventListener('mousedown', function(){
cur.style.width = '10px';
cur.style.height = '10px';
});
document.addEventListener('mouseup', function(){
cur.style.width = '20px';
cur.style.height = '20px';
});

document.getElementById('fear').addEventListener('input', function(e){
var v = e.target.value;
var lbl = document.getElementById('fearLabel');
if(v < 4)
lbl.innerText = "Level " + v + ": Mild";
else if(v < 7)
lbl.innerText = "Level " + v + ": Moderate";
else if(v < 9)
lbl.innerText = "Level " + v + ": Severe";
else
lbl.innerText = "Level " + v + ": LETHAL";
if(v>=9){
lbl.style.color = 'red';
document.body.style.background = '#1a0000';
}
else{
lbl.style.color = '#ff7518';
document.body.style.background = '#0a0a0a';
 }
});
document.getElementById('notes').addEventListener('input', function(e){
var txt = e.target.value.toLowerCase();
if(txt.includes('help') || txt.includes('scared') || txt.includes('die') || txt.includes('stop')){
e.target.classList.add('red-text');
if(!aud){
aud = new (window.AudioContext || window.webkitAudioContext)();
var o = aud.createOscillator();
var g = aud.createGain();
o.type = 'sine';
o.frequency.value = 50;
g.gain.value = 0.02;
o.connect(g);
g.connect(aud.destination);
o.start();
 }
}
else{
e.target.classList.remove('red-text');
  }
});

function nextStep(){
if(step == 1){
var n = document.getElementById('fname').value;
if(n.length < 2){
alert("Please enter your name.");
return;
}
document.getElementById('waiver').style.display = 'block';
document.getElementById('nextBtn').innerText = "I ACCEPT";
step = 2;
}
else if(step==2){
var chk = document.getElementById('agree').checked;
if(!chk){
document.getElementById('formBox').style.borderColor = 'red';
setTimeout(function(){ document.getElementById('formBox').style.borderColor = '#333'; }, 500);
return;
}
document.getElementById('formBox').style.display = 'none';
document.getElementById('loader').style.display = 'block';
runLoader();
 }
}
function runLoader(){
var p = 0;
var txts = ["Connecting to underworld...", "Verifying mortality...", "Locating nearest plot...", "Binding soul to contract...", "ERROR: SOUL NOT FOUND. RETRYING..."];
var t = document.getElementById('loadTxt');
var fill = document.getElementById('progFill');
var int = setInterval(function() {
p += Math.random() * 5;
if(p > 99)
p = 99;
fill.style.width = p + '%';

if(p > 20 && p < 40)
t.innerText = txts[1];
if(p > 40 && p < 60)
t.innerText = txts[2];
if(p > 60 && p < 80)
t.innerText = txts[3];
if(p >= 90)
t.innerText = txts[4];
}, 200);

setTimeout(function(){
clearInterval(int);
fill.style.width = '100%';
t.innerText = "TICKET RESERVED.";
setTimeout(showTicket, 2000);
 },12000);
}
function showTicket(){
alert("Ticket Generated!");
}
