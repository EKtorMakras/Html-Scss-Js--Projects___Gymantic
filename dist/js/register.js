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


//$ ---------------- Next Btns Events ---------------- $//

nextBtn1.addEventListener('click', () => {
    formPage.style.marginLeft = "-33%";
})

nextBtn2.addEventListener('click', () => {
    formPage.style.marginLeft = "-100%";
})

nextBtn3.addEventListener('click', () => {
    formPage.style.marginLeft = "-200%";
})

//$ ---------------- Prev Btns Events ---------------- $//



//$ ---------------- Submit Btns Events ---------------- $//
submitBtn.addEventListener('click', () => {
    setTimeout(() => {
        alert('Your Form Has Been Successfully Submitted');
        location.reload();
    }, 1000);
});