<template lang="pug">
button.header__burger
  span
  span
  span
</template>

<script>
export default {
  name: "Burger",
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
.header__burger {
  display: none;
  @include maq('desktop') {
    display: grid;
    grid-gap: rem(5);

    span {
      width: rem(30);
      height: rem(4);
      background: $mainColor;
    }
  }
}
</style>