window.onload = () => {
    headerActive();
    initSwiper();
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
        speed: 1750,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        loop: true,
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