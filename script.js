// swiper
const swiper = new Swiper('.swiper', {
    loop: true, // Enables looping of slides
    autoplay: {
        delay: 2000, // Slide every 3 seconds
        disableOnInteraction: false, // Keep autoplay even after user interaction
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        0: {
            slidesPerView: 1,
            
        },

    }
});

//   show options of pages 

let slideBar = document.querySelector('.slide-bar')
let options = document.querySelector('.options')
let option2 = document.querySelector('.options2')
let resbonsiveIcon = document.querySelector('.option-bar')
let icon = document.querySelector('.slide-bar i')
slideBar.addEventListener('click', () => {
    options.classList.toggle('show')
    icon.classList.remove('fa-angle-down')
    icon.classList.toggle('fa-angle-up')
    icon.classList.add('fa-angle-down')
})
resbonsiveIcon.addEventListener('click',()=>{
    option2.classList.toggle('show2')
})
// make counter played on landing part

let counter = document.querySelectorAll('.num')
counter.forEach((count) => {
    let loop = setInterval(() => {
        count.innerText++;
        if (count.innerText == count.dataset.num) {
            clearInterval(loop)
        }
    }, 10)

})