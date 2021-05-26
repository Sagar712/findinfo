
let num1 = 0;
function popupmenu() {
    let rotater = document.querySelector(".menubtn-bar");
    let cross = document.querySelector(".bar");
    let menu = document.querySelector(".menuitems");
    let overlay = document.querySelector(".nextoverlay");
    let icon = document.getElementById('changeclas');

    cross.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    rotater.classList.toggle("active");
    if(num1==0){
        icon.className='fas fa-times';
        num1=1;
    }
    else if(num1==1){
        icon.className='fas fa-ellipsis-v';
        num1=0;
    }  
}

// heaader till this. Add code next to this.

function readAndDisplay(path){
    const div = document.querySelector(".infoHere");
    
    fetch(path)
    .then(response => {
        return response.text();
    })
    .then(res => {
        div.innerHTML = res;
    });
    popupmenu();
}
//<button class="btnn" onclick="readAndDisplay('./AllInfo/ShareMarket/market.txt')">Share Market</button>
function readAndDisplayInitialize(path){
    const div = document.querySelector(".infoHere");
    
    fetch(path)
    .then(response => {
        return response.text();
    })
    .then(res => {
        div.innerHTML = res;
    });
}
readAndDisplayInitialize("./AllInfo/ShareMarket/market.html");




