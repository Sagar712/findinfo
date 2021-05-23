
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
    const preTag = document.querySelector(".infoHere");
    
    fetch(path)
    .then(response => {
        return response.text();
    })
    .then(res => {
        let splits = res.split('<!-------------------------------------------------------->');
        console.log(splits[1]);
        preTag.innerHTML = splits[1];
    });
    popupmenu();
}
//<button class="btnn" onclick="readAndDisplay('./AllInfo/ShareMarket/market.txt')">Share Market</button>
function readAndDisplayInitialize(path){
    const preTag = document.querySelector(".infoHere");
    const listItems = document.querySelector('#listItems');
    fetch("./AllInfo/Medical/")
    .then(res => {
        return res.text();
    })
    .then(res => {
        console.log(res);
    })

    
    fetch(path)
    .then(response => {
        return response.text();
    })
    .then(res => {
        let splits = res.split('<!-------------------------------------------------------->');
        preTag.innerHTML = splits[1];
    });
}
readAndDisplayInitialize("./AllInfo/ShareMarket/market.txt");




