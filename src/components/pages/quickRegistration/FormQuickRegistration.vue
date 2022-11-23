<template lang="pug">
form.authorization__form.authorization-form
  .authorization-form__inputs
    input.input-bg-bor(placeholder="Email")
  .authorization-form__approval
    Checkbox
      template(v-slot:title)
        span Я соглашаюсь с <a href="/">офертой</a>


  .authorization-form__buttons
    button.button-y Зарегистрироваться
    button.button-bor-y Уже есть аккаунт
</template>

<script>
import Checkbox from "@/components/pages/form/Checkbox.vue";
export default {
  name: "FormQuickRegistration",
  components: {Checkbox}
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