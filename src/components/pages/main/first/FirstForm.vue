<template lang="pug">
form.firstForm
  .firstForm__grid
    v-select.firstForm__select(
      v-model="selected"
      :options="arrayForSelect"
      label="text"
      :searchable="false"
      placeholder="Выберите страну"
    )
      template(#selected-option="{ img, text }")
        .leng-title
          .leng-title__img
            img(:src="img" style="max-width:38px")
          span {{ text }}
      template(#option="{ img, text }" )
        .oprion-row(style="display: flex; align-items: center; gap: 15px")
          img(:src="img" style="max-width:38px")
          span {{ text }}
    v-select.firstForm__select(
      v-model="selected"
      :options="arrayForSelect"
      label="text"
      :searchable="false"
      placeholder="Выберите услугу"
    )
      template(#selected-option="{ img, text }")
        .leng-title
          span {{ text }}
      template(#option="{ img, text }" )
        .oprion-row(style="display: flex; align-items: center; gap: 15px")
          span {{ text }}


    v-select.firstForm__select(
      v-model="selected"
      :options="arrayForSelect"
      label="text"
      :searchable="false"
      placeholder="Срок аренды"
    )
      template(#selected-option="{ img, text }")
        .leng-title
          span {{ text }}
      template(#option="{ img, text }" )
        .oprion-row(style="display: flex; align-items: center; gap: 15px")
          span {{ text }}
    input.firstForm__input(placeholder="Количество")
  button.button-y Купить прокси

</template>

<script>
import vSelect from "vue-select";

const Select = [
  {text: 'Россия', img: `./assets/img/png/RU.png`, value: 'RU'},
  {text: 'Румыния', img: "./assets/img/png/RO.png", value: 'RO'},
  {text: 'Украина', img: "./assets/img/png/UA.png", value: 'UA'},
  {text: 'Грузия', img: "./assets/img/png/GE.png", value: 'GE'},
];
export default {
  name: "FirstForm",
  components: {
    vSelect
  },
  data() {
    return {
      //Пропс языков для селекта
      arrayForSelect: Select,
      //Selected для селекта
      // selected: Select[0],
    }
  },

}
</script>

<style  lang="scss">
@import "@/assets/scss/style.scss";
.firstForm{
  .button-y{
    max-width: rem(212);
    width: 100%;
    margin: auto;
    @include mq('tablet-wide') {

    }
  }
}


.firstForm__select {

  .vs__clear{
    display: none;
  }

  .vs__selected{
    margin: 0;
    padding: 0;
  }

  &-title {
    display: flex;
    gap: rem(8);
    align-items: center;
  }

  .vs__dropdown-toggle {
    padding: 17px 20px;
    border-radius: 8px !important;
    background: $color_1;
    color: $mainColor;
    font-weight: 400;
    font-size: rem(14);
  }

  .vs__open-indicator {

  }

  .vs__dropdown-menu {
    color: $mainColor;
  }

  .select-arrow{
    width: rem(18);
    height: rem(10);
    position: relative;
    &:before, &:after {
      content: '';
      position: absolute;
      width: 10px;
      height: 2px;
      background: #909DAD;
    }

    &:before{
      transform: rotate(45deg) translateX(4px) translateY(3px);
    }
    &:after{
      transform: rotate(-45deg) translateX(1px) translateY(8px);
    }
  }

  .vs__search{
    margin: 0 !important;
    padding: 0 !important;
    font-size: 14px !important;
  }

  .vs__actions{
    padding: 0;
  }
}

.vs--open .select-arrow{
  transform: scaleY(-1) !important;
}

.firstForm__input{
  padding: rem(17) rem(20);
  border-radius: rem(8);
  font-size: rem(14);
}

.firstForm{
  display: grid;
  grid-gap: rem(24) rem(24);
  align-items: center;

  @include mq('desktop') {
    grid-template-columns: 1fr auto;
  }

  &__grid{
    display: grid;
    grid-gap: rem(16);
    @include mq('tablet-small') {
      grid-template-columns: 1fr 1fr;
    }
    @include mq('tablet-990') {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}

</style>