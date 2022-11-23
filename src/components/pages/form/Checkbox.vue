<template lang="pug">
.checkbox
  input#formAgreement.checkbox__input(checked='', type='checkbox')
  label.checkbox__label(for='formAgreement')
    slot(name="title")
</template>

<script>
export default {
  name: "Checkbox",

}
</script>

<style  lang="scss">
@import "@/assets/scss/style.scss";
.checkbox {

  &_error &__label::before {
    box-shadow: 0 0 15px red;
  }

  &__input {
    display: none;
  }

  &__input:checked + &__label::after {
    transform: scale(1);
  }

  &__label {
    font-size: rem(16);
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    padding-left: rem(25);
    color: #6E7072;

    a{
      color: $color_6;
    }
  }

  &__label::before {
    content: "";
    width: 16px;
    height: 16px;
    top: 4px;
    left: 4px;
    position: absolute;
    background-color: #fff;
    border-radius: 4px;
    margin: 0px 10px 0px 0px;
    border: 2px solid #DDE0E4;
  }

  &__label::after {
    transition: transform 0.5s ease 0s;
    content: "";
    width: 16px;
    height: 16px;
    position: absolute;
    top: 4px;
    left: 4px;
    background-color: $color_6;
    border-radius: 4px;
    transform: scale(0);
    background-image: url("../public/assets/img/svg/check.svg");
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>