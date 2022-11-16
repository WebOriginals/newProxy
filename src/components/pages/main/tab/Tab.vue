<template lang="pug">
.typeProxyTab
  .typeProxyTab__container
    .typeProxyTab
      TabBody
</template>

<script>


import TabBody from "@/components/pages/main/tab/TabBody.vue";
export default {
  name: "Tab",
  components: {TabBody},
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";

.typeProxyTab{
  @include adaptiveValue(padding-top, 40, 28);
  @include adaptiveValue(padding-bottom, 40, 28);
}
</style>