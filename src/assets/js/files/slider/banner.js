import {Swiper, Navigation, Lazy} from "swiper";

export function swiperbanner(){
    if (document.querySelector('.author-body__swiper')) {
        new Swiper('.author-body__swiper', {
            modules: [Navigation,Lazy],
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
            speed: 800,
            navigation: {
            	nextEl: ".author-slidr__btn-n",
            	prevEl: ".author-slidr__btn-p",
            },
        });
    }
}
