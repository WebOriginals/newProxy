<template lang="pug">
section.quickRegistration
  .quickRegistration__container
    .quickRegistration__welcome
      h1.quickRegistration__title Быстрая регистрация
    FormQuickRegistration
    AuthorizationInSoc
</template>

<script>
import FormQuickRegistration from "@/components/pages/quickRegistration/FormQuickRegistration.vue";
import AuthorizationInSoc from "@/components/pages/authorization/AuthorizationInSoc.vue";
export default {
  name: "QuickRegistration",
  components: {AuthorizationInSoc, FormQuickRegistration}
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
.quickRegistration{
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