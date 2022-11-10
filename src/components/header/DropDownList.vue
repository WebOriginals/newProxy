<template lang="pug">
.header__link.header-link-DDL(@click="this.isHidden = !this.isHidden")
  slot(name="icon")
  span {{ title }}
  svg(class="arrow" :class="{active : isHidden}" width='8', height='6', viewbox='0 0 8 6', fill='none', xmlns='http://www.w3.org/2000/svg')
    path(d='M4 5.24999L0 1.24999L0.716667 0.533325L4 3.83333L7.28333 0.549992L8 1.26666L4 5.24999Z', fill='#050608')
  .header-link-DDL__List(v-if="isHidden")
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
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
.header-link-DDL{
  display: grid;
  grid-gap: 0 rem(12);
  align-items: center;
  grid-template-columns: auto 1fr auto;
  position: relative;
  cursor: pointer;

  &__List{
    background: $color_1;
    padding: rem(5);
    grid-column: span 3;
    display: grid;
    width: 100%;
    @include mq('desktop') {
      top: 101%;
      left: rem(0);
      position: absolute;
    }
    a{
      display: block;
      padding: rem(5) 0;
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