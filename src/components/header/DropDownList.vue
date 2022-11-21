<template lang="pug">
.header__link.header-link-DDL(@click="this.isOpenSecondLevel" @mouseover="isHidden = true" @mouseleave="isHidden = false" )
  slot(name="icon")
  span {{ title }}
  svg(class="arrow" :class="{active : isHidden}" width='8', height='6', viewbox='0 0 8 6', fill='none', xmlns='http://www.w3.org/2000/svg')
    path(d='M4 5.24999L0 1.24999L0.716667 0.533325L4 3.83333L7.28333 0.549992L8 1.26666L4 5.24999Z', fill='#050608')
  .header-link-DDL__List(ref="SL" v-show="isHidden")
    slot(name="DDL")

</template>

<script>
export default {
  name: "DropDownList",
  props:{
    title:{
      type: String,
      required: true
    }
  },

  data(){
    return{
      isHidden: false
    }
  },
  methods: {
    isOpenSecondLevel(){
      this.isHidden = !this.isHidden
      this.isHidden ? this.$refs.SL.classList.add("menu-open") : this.$refs.SL.classList.remove("menu-open")
    }
  }
}
</script>

<style  lang="scss">
@import "@/assets/scss/style.scss";
.header-link-DDL{
  display: grid;
  grid-gap: 0 rem(12);
  align-items: center;
  grid-template-columns: auto 1fr auto;
  position: relative;
  cursor: pointer;

  @media (any-hover: hover) {
    &:hover {
      .header-link-DDL__List{
        display: grid;
      }
      .arrow{
        transform: scaleY(-1);
      }
    }
  }

  &__List{
    background: transparent;
    padding: rem(5);
    grid-column: span 3;
    display: none;
    z-index: 15;

    @include mq('desktop') {
      top: 101%;
      left: rem(0);
      position: absolute;
      padding: rem(5);
    }

    @include mq('tablet-wide') {

      border-radius: 0px 0px 16px 16px;
    }

    @include mq('desktop') {
      background: #FFFFFF;
      padding: rem(24);
    }
    a{
      display: flex;
      gap:rem(8);
      align-items: center;
      padding: rem(5) 0;
    }

    &.menu-open{
      display: grid;
    }
  }

  .arrow{
    transition: .3s;

    &.active{
      transform: scaleY(-1);
    }
  }
}



</style>
