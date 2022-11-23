<template lang="pug">
.spollers(data-spollers)
  .spollers__wrapper
    .spollers__title(data-spoller) {{spollerService.title}}
    .spollers__body
      p {{spollerService.text}}
</template>

<script>
import {spollers} from "@/assets/js/files/functions";

export default {
  name: "CardSpoller",
  props:{
    spollerService:{
      type: Object,
      required: true,
    }
  },
  mounted() {
    spollers()
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";

.spollers {
  display: grid;
  align-content: flex-start;
  position: relative;

  &:before{
    content:'';
    width: rem(26);
    height: rem(26);
    border-radius: 50%;
    background-color: $color_6;
    transition: transform 0.5s ease 0s;
    position: absolute;
    top: 19px;
    right: 12px;
  }
  &._spollers-active{
    &:before{
      background-color: #DDE0E4;
    }
  }
}

.spollers__wrapper{

  border-radius: 16px;

  ._spollers-active &{
    background: #F5F9FD;
  }
}
// Спойлер
.spollers__item {
  font-size: rem(20);

  &:not(:last-child) {
    margin-bottom: em(30, 20);
  }
}
// Заголовок спойлера
.spollers__title {
  width: 100%;
  cursor: default;
  text-align: left;
  //border: 1px solid #c4c4c4;
  padding: rem(20) rem(45) rem(20) rem(25);
  border-radius: rem(11);
  font-size: rem(18);
  position: relative;
  color: $mainColor;
  font-weight: 600;
  @include adaptiveValue(font-size, 18,14);

  ._spoller-init & {
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      right: 20px;
      top: 50%;
      background-color: #fff;
      height: 2px;
      width: 10px;
      transition: transform 0.5s ease 0s;
      border-radius: 5px;
    }

    &::after {
      transform: translate(0, 0) rotate(90deg);
    }
    &._spoller-active {


      &::before {
        background-color: #fff;
      }
      &::after {
        transform: rotate(0deg);
        background-color: #fff;
      }
    }
  }
}
// Контент спойлера
.spollers__body {
  @include adaptiveValue(padding-left, 32,16);
  @include adaptiveValue(padding-right, 32,16);
  @include adaptiveValue(padding-bottom, 24,24);
  @include adaptiveValue(padding-top, 5,5);
  border-radius: rem(11);


  p{
    font-weight: 400;
    @include adaptiveValue(font-size, 16,14);
    color: #6E7072;
  }
}



</style>