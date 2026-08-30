var step = 1;
var cur = document.getElementById('cursor');
document.addEventListener('mousemove', function(e){
cur.style.left = e.clientX + 'px';
cur.style.top = e.clientY + 'px';
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
setTimeout(function(){
document.getElementById('formBox').style.borderColor = '#333';
},500);
return;
 }
alert("Processing...");
   }
}
