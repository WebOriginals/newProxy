<template lang="pug">
.firstService__card.firstService-card
    .firstService-card__img
      img(:src="cardService.img" :alt="cardService.text")
    .firstService-card__text {{cardService.text}}
</template>

<script>
export default {
  name: "CardService",
  props:{
    cardService:{
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
.firstService-card{
  display: flex;
  align-items: center;
  gap: rem(16);
  color: $mainColor;
  @include adaptiveValue(padding-top, 24, 18);
  @include adaptiveValue(padding-bottom, 24, 18);

  &:not(:last-child){
    border-bottom: 1px solid rgba(147, 149, 152, 0.65);
    @include mq('tablet-wide') {
      border-bottom: none;
      border-right: 1px solid rgba(147, 149, 152, 0.55);
    }
  }

  @include mq('tablet-wide') {
    flex-direction: column;
    align-items: flex-start;
    @include adaptiveValue(padding-left, 24, 18);
    @include adaptiveValue(padding-right, 24, 18);
  }

  &__text{
    @include adaptiveValue(font-size, 14,12);
    font-weight: 500;
  }
}
</style>