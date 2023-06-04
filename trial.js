var slide = document.querySelectorAll('.slide');
var btn = document.querySelectorAll('.btn');
let currentslide = 1;
// Js for image slider manual navigation
var manualNav = function (manual) {
    slide.forEach((slide) => {
        slide.classList.remove('active');

        btn.forEach((btn) => {
            btn.classList.remove('active');
        });
    });
    slide[manual].classList.add('active');
    btn[manual].classList.add('active');
}
btn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentslide = i;
    });
});