<script setup>
import Header from "@/components/header/Header.vue";
import First from "@/components/pages/main/first/First.vue";
import WhyProxy from "@/components/pages/main/whyProxy/WhyProxy.vue";
import Tab from "@/components/pages/main/tab/Tab.vue";
import PartnerProgram from "@/components/pages/main/partnerProgram/PartnerProgram.vue";
import ProxyEveryone from "@/components/pages/main/proxyEveryone/ProxyEveryone.vue";
import Partner from "@/components/pages/main/partner/Partner.vue";
import SeoText from "@/components/pages/main/seoText/SeoText.vue";
import Reviews from "@/components/pages/main/reviews/Reviews.vue";
import Footer from "@/components/footer/Footer.vue";
import FirstService from "./components/pages/service/firstService/FirstService.vue";
import Spoller from "@/components/pages/service/spoller/Spoller.vue";
import Authorization from "@/components/pages/authorization/Authorization.vue";
import QuickRegistration from "@/components/pages/quickRegistration/QuickRegistration.vue";
</script>

<template lang="pug">
.wrapper
  Header
  main.page
    Authorization
    QuickRegistration
    FirstService
    Spoller
    First
    WhyProxy
    Tab
    PartnerProgram
    ProxyEveryone
    Reviews
    Partner
    SeoText
  Footer


</template>

<style scoped></style>
