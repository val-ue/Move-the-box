const get = function (selector) {
    return document.querySelector(selector);
};

const box = get('.box');
const button = get('button');

let isMovingRight = true;

button.addEventListener('click', function () {

    if (isMovingRight === true) {
        box.classList.remove('left');
        box.classList.add('right');

        isMovingRight = false;

    } else {
        box.classList.add('left');
        box.classList.remove('right');

        isMovingRight = true;
    }

}); 


