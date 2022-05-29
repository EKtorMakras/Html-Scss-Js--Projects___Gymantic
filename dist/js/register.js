//* ------------------------------ Variables------------------------------ *//


//$ ---------------- Register Progress ---------------- $//

const progressStep = document.querySelectorAll('.register__progress-step');
const progressNumber = document.querySelectorAll('.register__progress-step span');
const progressCheckmark = document.querySelectorAll('.fa-check');




//$ ---------------- Register Content ---------------- $//

const formPage = document.querySelector('.register__form-page');

// First Page
const nextBtn1 = document.querySelector('.next-1');

// Second Page: 
const prevBtn1 = document.querySelector('.prev-1');
const nextBtn2 = document.querySelector('.next-2');


// Third Page: 
const prevBtn2 = document.querySelector('.prev-2');
const nextBtn3 = document.querySelector('.next-3');


// Fourth Page: 
const prevBtn3 = document.querySelector('.prev-3');
const submitBtn = document.querySelector('.submit');




//$ ---------------- Other ---------------- $//

let current = 1;
let max = 4;





//* ------------------------------ Events ------------------------------ *//

function tick() {
    progressStep[current - 1].classList.add('active');
    progressNumber[current - 1].classList.add('active');
    progressCheckmark[current - 1].classList.add('active');
    current += 1;
};


function untick() {
    progressStep[current - 2].classList.remove('active');
    progressNumber[current - 2].classList.remove('active');
    progressCheckmark[current - 2].classList.remove('active');
    current -= 1;
};

//$ ---------------- Next Btns Events ---------------- $//

nextBtn1.addEventListener('click', () => {
    formPage.style.marginLeft = "-33%";
    tick();
})

nextBtn2.addEventListener('click', () => {
    formPage.style.marginLeft = "-100%";
    tick();
})

nextBtn3.addEventListener('click', () => {
    formPage.style.marginLeft = "-200%";
    tick();
})

//$ ---------------- Prev Btns Events ---------------- $//

prevBtn1.addEventListener('click', () => {
    formPage.style.marginLeft = "0";
    untick();
})

prevBtn2.addEventListener('click', () => {
    formPage.style.marginLeft = "-33%";
    untick();
})

prevBtn3.addEventListener('click', () => {
    formPage.style.marginLeft = "-100%";
    untick();
})


//$ ---------------- Submit Btns Events ---------------- $//
submitBtn.addEventListener('click', () => {

    setTimeout(() => {
        alert('Your Form Has Been Successfully Submitted');
        location.reload();
    }, 1000);

    tick();
});