<template lang="pug">
.reviews
  .reviews__bg-ibg
    picture
      source(srcset="@_/assets/img/svg/reviews1.svg" media="(min-width: 1024px)")
      source(srcset="@_/assets/img/svg/reviews2.svg" media="(min-width: 600px)")
      img(src="@_/assets/img/svg/reviews3.svg")
  .reviews__container
    .reviews__body
      .reviews__description
        h2.reviews__title Отзывы наших клиентов
        p Мы стараемся прислушиваться к вашим советам и замечаниям. Благодаря вам сервис Proxystore становится лучше с каждым днём!
        button.button-y Купить прокси
      .reviews__slider
        swiper(
          :slides-per-view="1",
          :space-between="24",
          :pagination="{ clickable: true}",
          :modules="modules",
          :breakpoints="swiperOptions.breakpoints"
          class="reviews__slider-swiper dark")
          swiper-slide
            .reviews-slid
              .reviews-slid__top
                .reviews-slid__rating
                .reviews-slid__date 16.08.2022
              p.reviews-slid__description Я на agava.ru, которая переросла в REG.RU c 2007 года (брал аренду серверы, ставил свой сервер, теперь просто арендую место). До этого перепробовал не менее 8 разных хостингов, но остановился именно на нём. Нравится и техподдержка, и скорость, и сервисы. Видно, что проходят частые модернизации, т. е. в отличие от конкурентов на месте...
              .reviews-slid__link
                b Читать полностью <br>
                span http:ru.hostings.info
              .reviews-slid__person
                .reviews-slid__img-ibg
                  img(src="@_/assets/img/svg/person-def.svg")
                .reviews-slid__name Александр Попов
          swiper-slide
            .reviews-slid
              .reviews-slid__top
                .reviews-slid__rating
                .reviews-slid__date 16.08.2022
              p.reviews-slid__description Я на agava.ru, которая переросла в REG.RU c 2007 года (брал аренду серверы, ставил свой сервер, теперь просто арендую место). До этого перепробовал не менее 8 разных хостингов, но остановился именно на нём. Нравится и техподдержка, и скорость, и сервисы. Видно, что проходят частые модернизации, т. е. в отличие от конкурентов на месте...
              .reviews-slid__link
                b Читать полностью <br>
                span http:ru.hostings.info
              .reviews-slid__person
                .reviews-slid__img-ibg
                  img(src="@_/assets/img/svg/person-def.svg")
                .reviews-slid__name Александр Попов
          swiper-slide
            .reviews-slid
              .reviews-slid__top
                .reviews-slid__rating
                .reviews-slid__date 16.08.2022
              p.reviews-slid__description Я на agava.ru, которая переросла в REG.RU c 2007 года (брал аренду серверы, ставил свой сервер, теперь просто арендую место). До этого перепробовал не менее 8 разных хостингов, но остановился именно на нём. Нравится и техподдержка, и скорость, и сервисы. Видно, что проходят частые модернизации, т. е. в отличие от конкурентов на месте...
              .reviews-slid__link
                b Читать полностью <br>
                span http:ru.hostings.info
              .reviews-slid__person
                .reviews-slid__img-ibg
                  img(src="@_/assets/img/svg/person-def.svg")
                .reviews-slid__name Александр Попов
          swiper-slide
            .reviews-slid
              .reviews-slid__top
                .reviews-slid__rating
                .reviews-slid__date 16.08.2022
              p.reviews-slid__description Я на agava.ru, которая переросла в REG.RU c 2007 года (брал аренду серверы, ставил свой сервер, теперь просто арендую место). До этого перепробовал не менее 8 разных хостингов, но остановился именно на нём. Нравится и техподдержка, и скорость, и сервисы. Видно, что проходят частые модернизации, т. е. в отличие от конкурентов на месте...
              .reviews-slid__link
                b Читать полностью <br>
                span http:ru.hostings.info
              .reviews-slid__person
                .reviews-slid__img-ibg
                  img(src="@_/assets/img/svg/person-def.svg")
                .reviews-slid__name Александр Попов
    .reviews__cos
      img(src="@_/assets/img/svg/reviws.svg")

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/effect-cube";
export default {
  name: "Reviews",
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
            slidesPerView: 1,
            spaceBetween: 30
          },
          560: {
            slidesPerView: 2,
            spaceBetween: 24
          }
        }
      }
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

