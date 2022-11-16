<script setup>
import Header from "@/components/Header.vue";
import First from "@/components/pages/main/first/First.vue";
import WhyProxy from "@/components/pages/main/whyProxy/WhyProxy.vue";
import Tab from "@/components/pages/main/tab/Tab.vue";
import PartnerProgram from "@/components/pages/main/partnerProgram/PartnerProgram.vue";
import ProxyEveryone from "@/components/pages/main/proxyEveryone/ProxyEveryone.vue";
import Partner from "@/components/pages/main/partner/Partner.vue";
import SeoText from "@/components/pages/main/seoText/SeoText.vue";
</script>

<template lang="pug">
.wrapper
  Header
  main.page
    First
    WhyProxy
    Tab
    PartnerProgram
    ProxyEveryone
    Partner
    SeoText
  footer.footer
    .footer__container
      h1 htru


</template>

<style scoped></style>