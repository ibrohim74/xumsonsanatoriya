var hiddenButton = document.getElementById('hiddenBox');
var hiddenBox = document.querySelector('.s3-hidden-box');
var modal = document.getElementsByClassName('modal');
var modalBtn = document.getElementsByClassName('btnModal');
var closeBtn = document.getElementsByName('close-outline')
modalBtn.addEventListener('click', function () {
    moda
})
closeBtn.addEventListener('click', function () {
    modal.style.display = "none"
})



hiddenButton.addEventListener('click', function test() {
    hiddenBox.style.display = "flex";
    hiddenButton.style.display = "none";
})


const splide = new Splide(".splide", {
    // Optional parameters
    start: 1,
    perPage: 1.5,
    perMove: 1,
    gap: 20,
    type: "loop",
    drag: "free",
    snap: false,
    interval: 3000,
    arrows: true,
    pagination: true,
    rewind: true,
    rewindByDrag: true,
    lazyLoad: true,

    // Responsive breakpoint
    breakpoints: {
        768: {
            perPage: 1,
            snap: true
        }
    }
});

splide.mount();
