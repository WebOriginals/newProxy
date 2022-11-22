<template lang="pug">
section.firstService
  .firstService__bg-ibg
    img(src="@_/assets/img/svg/cloud.svg")
  .firstService__container
    .firstService__descripton
      h1.firstService__title Прокси для телеграмма
      p Прокси для Telegram необходимы для обхода блокировок сервиса, что характерно для некоторых стран. Этот мессенджер популярен как в качестве достоверного источника новостей, так и в качестве торговой площадки. Раскруткой бизнеса через социальные сети заниматься гораздо проще, если вы будете иметь «спам-ботов» и неограниченных поток «пользователей». Таким образом, вы увеличите рейтинг реализуемого вами товара. Прокси позволит вам безлимитно пользоваться всеми техническими возможностями Телеграм.
    .firstService__img
      img(src="@_/assets/img/svg/cos.svg")
    .firstService__grid
      CardService(v-for="cardService in cardsService" :key="cardService.id" :card-service="cardService")
</template>

<script>
import CardService from "@/components/pages/service/CardService.vue";
export default {
  name: "FirstService",
  components: {CardService},
  data() {
    return {
      cardsService: [
        {id: 0, img:'./public/assets/img/svg/Subtract.svg', text: 'Индивидуальные прокси 100мб/сек'},
        {id: 1, img:'./public/assets/img/svg/Subtract1.svg', text: 'Гарантия на возврат средств / замену адреса 48ч после покупки'},
        {id: 2, img:'./public/assets/img/svg/Subtract2.svg', text: 'Низкие цены, оптом дешевле'},
        {id: 3, img:'./public/assets/img/svg/Subtract3.svg', text: 'Выборка IP вручную и выборка подсетей, города'},
        {id: 4, img:'./public/assets/img/svg/Subtract4.svg', text: 'Неограниченный трафик и 2000 потоков'},
      ]
    }
  }
}
</script>

<style scoped  lang="scss">
@import "@/assets/scss/style.scss";
.firstService{
  @include adaptiveValue(padding-top, 80, 62);
  @include adaptiveValue(padding-bottom, 80, 62);
  background: linear-gradient(122.83deg, #262C92 5.46%, #091F50 69.61%);
  color: #fff;

  &__bg-ibg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    img{
      object-position:  0 100%;
      height: 25%;
      top: auto;
      bottom: -100px;
    }
  }

  &__container{
    display: grid;
    align-items: center;
    grid-gap: rem(35) rem(35);
    z-index: 2;
    position: relative;
    grid-template-areas:  "descripton"
                          "img"
                          "grid";
    @include mq('tablet-small') {
      grid-template-areas:  "descripton descripton"
                            "grid       img" ;
      justify-content: space-between;
    }
    @include mq('tablet-wide') {
      grid-template-areas:  "descripton img"
                            "grid       grid" ;
    }
  }
  &__descripton{
    grid-area: descripton;
    max-width: rem(635);
    h1{
      @include adaptiveValue(margin-bottom,48,32)
    }
    p{
      @include adaptiveValue(font-size, 16,14);
    }
  }

  &__img{
    grid-area: img;
    img{
      max-width: 100%;
    }

  }

  &__grid{
    grid-area: grid;
    background-color: #F5F9FD;
    border-radius: 16px;
    @include adaptiveValue(padding, 33, 25);
    display: flex;
    box-shadow: 0px 8px 32px rgba(0, 58, 206, 0.08), 0px 16px 16px rgba(0, 58, 206, 0.04);

    @include maq('tablet-wide') {
      flex-direction: column;
      align-items: flex-start;
    }
    @media only screen and (min-width: 640px) and (max-width: 1023px) {
      width: 350px;
    }
  }


}
</style>
