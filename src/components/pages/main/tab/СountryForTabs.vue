<template lang="pug">
.countryForTabs
  .countryForTabs__icon
    img(:src='country.icon')
  .countryForTabs__name {{country.name}}
  .countryForTabs__point
  .countryForTabs__price от ${{country.price}} / шт

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
}
</style>