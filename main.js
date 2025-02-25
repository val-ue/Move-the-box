

const get = function (selector) {
    return document.querySelector(selector);
};

const box = get('.box');
const button = get('button');

const boxWidth = 90;
box.style.width = `${boxWidth}px`;

const containerPadding = 5;

let isMovingRight = true;
let movement = 0;

let rgb1 = 255;
let rgb2 = 255;
let rgb3 = 255;

button.addEventListener('click', function () {

    let rgb1 = 215;
    let rgb2 = 155;
    let rgb3 = 155;

    box.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    
    const screenWidth = window.innerWidth - containerPadding;


    if (isMovingRight === true) {

        const boxInterval = setInterval(function() {
            movement += 5;
            box.style.left = `${movement}px`;

            rgb1 -= 1;
            rgb2 -= 3;
            rgb3 -= 1;
        
            box.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;

            if ((screenWidth - boxWidth) <= movement) {
                clearInterval(boxInterval);
                isMovingRight = false; 
            } 
            return movement;

        }, 50);

    } else {

        const reverseInterval = setInterval(function() {
            rgb1 += 1;
            rgb2 += 3;
            rgb3 += 1;
            box.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
            movement -= 5;
            box.style.left = `${movement}px`;

            if (movement <= 0) {
                clearInterval(reverseInterval);
                isMovingRight = true;
            } 


        }, 50);
    }

}); 







