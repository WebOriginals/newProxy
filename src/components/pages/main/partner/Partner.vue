<template lang="pug">
.partner
  .partner__container
    h2.partner__title Наши партнёры
    swiper(
      :slides-per-view='6',
      :space-between='50',
      :pagination="{ clickable: true}",
      :modules="modules",
      :breakpoints="swiperOptions.breakpoints")
      swiper-slide
        .partner__img
          img(src="@_/assets/img/png/partner1.png")
      swiper-slide
        .partner__img
          img(src="@_/assets/img/png/partner2.png")
      swiper-slide
        .partner__img
          img(src="@_/assets/img/png/partner3.png")
      swiper-slide
        .partner__img
          img(src="@_/assets/img/png/partner1.png")
      swiper-slide
        .partner__img
          img(src="@_/assets/img/png/partner2.png")
      swiper-slide
        .partner__img
          img(src="@_/assets/img/png/partner3.png")

</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Pagination} from "swiper";

export default {
  name: "Partner",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 50
          }
        }
      }
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

.partner {
  @include adaptiveValue(padding-top, 40, 28);
  @include adaptiveValue(padding-bottom, 40, 28);
}

.swiper-wrapper {
  align-items: center;
}

.partner__img {
  img {
    max-width: 100%;
  }
}
</style>