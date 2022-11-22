<template lang="pug">
.proxyEveryone__card.proxyEveryone-card
  .proxyEveryone-card__img
    img(:src="cardProxy.img")
  .proxyEveryone-card__title {{ cardProxy.name }}
  .proxyEveryone-card__description {{ cardProxy.text }}
</template>

<script>
export default {
  name: "Card",
  props:{
    cardProxy:{
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">

</style>