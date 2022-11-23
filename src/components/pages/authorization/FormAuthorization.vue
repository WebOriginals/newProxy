<template lang="pug">
form.authorization__form.authorization-form
  .authorization-form__warning.hint
    svg(width='21', height='20', viewbox='0 0 21 20', fill='none', xmlns='http://www.w3.org/2000/svg')
     path(d='M9.5 13H11.5V15H9.5V13ZM9.5 5H11.5V11H9.5V5ZM10.49 0C4.97 0 0.5 4.48 0.5 10C0.5 15.52 4.97 20 10.49 20C16.02 20 20.5 15.52 20.5 10C20.5 4.48 16.02 0 10.49 0ZM10.5 18C6.08 18 2.5 14.42 2.5 10C2.5 5.58 6.08 2 10.5 2C14.92 2 18.5 5.58 18.5 10C18.5 14.42 14.92 18 10.5 18Z', fill='#DD0000')
    span Пользователь не найден
  //.authorization-form__successfully.hint
    svg(width='21', height='20', viewbox='0 0 21 20', fill='none', xmlns='http://www.w3.org/2000/svg')
      path(d='M9.5 13H11.5V15H9.5V13ZM9.5 5H11.5V11H9.5V5ZM10.49 0C4.97 0 0.5 4.48 0.5 10C0.5 15.52 4.97 20 10.49 20C16.02 20 20.5 15.52 20.5 10C20.5 4.48 16.02 0 10.49 0ZM10.5 18C6.08 18 2.5 14.42 2.5 10C2.5 5.58 6.08 2 10.5 2C14.92 2 18.5 5.58 18.5 10C18.5 14.42 14.92 18 10.5 18Z', fill='#DD0000')
    span Вы успешно авторизовались

  .authorization-form__inputs
    input.input-bg-bor(placeholder="Email")
    InputPass

  .authorization-form__approval
    Checkbox
      template(v-slot:title)
        span Запомнить меня

    a.forgotPassword(href="") Забыли пароль?

  .authorization-form__buttons
    button.button-y Авторизоваться
    button.button-bor-y Быстрая регистрация

</template>

<script>
import InputPass from "@/components/pages/form/InputPass.vue";
import Checkbox from "@/components/pages/form/Checkbox.vue";
export default {
  name: "FormAuthorization",
  components: {Checkbox, InputPass}
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
.authorization-form{

  .hint{
    @include adaptiveValue(margin-bottom,40,24);
  }

  &__warning,&__successfully{
    padding: rem(16) rem(24);
    border-radius: rem(8);
    display: flex;
    align-items: center;
    gap: rem(8);
  }

  &__warning{
    background: rgba(221, 0, 0, 0.1);
  }

  &__successfully{
    background: rgba(221, 0, 0, 0.1);
  }

  &__inputs{
    display: grid;
    grid-gap: rem(16);
  }

  &__approval {
    display: flex;
    gap: rem(10);
    justify-content: space-between;
    @include adaptiveValue(padding-top, 16, 12);
    @include adaptiveValue(padding-bottom, 40, 40);
  }

  .forgotPassword{
    font-size: rem(16);
    font-weight: 400;
    color: #6E7072;
    text-decoration: underline;
  }

  &__buttons{
    display: flex;
    flex-wrap: wrap;
    gap: rem(24);
    justify-content: space-between;

    button{
      flex: 1 1 auto;
    }
  }
}
</style>