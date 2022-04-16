let checkbox = document.querySelector('.main-nav__toggle');
let htmlElement = document.documentElement;



checkbox.addEventListener('change', () => {

    if (checkbox.checked) {
        smoothTransition();
        htmlElement.setAttribute('data-theme', 'dark')
    }
    // 
    else {
        smoothTransition();
        htmlElement.setAttribute('data-theme', 'light')
    }
});



let smoothTransition = () => {
    htmlElement.classList.add('transition');
    window.setTimeout(() => {
        htmlElement.classList.remove('transition');
    }, 1000)
}