.reviews{
  @include adaptiveValue(margin-top, 40, 28);
  @include adaptiveValue(margin-bottom, 40, 28);
  @include adaptiveValue(padding-top, 96, 56);
  @include adaptiveValue(padding-bottom, 200, 70);
  background: linear-gradient(122.83deg, #262C92 5.46%, #091F50 69.61%);
  color: $color_1;
  position: relative;

  &__bg-ibg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    img{
      object-position: 0 0;
      @include mq('phablet') {
        object-position: 43% 53px;
      }
      @include mq('desktop') {
        object-position: 0% 92%;
      }
    }
  }

  &__body{
    display: grid;
    grid-gap: rem(32);
    z-index: 2;
    @include mq('desktop') {
      grid-template-columns: 0.5fr 1fr;
    }
  }

  &__description{

    @include mq('phablet') {
      max-width: 58%;
    }
    @include mq('desktop') {
      max-width: 100%;
    }

    h2{
      text-align: left;
      margin-bottom: rem(24);
    }

    p{
      font-size: rem(16);
      font-weight: 400;
    }

    .button-y{
      @include adaptiveValue(margin-top, 40, 32);
    }
  }

  &__slider{
    min-width: 0;

    .reviews__slider-swiper{
      padding-top: 40px;
    }

    .swiper-slide-next{
      transform: translateY(-40px);
    }

    .swiper-pagination{
      @include mq('phablet') {
        left: 50%;
        width: 50%;
        transform: translateY(-40px);
      }
    }
  }

  &-slid{
    background: #FFFFFF;
    box-shadow: 0px 8px 32px rgba(0, 58, 206, 0.08), 0px 16px 16px rgba(0, 58, 206, 0.04);
    border-radius: 16px;
    color: $color_4;
    @include adaptiveValue(padding-top, 40, 24);
    @include adaptiveValue(padding-bottom, 40, 24);
    @include adaptiveValue(padding-left, 32, 24);
    @include adaptiveValue(padding-right, 32, 24);

    &__top{
      margin-bottom: rem(16);
      display: flex;
      gap: rem(30);
      justify-content: space-between;
    }
    &__rating{

    }
    &__date{
      font-size: rem(12);
    }
    &__description{
      margin-bottom: rem(16);
      @include adaptiveValue(font-size, 16, 14);
    }
    &__link{
      margin-bottom: rem(24);
      font-size: rem(14);
      font-weight: 500;
      b{
        color: $mainColor;

      }
      span{
        color: $color_6;
      }
    }
    &__person{
      display: flex;
      gap: rem(16);
      align-items: center;
    }
    &__img-ibg{
      width: rem(48);
      height: rem(48);
      overflow: hidden;
      border-radius: 50%;
      background-color: #EBF0FF;


      img{

      }
    }
    &__name{
      font-size: rem(16);
      font-weight: 400;
      color: $mainColor;
    }
  }

  &__cos{
    display: none;
    @include mq('tablet-small') {
      display: block;
      position: absolute;
      top: 15%;
      right: 7%;
      transform: scaleX(-1);
      z-index: 0;
      width:27%;
    }
    @include mq('tablet') {
      width:35%;
      top: 5%;
    }
    @include mq('tablet-990') {
      width:30%;
      top: 5%;
    }
    @include mq('desktop') {
      width:350px;
      top: 50%;
      right: 65%;
      transform: scaleX(1);
    }
    img{
      max-width: 100%;
    }
  }
}
</style>