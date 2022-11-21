<template lang="pug">
.tabs(data-tabs data-tabs-animate)
  .tabs-navigation__body
    .tabs__navigation(data-tabs-titles)
        button(data-tabs-title='1').tabs__title._tab-active  Мобильные проĸси IPv4
        button(data-tabs-title='2').tabs__title  Серверные проĸси IPv4

  .tabs__content(data-tabs-body)
    .tab__body(data-tabs-item="1")
      CountryForTabs(v-for="country in countries" :country="country" )
    .tab__body(data-tabs-item="2")
      CountryForTabs(v-for="country in countries" :country="country" )
</template>

<script>
import CountryForTabs from "@/components/pages/main/tab/СountryForTabs.vue";
import {tabs} from "@/assets/js/files/functions";
export default {
  name: "TabBody",
  components:{
    CountryForTabs
  },
  data(){
    return{
      countries: [
        {id:0, icon:'./public/assets/img/svg/countrys/RO.svg', name: 'Россия', price: 20},
        {id:1, icon:'./public/assets/img/svg/countrys/RU.svg', name: 'Румыния', price: 20},
        {id:2, icon:'./public/assets/img/svg/countrys/RO.svg', name: 'Англия', price: 20},
        {id:3, icon:'./public/assets/img/svg/countrys/RU.svg', name: 'Украина', price: 20},
        {id:4, icon:'./public/assets/img/svg/countrys/RO.svg', name: 'Бразилия', price: 20},
        {id:5, icon:'./public/assets/img/svg/countrys/RU.svg', name: 'Кения', price: 20},
        {id:6, icon:'./public/assets/img/svg/countrys/RO.svg', name: 'Грузия', price: 20},
        {id:7, icon:'./public/assets/img/svg/countrys/RU.svg', name: 'Индонезия', price: 20},
        {id:8, icon:'./public/assets/img/svg/countrys/RO.svg', name: 'Вьетнам', price: 20},
      ]
    }
  },
  mounted() {
    tabs()
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
.tabs {
  &-navigation__body{
    @include maq('tablet') {
      width: 100%;
      overflow-x: auto;
      height: 52px;
      overflow-y: hidden;
    }
  }
  // .tabs__navigation
  &__navigation {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid $color_3;
    @include adaptiveValue(margin-bottom, 40,32);
    @include maq('tablet') {
      width: 630px;
    }
  }
  // .tabs__title
  &__title {
    //border: 1px solid #eee;
    padding: rem(10) rem(15);
    color: $color_5;
    @include adaptiveValue(font-size,28,22);
    font-weight: 600;

    &._tab-active {
      color: $mainColor;
      position: relative;
      &:before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        background:$color_6 ;
        width: 100%;
        height: rem(4);
        border-radius:3px 3px 0 0;
      }
    }
  }
  // .tabs__content
  &__content {
    //border: 1px solid #eee;
    padding: rem(10) rem(15);
  }
  // .tabs__body
  .tab__body {
    display: grid;
    grid-gap: rem(16) rem(24);


    @include mq('tablet') {
      grid-template-columns: 1fr 1fr;
    }

    @include mq('tablet-wide') {
      grid-template-columns: 1fr 1fr 1fr;
    }

    &[hidden]{
      display: none;
    }
  }
}

</style>
