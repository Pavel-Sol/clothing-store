// burger
document.querySelector('.header__burger').onclick = addActive

function addActive() {
    document.querySelector('.header__menu').classList.toggle('active')
    this.classList.toggle('active')
    document.querySelector('body').classList.toggle('lock')
}

// slider__big
$(document).ready(function () {
    $('.slider__big').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
    });
});

// slider__mini__body

$(document).ready(function () {
    $('.slider__mini__body').slick({
        arrows: true,
        slidesToShow: 3,
        autoplay: true,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

// footer
let footerMenuTitle = document.querySelectorAll('.footer__menu__title')


for (let i = 0; i < footerMenuTitle.length; i++) {
    footerMenuTitle[i].onclick = () => {
        if (footerMenuTitle[i].classList.contains('active')) {
            footerMenuTitle[i].classList.remove('active')
            footerMenuTitle[i].nextElementSibling.classList.remove('active')
        } else {
            footerMenuTitle[i].classList.add('active')
            footerMenuTitle[i].nextElementSibling.classList.add('active')
        }
    }
}


function expand() {


}


    // this.classList.toggle('active')
    // document.querySelector('.footer__menu__list').classList.toggle('active')
