<template lang="pug">
.whyProxyCard
  .whyProxyCard__img
    slot(name="icon")
  .whyProxyCard__name
    slot(name="name")
  .whyProxyCard__description
    slot(name="description")
</template>

<script>
export default {
  name: "WhyProxyCard"
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
.whyProxyCard{
  @include adaptiveValue(padding-top, 48, 32);
  @include adaptiveValue(padding-bottom, 48, 32);
  @include adaptiveValue(padding-left, 32, 24);
  @include adaptiveValue(padding-right, 32, 24);
  border-radius: rem(16);
  box-shadow: 0px 8px 32px rgba(0, 58, 206, 0.08), 0px 16px 16px rgba(0, 58, 206, 0.04);
  display: grid;
  @include adaptiveValue(grid-gap,  16, 16);
  align-items: center;

  @include maq('tablet-wide') {
    min-height: rem(246);
  }
  @include mq('tablet') {
    grid-template-columns: rem(56) 1fr;
  }

  &__name{
    @include adaptiveValue(font-size, 18, 16);
  }

  &__description{
    @include mq('tablet') {
      grid-column: span 2;
    }

    color: $color_4;
    @include adaptiveValue(font-size, 16, 14);

  }
}
</style>