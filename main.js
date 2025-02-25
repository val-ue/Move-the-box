

const get = function (selector) {
    return document.querySelector(selector);
};

const box = get('.box');
const button = get('button');

const boxWidth = 90;
box.style.width = `${boxWidth}px`;

const containerPadding = 5;

let isMovingRight = true;


button.addEventListener('click', function () {
    let rgb1 = 255;
    let rgb2 = 255;
    let rgb3 = 255;

    box.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    let movement = 0;
    const screenWidth = window.innerWidth - containerPadding;
    console.log(screenWidth);



    const boxInterval = setInterval(function() {


        if (isMovingRight === true) {




            
            isMovingRight === false;
        } else {

            isMovingRight === false;




        }






        movement += 5;
        box.style.left = `${movement}px`;
        console.log(movement);

        rgb1 -= 1;
        rgb2 -= 3;
        rgb3 -= 1;

        console.log(rgb1, rgb2, rgb3);

        box.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;


        if ((screenWidth - boxWidth) <= movement) {
            clearInterval(boxInterval);
        }

    }, 50);






});