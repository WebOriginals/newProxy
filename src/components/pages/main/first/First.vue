<template lang="pug">
.first
  .first__bg-ibg
    picture
      source(srcset="@_/assets/img/svg/first-hd.svg" media="(min-width: 1200px)")
      source(srcset="@_/assets/img/svg/first.svg" media="(min-width: 900px)")
      source(srcset="@_/assets/img/svg/first-tablet.svg" media="(min-width: 500px")
      img(src="@_/assets/img/svg/first-mobil.svg")

  .first__container
    h1 Купить проĸси — Приватные HTTP&SOCKS5
    p Со циальные сети, парсинг поисковых систем, онлайн-игры, веб-сёрфинг и многое другое
    FirstForm
    .first__quantity
      span
        b 0 USD <br>
      span 0 USD/шт.
</template>

<script>
import FirstForm from "@/components/pages/main/first/FirstForm.vue";
export default {
  name: "First",
  components: {FirstForm}
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
.first{
  background: darkblue;
  color: $color_1;
  padding-top: rem(47);
  padding-bottom: rem(100);
  position: relative;
  @include mq('tablet') {
    padding-top: rem(47);
    padding-bottom: rem(320);
  }
  @include mq('tablet-wide') {
    padding-top: rem(80);
    padding-bottom: rem(130);
  }
  @include mq('desktop') {
    padding-bottom: rem(185);
  }
  @include mq('desktop') {
    padding-top: rem(130);
    padding-bottom: rem(340);
  }

  &__container{
  position: relative;
    z-index: 1;
  }

  &__bg-ibg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    img{
      object-position:  0 90%;
    }
  }

  &__quantity{
    padding: rem(8) rem(30);
    border: 1px dashed $color_1;
    border-radius: 4px;
    width: fit-content;
    margin: rem(40) auto 0;
  }

  h1{
    margin-bottom: rem(16);
    text-align: center;
  }
  p{
    margin-bottom: rem(40);
    text-align: center;
  }
}
</style>