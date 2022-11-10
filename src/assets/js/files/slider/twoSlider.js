import {Swiper, Navigation, Pagination, Lazy, Controller} from "swiper";

export function twoSlider(){
    if (document.querySelector('.tex-slide')) {
        let text = new Swiper('.tex-slide', {
            modules: [Navigation,Pagination,Controller],
            //следит за изменениями , и если что-то произойдет обновится
            observer: true,
            //следит за родительскими элементами, табы например
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 30,
            autoHeight: false,
            //если кликнуть по любоиу слайду , он станет активным
            slideToClickedSlide: true,
            // если слайдов мало , скроется навигация, рагиниция
            watchOverflow: true,
            speed: 800,
            navigation: {
                nextEl: ".twoSlider__btn-n",
                prevEl: ".twoSlider__btn-p",
            },
            pagination: {
                el: ".twoSlider__pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
            },
        });
        let pic = new Swiper('.pic-slide', {
            modules: [Lazy,Controller],
            lazy: {
                loadPrevNext: true,
                elementClass: 'lazyAll'
            },
            //следит за изменениями , и если что-то произойдет обновится
            observer: true,
            //следит за родительскими элементами, табы например
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 30,
            autoHeight: false,
            //если кликнуть по любоиу слайду , он станет активным
            slideToClickedSlide: true,
            // если слайдов мало , скроется навигация, рагиниция
            watchOverflow: true,
            watchSlidesProgress: true,
            speed: 800,

        });
        pic.controller.control = text;
        text.controller.control = pic;
    }
}
