var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000
    },
    breakpoints: {
      320 : {
          slidesPerView: 2
      },
        426 : {
          slidesPerView: 3
        },
        500 : {
          slidesPerView: 4
        },
      768 : {
        slidesPerView: 5
      },
    },
    speed: 2500
});

var clientswiper = new Swiper(".clientSwiper", {
    navigation: {
        nextEl: ".say-next",
        prevEl: ".say-prev",
    },
    loop: true,
    autoplay: {
        delay: 2000
    },
    speed: 1000
});

let btn = document.querySelector('.fast__info-btn')
let exp = document.querySelector('.explore')
let close = document.querySelector('.explore__popup-close')

btn.addEventListener('click', () => {
    exp.style.display = 'flex'
})

close.addEventListener('click', () => {
    exp.style.display = 'none'
})



    $(function() {
        $('ul.category__list').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
    });

let btnRegister = document.querySelector('.header__btn')
let overlay = document.querySelector('.overlay')
let poupClose = document.querySelector('.popup__close')

btnRegister.addEventListener('click', () => {
    overlay.style.display = 'flex'
})

poupClose.addEventListener('click', () => {
    overlay.style.display = 'none'
})

let burger = document.querySelector('.burger')
let menu = document.querySelector('.header__menu')

burger.addEventListener("click" , () => {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
})
