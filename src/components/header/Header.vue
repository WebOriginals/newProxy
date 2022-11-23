<template lang="pug">
header.header
  .header__top
    .header__container.header__top-body
      Burger(@click="openMenu = !openMenu")
      a.header__logo(href="/")
        img(src="@_/assets/img/svg/logo-b.svg")
      a.header__link.none_mob(href="" ) FAQ
      a.header__link.none_mob(href="" ) Блог
      a.header__link.none_mob(href="" ) Контакты
      a.header__link.header-link-ic(href="")
        svg(width='12', height='12', viewbox='0 0 12 12', fill='none', xmlns='http://www.w3.org/2000/svg')
          path(d='M6.00008 5.99996C7.47341 5.99996 8.66675 4.80663 8.66675 3.33329C8.66675 1.85996 7.47341 0.666626 6.00008 0.666626C4.52675 0.666626 3.33341 1.85996 3.33341 3.33329C3.33341 4.80663 4.52675 5.99996 6.00008 5.99996ZM6.00008 7.33329C4.22008 7.33329 0.666748 8.22663 0.666748 9.99996V11.3333H11.3334V9.99996C11.3334 8.22663 7.78008 7.33329 6.00008 7.33329Z', fill='#282C97')
        span Авторизация
      v-select.header__lenguage.none_mob(
        v-model="selected"
        :options="arrayForSelect"
        label="text"
        :searchable="false"
      )
        template(#selected-option="{ img, text }")
          .leng-title
            .leng-title__img
              img(:src="img" style="max-width:38px")
            span {{ text }}
        template(#option="{ img, text }" )
          .oprion-row(style="display: flex; align-items: center; gap: 10px")
            img(:src="img" style="max-width:38px")
            span {{ text }}
  .header__bottom
    .header__container
      .header__bottom-body
        DropDownList(title="Мобильные проĸси IPv4")
          template(v-slot:icon)
            svg(width='9', height='16', viewbox='0 0 9 16', fill='none', xmlns='http://www.w3.org/2000/svg')
              path(d='M9.00004 0.666626H0.333374V15.3333H9.00004V0.666626ZM4.66671 14.6666C4.11337 14.6666 3.66671 14.22 3.66671 13.6666C3.66671 13.1133 4.11337 12.6666 4.66671 12.6666C5.22004 12.6666 5.66671 13.1133 5.66671 13.6666C5.66671 14.22 5.22004 14.6666 4.66671 14.6666ZM7.66671 12H1.66671V2.66663H7.66671V12Z', fill='#282C97')
          template(v-slot:DDL)
            .dropDownList__wrapper.grid
              a.dropDownList__link(href="")
                img(src="@_/assets/img/png/RU.png")
                span Россия


              a.dropDownList__link(href="")
                img(src="@_/assets/img/png/UA.png")
                span Украина
              a.dropDownList__link(href="")
                img(src="@_/assets/img/png/RO.png")
                span Румыния


              a.dropDownList__link(href="")
                img(src="@_/assets/img/png/RU.png")
                span Россия


              a.dropDownList__link(href="")
                img(src="@_/assets/img/png/UA.png")
                span Украина
              a.dropDownList__link(href="")
                img(src="@_/assets/img/png/RO.png")
                span Румыния


        DropDownList(title="Серверные прокси IPv4")
          template(v-slot:icon)
            svg(width='14', height='14', viewbox='0 0 14 14', fill='none', xmlns='http://www.w3.org/2000/svg')
              path(d='M6.79997 0.333374C3.11997 0.333374 0.133301 3.32004 0.133301 7.00004C0.133301 10.68 3.11997 13.6667 6.79997 13.6667C10.48 13.6667 13.4666 10.68 13.4666 7.00004C13.4666 3.32004 10.48 0.333374 6.79997 0.333374ZM6.1333 12.2867C3.49997 11.96 1.46663 9.72004 1.46663 7.00004C1.46663 6.58671 1.51997 6.19337 1.60663 5.80671L4.79997 9.00004V9.66671C4.79997 10.4 5.39997 11 6.1333 11V12.2867ZM10.7333 10.5934C10.56 10.0534 10.0666 9.66671 9.46663 9.66671H8.79997V7.66671C8.79997 7.30004 8.49997 7.00004 8.1333 7.00004H4.1333V5.66671H5.46663C5.8333 5.66671 6.1333 5.36671 6.1333 5.00004V3.66671H7.46663C8.19997 3.66671 8.79997 3.06671 8.79997 2.33337V2.06004C10.7533 2.85337 12.1333 4.76671 12.1333 7.00004C12.1333 8.38671 11.6 9.64671 10.7333 10.5934Z', fill='#282C97')
          template(v-slot:DDL)
            .dropDownList__wrapper
              a.dropDownList__link(href="") сканер портов1
              a.dropDownList__link(href="") сканер портов2
              a.dropDownList__link(href="") сканер портов3
              a.dropDownList__link(href="") сканер портов4

        DropDownList(title="Прокси для")
          template(v-slot:icon)
            svg(width='17', height='12', viewbox='0 0 17 12', fill='none', xmlns='http://www.w3.org/2000/svg')
              path(d='M15.2668 10V0H1.93343V10H0.600098V11.3333H16.6001V10H15.2668ZM9.93343 10H7.26676V9.33333H9.93343V10ZM13.9334 8H3.26676V1.33333H13.9334V8Z', fill='#282C97')
          template(v-slot:DDL)
            .dropDownList__wrapper
              a.dropDownList__link(href="") сканер портов1
              a.dropDownList__link(href="") сканер портов2
              a.dropDownList__link(href="") сканер портов3
              a.dropDownList__link(href="") сканер портов4

        DropDownList(title="Инструменты")
          template(v-slot:icon)
            svg(width='14', height='14', viewbox='0 0 14 14', fill='none', xmlns='http://www.w3.org/2000/svg')
              path(d='M10.0026 7.70042L8.58838 9.11462L12.5859 13.1121L14.0001 11.6979L10.0026 7.70042Z', fill='#282C97')
              path(d='M11.0665 5.6667C12.3531 5.6667 13.3998 4.62003 13.3998 3.33337C13.3998 2.9467 13.2931 2.5867 13.1265 2.2667L11.3265 4.0667L10.3331 3.07337L12.1331 1.27337C11.8131 1.1067 11.4531 1.00003 11.0665 1.00003C9.7798 1.00003 8.73314 2.0467 8.73314 3.33337C8.73314 3.6067 8.78647 3.8667 8.87314 4.1067L7.6398 5.34003L6.45314 4.15337L6.92647 3.68003L5.98647 2.74003L7.3998 1.3267C6.6198 0.546699 5.35314 0.546699 4.57314 1.3267L2.21314 3.6867L3.15314 4.6267H1.27314L0.799805 5.10003L3.1598 7.46003L3.63314 6.9867V5.10003L4.57314 6.04003L5.04647 5.5667L6.23314 6.75337L1.29314 11.6934L2.70647 13.1067L10.2931 5.5267C10.5331 5.61337 10.7931 5.6667 11.0665 5.6667Z', fill='#282C97')
          template(v-slot:DDL)
            .dropDownList__wrapper
              a.dropDownList__link(href="") сканер портов1
              a.dropDownList__link(href="") сканер портов2
              a.dropDownList__link(href="") сканер портов3
              a.dropDownList__link(href="") сканер портов4


        a.header__link.header-link-ic(href="")
          svg(width='16', height='12', viewbox='0 0 16 12', fill='none', xmlns='http://www.w3.org/2000/svg')
            path(fill-rule='evenodd', clip-rule='evenodd', d='M11.3137 6.7533C12.2271 7.3733 12.8671 8.2133 12.8671 9.3333V11.3333H15.5337V9.3333C15.5337 7.87996 13.1537 7.01996 11.3137 6.7533Z', fill='#282C97')
            path(d='M6.20036 5.99996C7.67312 5.99996 8.86702 4.80605 8.86702 3.33329C8.86702 1.86053 7.67312 0.666626 6.20036 0.666626C4.7276 0.666626 3.53369 1.86053 3.53369 3.33329C3.53369 4.80605 4.7276 5.99996 6.20036 5.99996Z', fill='#282C97')
            path(fill-rule='evenodd', clip-rule='evenodd', d='M10.2004 5.99996C11.6737 5.99996 12.8671 4.80663 12.8671 3.33329C12.8671 1.85996 11.6737 0.666626 10.2004 0.666626C9.88705 0.666626 9.59372 0.733292 9.31372 0.826626C9.86705 1.51329 10.2004 2.38663 10.2004 3.33329C10.2004 4.27996 9.86705 5.15329 9.31372 5.83996C9.59372 5.93329 9.88705 5.99996 10.2004 5.99996Z', fill='#282C97')
            path(fill-rule='evenodd', clip-rule='evenodd', d='M6.20028 6.66663C4.42028 6.66663 0.866943 7.55996 0.866943 9.33329V11.3333H11.5336V9.33329C11.5336 7.55996 7.98028 6.66663 6.20028 6.66663Z', fill='#282C97')
          span Партнёрская программа

        a.header__link.header-link-ic(href="")
          svg(width='14', height='14', viewbox='0 0 14 14', fill='none', xmlns='http://www.w3.org/2000/svg')
            path(d='M6.99992 0.333374C3.31992 0.333374 0.333252 3.32004 0.333252 7.00004C0.333252 10.68 3.31992 13.6667 6.99992 13.6667C10.6799 13.6667 13.6666 10.68 13.6666 7.00004C13.6666 3.32004 10.6799 0.333374 6.99992 0.333374ZM7.93992 11.06V12.3334H6.15992V11.0467C5.01992 10.8067 4.05325 10.0734 3.97992 8.78004H5.28659C5.35325 9.48004 5.83325 10.0267 7.05325 10.0267C8.35992 10.0267 8.65325 9.37337 8.65325 8.96671C8.65325 8.41337 8.35992 7.89337 6.87325 7.54004C5.21992 7.14004 4.08659 6.46004 4.08659 5.09337C4.08659 3.94671 5.01325 3.20004 6.15992 2.95337V1.66671H7.93992V2.96671C9.17992 3.26671 9.79992 4.20671 9.83992 5.22671H8.53325C8.49992 4.48671 8.10659 3.98004 7.05325 3.98004C6.05325 3.98004 5.45325 4.43337 5.45325 5.07337C5.45325 5.63337 5.88659 6.00004 7.23325 6.34671C8.57992 6.69337 10.0199 7.27337 10.0199 8.95337C10.0133 10.1734 9.09992 10.84 7.93992 11.06Z', fill='#282C97')
          span Цены
  .header__mobile(v-if="openMenu")
    .header__mobile-body
      v-select.header__lenguage(
        v-model="selected"
        :options="arrayForSelect"
        label="text"
        :searchable="false"
      )
        template(#selected-option="{ img, text }")
          .leng-title
            .leng-title__img
              img(:src="img" style="max-width:38px")
            span {{ text }}
        template(#option="{ img, text }" )
          .oprion-row(style="display: flex; align-items: center; gap: 10px")
            img(:src="img" style="max-width:38px")
            span {{ text }}
      DropDownList(title="Мобильные проĸси IPv4")
        template(v-slot:icon)
          svg(width='9', height='16', viewbox='0 0 9 16', fill='none', xmlns='http://www.w3.org/2000/svg')
            path(d='M9.00004 0.666626H0.333374V15.3333H9.00004V0.666626ZM4.66671 14.6666C4.11337 14.6666 3.66671 14.22 3.66671 13.6666C3.66671 13.1133 4.11337 12.6666 4.66671 12.6666C5.22004 12.6666 5.66671 13.1133 5.66671 13.6666C5.66671 14.22 5.22004 14.6666 4.66671 14.6666ZM7.66671 12H1.66671V2.66663H7.66671V12Z', fill='#282C97')
        template(v-slot:DDL)
          .dropDownList__wrapper.grid
            a.dropDownList__link(href="")
              img(src="@_/assets/img/png/RU.png")
              span Россия


            a.dropDownList__link(href="")
              img(src="@_/assets/img/png/UA.png")
              span Украина
            a.dropDownList__link(href="")
              img(src="@_/assets/img/png/RO.png")
              span Румыния


            a.dropDownList__link(href="")
              img(src="@_/assets/img/png/RU.png")
              span Россия


            a.dropDownList__link(href="")
              img(src="@_/assets/img/png/UA.png")
              span Украина
            a.dropDownList__link(href="")
              img(src="@_/assets/img/png/RO.png")
              span Румыния


      DropDownList(title="Серверные прокси IPv4")
        template(v-slot:icon)
          svg(width='14', height='14', viewbox='0 0 14 14', fill='none', xmlns='http://www.w3.org/2000/svg')
            path(d='M6.79997 0.333374C3.11997 0.333374 0.133301 3.32004 0.133301 7.00004C0.133301 10.68 3.11997 13.6667 6.79997 13.6667C10.48 13.6667 13.4666 10.68 13.4666 7.00004C13.4666 3.32004 10.48 0.333374 6.79997 0.333374ZM6.1333 12.2867C3.49997 11.96 1.46663 9.72004 1.46663 7.00004C1.46663 6.58671 1.51997 6.19337 1.60663 5.80671L4.79997 9.00004V9.66671C4.79997 10.4 5.39997 11 6.1333 11V12.2867ZM10.7333 10.5934C10.56 10.0534 10.0666 9.66671 9.46663 9.66671H8.79997V7.66671C8.79997 7.30004 8.49997 7.00004 8.1333 7.00004H4.1333V5.66671H5.46663C5.8333 5.66671 6.1333 5.36671 6.1333 5.00004V3.66671H7.46663C8.19997 3.66671 8.79997 3.06671 8.79997 2.33337V2.06004C10.7533 2.85337 12.1333 4.76671 12.1333 7.00004C12.1333 8.38671 11.6 9.64671 10.7333 10.5934Z', fill='#282C97')
        template(v-slot:DDL)
          .dropDownList__wrapper
            a.dropDownList__link(href="") сканер портов1
            a.dropDownList__link(href="") сканер портов2
            a.dropDownList__link(href="") сканер портов3
            a.dropDownList__link(href="") сканер портов4

      DropDownList(title="Прокси для")
        template(v-slot:icon)
          svg(width='17', height='12', viewbox='0 0 17 12', fill='none', xmlns='http://www.w3.org/2000/svg')
            path(d='M15.2668 10V0H1.93343V10H0.600098V11.3333H16.6001V10H15.2668ZM9.93343 10H7.26676V9.33333H9.93343V10ZM13.9334 8H3.26676V1.33333H13.9334V8Z', fill='#282C97')
        template(v-slot:DDL)
          .dropDownList__wrapper
            a.dropDownList__link(href="") сканер портов1
            a.dropDownList__link(href="") сканер портов2
            a.dropDownList__link(href="") сканер портов3
            a.dropDownList__link(href="") сканер портов4

      DropDownList(title="Инструменты")
        template(v-slot:icon)
          svg(width='14', height='14', viewbox='0 0 14 14', fill='none', xmlns='http://www.w3.org/2000/svg')
            path(d='M10.0026 7.70042L8.58838 9.11462L12.5859 13.1121L14.0001 11.6979L10.0026 7.70042Z', fill='#282C97')
            path(d='M11.0665 5.6667C12.3531 5.6667 13.3998 4.62003 13.3998 3.33337C13.3998 2.9467 13.2931 2.5867 13.1265 2.2667L11.3265 4.0667L10.3331 3.07337L12.1331 1.27337C11.8131 1.1067 11.4531 1.00003 11.0665 1.00003C9.7798 1.00003 8.73314 2.0467 8.73314 3.33337C8.73314 3.6067 8.78647 3.8667 8.87314 4.1067L7.6398 5.34003L6.45314 4.15337L6.92647 3.68003L5.98647 2.74003L7.3998 1.3267C6.6198 0.546699 5.35314 0.546699 4.57314 1.3267L2.21314 3.6867L3.15314 4.6267H1.27314L0.799805 5.10003L3.1598 7.46003L3.63314 6.9867V5.10003L4.57314 6.04003L5.04647 5.5667L6.23314 6.75337L1.29314 11.6934L2.70647 13.1067L10.2931 5.5267C10.5331 5.61337 10.7931 5.6667 11.0665 5.6667Z', fill='#282C97')
        template(v-slot:DDL)
          .dropDownList__wrapper
            a.dropDownList__link(href="") сканер портов1
            a.dropDownList__link(href="") сканер портов2
            a.dropDownList__link(href="") сканер портов3
            a.dropDownList__link(href="") сканер портов4


      a.header__link.header-link-ic(href="")
        svg(width='16', height='12', viewbox='0 0 16 12', fill='none', xmlns='http://www.w3.org/2000/svg')
          path(fill-rule='evenodd', clip-rule='evenodd', d='M11.3137 6.7533C12.2271 7.3733 12.8671 8.2133 12.8671 9.3333V11.3333H15.5337V9.3333C15.5337 7.87996 13.1537 7.01996 11.3137 6.7533Z', fill='#282C97')
          path(d='M6.20036 5.99996C7.67312 5.99996 8.86702 4.80605 8.86702 3.33329C8.86702 1.86053 7.67312 0.666626 6.20036 0.666626C4.7276 0.666626 3.53369 1.86053 3.53369 3.33329C3.53369 4.80605 4.7276 5.99996 6.20036 5.99996Z', fill='#282C97')
          path(fill-rule='evenodd', clip-rule='evenodd', d='M10.2004 5.99996C11.6737 5.99996 12.8671 4.80663 12.8671 3.33329C12.8671 1.85996 11.6737 0.666626 10.2004 0.666626C9.88705 0.666626 9.59372 0.733292 9.31372 0.826626C9.86705 1.51329 10.2004 2.38663 10.2004 3.33329C10.2004 4.27996 9.86705 5.15329 9.31372 5.83996C9.59372 5.93329 9.88705 5.99996 10.2004 5.99996Z', fill='#282C97')
          path(fill-rule='evenodd', clip-rule='evenodd', d='M6.20028 6.66663C4.42028 6.66663 0.866943 7.55996 0.866943 9.33329V11.3333H11.5336V9.33329C11.5336 7.55996 7.98028 6.66663 6.20028 6.66663Z', fill='#282C97')
        span Партнёрская программа

      a.header__link.header-link-ic(href="")
        svg(width='14', height='14', viewbox='0 0 14 14', fill='none', xmlns='http://www.w3.org/2000/svg')
          path(d='M6.99992 0.333374C3.31992 0.333374 0.333252 3.32004 0.333252 7.00004C0.333252 10.68 3.31992 13.6667 6.99992 13.6667C10.6799 13.6667 13.6666 10.68 13.6666 7.00004C13.6666 3.32004 10.6799 0.333374 6.99992 0.333374ZM7.93992 11.06V12.3334H6.15992V11.0467C5.01992 10.8067 4.05325 10.0734 3.97992 8.78004H5.28659C5.35325 9.48004 5.83325 10.0267 7.05325 10.0267C8.35992 10.0267 8.65325 9.37337 8.65325 8.96671C8.65325 8.41337 8.35992 7.89337 6.87325 7.54004C5.21992 7.14004 4.08659 6.46004 4.08659 5.09337C4.08659 3.94671 5.01325 3.20004 6.15992 2.95337V1.66671H7.93992V2.96671C9.17992 3.26671 9.79992 4.20671 9.83992 5.22671H8.53325C8.49992 4.48671 8.10659 3.98004 7.05325 3.98004C6.05325 3.98004 5.45325 4.43337 5.45325 5.07337C5.45325 5.63337 5.88659 6.00004 7.23325 6.34671C8.57992 6.69337 10.0199 7.27337 10.0199 8.95337C10.0133 10.1734 9.09992 10.84 7.93992 11.06Z', fill='#282C97')
        span Цены
      .header-mobile__phone
        h3 О компании
        a.header__link(href="" ) FAQ
        a.header__link(href="" ) Блог
        a.header__link(href="" ) Контакты

</template>

<script>
import DropDownList from "@/components/header/DropDownList.vue";
import Burger from "@/components/header/Burger.vue";
import {bodyLock, bodyUnlock, isMobile, addTouchClass} from "@/assets/js/files/functions";
import vSelect from "vue-select";


const Select = [
  {text: 'Ru', img: `./assets/img/png/RU.png`, value: 'RU'},
  {text: 'Ro', img: "./assets/img/png/RO.png", value: 'RO'},
  {text: 'Ua', img: "./assets/img/png/UA.png", value: 'UA'},
  {text: 'Ge', img: "./assets/img/png/GE.png", value: 'GE'},
];
export default {
  name: "Header",
  components: {Burger,
    DropDownList,
    vSelect},
  data() {
    return {
      openMenu: false,
      //Пропс языков для селекта
      arrayForSelect: Select,
      //Selected для селекта
      selected: Select[0],
    }
  },
  watch: {
    openMenu() {
      this.openMenu ? bodyLock() : bodyUnlock()
    }
  },
  mounted() {
    addTouchClass();

  }
}
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

.header {
  padding: 10px 0;
  filter: drop-shadow(0px 8px 32px rgba(0, 58, 206, 0.08)) drop-shadow(0px 16px 16px rgba(0, 58, 206, 0.04));

  &__logo {
    margin-right: auto;

    img{
      max-width: 100%;
    }
    @include maq('tablet-small') {
      width: 140px;
    }
  }

  &__top-body {
    display: flex;
    @include adaptiveValue(gap, 32, 24);
    align-items: center;
    font-size: rem(14);
    padding-bottom: rem(8);
    @include maq('tablet-wide') {
      padding-bottom: rem(0);
    }
  }

  &-link-ic {
    display: flex;
    gap: rem(12);
    align-items: center;
  }

  &__bottom {
    border-top: 2px solid $color_3;
    @include maq('desktop') {
      display: none;
    }
  }

  &__bottom-body {
    padding-top: rem(24);
    display: flex;
    gap: rem(30);
    justify-content: space-between;

    span {
      font-size: rem(14);
    }
  }

  &__mobile {
    background: rgba(5, 6, 8, 0.58);
    position: absolute;
    left: 0;
    top: 50px;
    width: 100%;
    height: calc(100% - 50px);
    z-index: 15;
    @include mq('tablet-small') {
      top: 60px;
      height: calc(100% - 60px);
    }

    .header__lenguage{
      width: 110px;
      margin-left: -20px;
      @include mq('tablet-small') {
        display: none;
      }
    }

    @include mq('desktop') {
      display: none;
    }

    &-body {
      background: #fff;
      width: rem(320);
      height: 100%;
      padding: rem(30) rem(43);
      display: grid;
      //grid-gap: rem(16);
      align-content: flex-start;
      border-top: 1px solid #DDE0E4;
      span {
        font-size: rem(16);
      }
    }

    .header-link-DDL,.header-link-ic{
      border-bottom: 1px solid #DDE0E4;
      padding: rem(16) 0;
    }

    .dropDownList__wrapper{
      padding: rem(16) 0 0 0;
    }

  }

  .dropDownList__wrapper{
    display: grid;
    grid-gap: rem(16);
    @include mq('tablet-wide') {
      .dropDownList__link{
        width: max-content;
      }
    }

    &.grid{

      @include mq('desktop') {
        grid-template-columns: 1fr 1fr 1fr;
        padding: rem(12);
        border-radius: 0px 0px 16px 16px;
      }
    }
  }

  &__lenguage {

    .vs__clear{
      display: none;
    }

    .vs__selected{
      margin: 0;
      padding: 0;
    }


    .leng-title {
      display: flex;
      gap: rem(8);
      align-items: center;
    }

    .vs__dropdown-toggle {
      padding: rem(5) rem(16);
      border-radius: 8px !important;
      background: transparent;
      color: $mainColor;
      font-weight: 400;
      font-size: rem(14);
      border: none;
      min-width: rem(110);
    }

    .vs__open-indicator {

    }

    .vs__dropdown-menu {
      color: $mainColor;
      border-radius: 0 0 8px 8px;
      top: calc(100% - var(--vs-border-width));
      max-width: rem(95) !important;
      min-width: rem(95) !important;
      border: none;
      padding: rem(10) rem(5);
    }

    .vs__dropdown-option{
      padding: rem(5) rem(15);


    }

    .vs__dropdown-option--deselect,
    .vs__dropdown-option--selected,
    .vs__dropdown-option--highlight,
    .vs__dropdown-option--disabled{
      background-color: transparent;
      color: $mainColor;
      @media (any-hover: hover) {
        &:hover {
          background-color: transparent;
          color: $color_6;
        }
      }
    }

    .select-arrow{
      width: rem(18);
      height: rem(10);
      position: relative;
      &:before, &:after {
        content: '';
        position: absolute;
        width: 7px;
        height: 1px;
        background: $mainColor;
      }

      &:before{
        transform: rotate(45deg) translateX(4px) translateY(3px);
      }
      &:after{
        transform: rotate(-45deg) translateX(1px) translateY(8px);
      }
    }

    .vs__search{
      margin: 0 !important;
      padding: 0 !important;
      font-size: 14px !important;
    }

    .vs__actions{
      padding: 0;
    }
  }

  .vs--open .select-arrow{
    transform: scaleY(-1) !important;
  }

  .vs--open .vs__selected{
    opacity: 1;
  }

  .none_mob{
    @include maq('tablet-small') {
      display: none;
    }
  }

  .header-mobile__phone{
    display: grid;
    gap: rem(15);
    padding-top: rem(20);

    h3{
      font-weight: 500;
    }
    @include mq('tablet-small') {
      display: none;
    }
  }
}




</style>
