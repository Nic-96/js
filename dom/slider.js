const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const items = document.querySelector('#items');

let curPos = 0;

rightBtn.addEventListener('click', function (e) {
    e.preventDefault
    if (curPos < 500) {
        curPos = curPos + 100;
        items.style.right = curPos + 'px';
    }
})

leftBtn.addEventListener('click', function (e) {
    e.preventDefault
    
    if (curPos > 0) {
        curPos = curPos - 100;
        items.style.right = curPos + 'px';
    }
})