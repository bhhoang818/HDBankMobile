window.onload = () => {
    headerActive();
    initSwiper();
    backToTop();
    Marquee();
}
const headerActive = () => {
    let butonToggle = document.getElementById('butonToggle');
    let header = document.getElementById('sidebar-menu');
    let overlay = document.getElementById('overlay');
    let dropdown = document.querySelector('.dropdown-toggle');
    butonToggle.onclick = () => {
        butonToggle.classList.toggle('is-active');
        header.classList.toggle('is-active');
        overlay.classList.toggle('active');
    }
    overlay.onclick = () => {
        butonToggle.classList.remove('is-active');
        header.classList.remove('is-active');
        overlay.classList.remove('active');
    }
    dropdown.onclick = () => {
        document.querySelector('.dropdown-menu').classList.toggle('hide');
    }
}
const initSwiper = () => {
    var swiper = new Swiper(".myBanner", {
        grabCursor: true,
        effect: "fade",
        autoplay: {
            delay: 6500,
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    var swiper = new Swiper(".production .swiper", {
        speed: 750,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 6500,
        },
        loop: true,
        navigation: {
            nextEl: ".production .swiper-button-next",
            prevEl: ".production .swiper-button-prev",
        },
        breakpoints: {
            375: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
        },
    });
    let myCustomSlider = document.querySelectorAll('.swiper-container')
    let prevArrow = document.querySelectorAll('.swiper-button-prev__big')
    let nextArrow = document.querySelectorAll('.swiper-button-next__big')
    myCustomSlider.forEach((slider, index) => {
        let sliderLength = slider.children[0].children.length
        let result = (sliderLength > 1) ? true : false
        const swiper = new Swiper(slider, {
            speed: 750,
            observer: true,
            observeParents: true,
            loop: result,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: nextArrow[index],
                prevEl: prevArrow[index],
            },
            breakpoints: {
                375: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                },
            },
        });
    })
    var swiper = new Swiper(".bigImage", {
        grabCursor: true,
        effect: "fade",
        autoplay: {
            delay: 6500,
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    var swiper = new Swiper(".myPromotion", {
        speed: 6000,
        autoplay: {
            delay: 1,
        },
        loop: true,
        allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
            375: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
        },
    });
    var swiper = new Swiper(".newsSwiper", {
        speed: 1750,
        observer: true,
        observeParents: true,
        pagination: {
            el: ".newsSwiper .swiper-pagination",
            clickable: true,
        },
        loop: true,
        breakpoints: {
            375: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
        },
    });
}
const backToTop = () => {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
    }
    var goTopBtn = document.querySelector('.footer__logo__arrow');
    goTopBtn.addEventListener('click', backToTop);
};

function Marquee() {
    let marquee = document.querySelectorAll('.clipped-text');
    marquee.forEach(el => {
        let rate = 200;
        let distance = el.clientWidth;
        let style = window.getComputedStyle(el);
        let marginRight = parseInt(style.marginRight) || 0;
        let totalDistance = distance + marginRight;
        let time = totalDistance / rate;
        let container = el.parentElement;

        gsap.to(container, time, {
            repeat: -1,
            x: '-' + totalDistance,
            ease: Linear.easeNone,
        });
    });

}
let question = document.querySelectorAll(".question");
question.forEach((qsitem) => {
    qsitem.addEventListener("click", function (e) {
        //   store the .answer div containing the answer
        let sibling = qsitem.nextElementSibling;

        // Nested loop for removing active class from all and set answer height to 0
        question.forEach((item) => {
            item.nextElementSibling.style.height = "0px";
            //   remove class "active" except for the currently clicked item
            item != qsitem && item.parentNode.classList.remove("active");
        });
        //then toggle the "active" class of clicked item's parent ".qna"
        this.parentNode.classList.toggle("active");

        // set actual height for .answer div if .qna has the class "active"
        if (qsitem.parentNode.classList.contains("active")) {
            sibling.style.height = sibling.scrollHeight + "px";
        } else {
            sibling.style.height = "0px";
        }
    });
});