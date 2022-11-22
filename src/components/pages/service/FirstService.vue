<template lang="pug">
section.firstService
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
  background: linear-gradient(122.83deg, #262C92 5.46%, #091F50 69.61%);
  color: #fff;

  &__grid{
    background-color: #F5F9FD;
    border-radius: 16px;
    @include adaptiveValue(padding, 33, 25);
    display: flex;

    @include maq('tablet-wide') {
      flex-direction: column;
      align-items: flex-start;
    }
  }


}
</style>
