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
  //gap: 15px;
  align-content: flex-start;
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
  font-weight: 700;

  ._spoller-init & {
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      right: 10px;
      top: 50%;
      background-color: #000;
      height: 2px;
      width: 15px;
      transition: transform 0.5s ease 0s;
    }
    &::before {
      transform: translate(-75%, -50%) rotate(40deg);
    }
    &::after {
      transform: translate(0, -50%) rotate(-40deg);
    }
    &._spoller-active {


      &::before {
        transform: translateX(-75%) rotate(-40deg);
        background-color: $color_6;
      }
      &::after {
        transform: rotate(40deg);
        background-color: $color_6;
      }
    }
  }
}
// Контент спойлера
.spollers__body {
  padding: rem(20);
  border-radius: rem(11);
  //border: 1px solid #c4c4c4;
}



</style>