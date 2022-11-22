<template lang="pug">
.countryForTabs
  .countryForTabs__icon
    img(:src='country.icon' :alt="country.name")
  .countryForTabs__name {{country.name}}
  .countryForTabs__point
  .countryForTabs__price от ${{country.price}} / шт
  button.button-y.countryForTabs__btn Перейти

</template>

<script>
export default {
  name: "CountryForTabs",
  props:{
    country:{
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
.countryForTabs{
  display: flex;
  align-items: center;
  position: relative;
  padding: rem(16);
  border-radius: rem(8);
  cursor: pointer;

  &__icon{
    margin-right: rem(8);
  }
  &__name{
    color: $color_4;
    font-size: rem(16);
  }
  &__point{
    flex: 1 1 auto;
    align-self: flex-end;
    border-bottom: 3px dotted $color_4;
    transform: translateY(-7px);
  }
  &__price{
    font-weight: 600;

  }
  &__btn{
    @include adaptiveValue(font-size, 12, 12);
    height: 34px;
    min-width: rem(130);
    opacity: 0;
    position: absolute;
    top: calc(50% - 17px);
    right: rem(16);
  }

  &:hover {
    background-color:  #F5F9FD;
    .countryForTabs__btn{
      opacity: 1;
    }
  }
}
</style>
