import {Swiper, Lazy} from "swiper";

export function swiperCard(){
    if (document.querySelector('.card-swiper')) {
        new Swiper('.card-swiper', {
            modules: [Lazy],
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
            loop: true,
            centeredSlides:true,
            //если кликнуть по любоиу слайду , он станет активным
            //slideToClickedSlide: true,
            // если слайдов мало , скроется навигация, рагиниция
            watchOverflow: true,
            speed: 800,
            breakpoints: {
                320: {
                    slidesPerView: 1.3,
                    spaceBetween: 10
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 60
                },
            },
        });
    }
}
