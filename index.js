var timer = 60; 
var score = 0;
var hitrn = 0;


// jispe click kroge voh element pr event raise hoga, aur event listener na milne pr event element ke parent pr listener dhundhega, wha bhi nah milne pr event parent ke parent ke parent pr listener dhundega. --> EVENT BUBBLING CONCEPT
function increaseScore(){
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = hitrn;
}

const makeBubble = () =>{
    var clutter = '';

for(var i = 1; i<=96; i++){
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function timerrun(){
   var timerInt =  setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timervalue').textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
} 


document.querySelector("#pbtm").addEventListener('click', function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

getNewHit();
timerrun();
makeBubble();
