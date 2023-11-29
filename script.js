var timer = 60;
var score = 0;
function getNewHit() {
    var rm = Math.floor(Math.random() * 10);
    document.querySelector("#Hitval").textContent = rm;

}

function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 250; i++) {
        var ele = Math.random() * 10;

        clutter += `<div id="${i}" class="bubble">${Math.floor(ele)}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {

    var timerInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#TM").textContent = timer;
        } else {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function listen() {
    // Listen to the button click event
    document.querySelector('#pbtm').addEventListener('click', function (dets) {
        console.log(dets.srcElement.innerHTML);
        var clickedBubble = dets.srcElement.innerHTML;
        var currentHit = document.querySelector("#Hitval").innerHTML;
        if (clickedBubble == currentHit && timer>0) {
            increaseScore();
        }
        getNewHit();
        makeBubble();
        
    });
}

function increaseScore() {
    score += 10;
    document.querySelector("#Iscore").textContent = score;
}

getNewHit();
runTimer();
makeBubble();
listen();
