<template lang="pug">
section.authorization
  .authorization__container
    .authorization__welcome
      h1.authorization__title Авторизация
      p С возвращением. Мы рады видеть вас снова!
    FormAuthorization
    AuthorizationInSoc
</template>

<script>
import FormAuthorization from "@/components/pages/authorization/FormAuthorization.vue";
import AuthorizationInSoc from "@/components/pages/authorization/AuthorizationInSoc.vue";
export default {
  name: "Authorization",
  components: {AuthorizationInSoc, FormAuthorization}
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
.authorization{
  @include adaptiveValue(padding-top, 40, 28);
  @include adaptiveValue(padding-bottom, 40, 28);

  &__container{
    max-width: 565px;
  }

  &__welcome{
    display: grid;
    grid-gap: rem(16);

    @include adaptiveValue(margin-bottom, 40, 32);
    @include mq('tablet-small') {
      justify-content: center;
      justify-items: center;
    }
  }


}
</style>