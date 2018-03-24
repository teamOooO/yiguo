<template>
  <div class="shoppingcar">
    <div class="fixedbox" ref="fixedbox">
      <login-bar v-if="!$store.state.issignin"></login-bar>
      <shipping-tip v-show="!$store.state.isEmpty"></shipping-tip>
    </div>
    <empty v-show="$store.state.isEmpty"></empty>    
      <div class="cart-wrap" :style="stylecss">
        <div v-show="!$store.state.isEmpty" class="goods">
          <promotion-groups></promotion-groups>
          <commoditys></commoditys>
          <failure-groups></failure-groups>
        </div>
      </div>
    <total-info></total-info>
  </div>
  
</template>

<script>
  import Empty from '../shoppingcar/Empty'
  import FailureGroups from '../shoppingcar/FailureGroups'
  import Commoditys from '../shoppingcar/Commoditys'
  import ShippingTip from '../shoppingcar/ShippingTip'
  import TotalInfo from '../shoppingcar/TotalInfo'
  import PromotionGroups from '../shoppingcar/PromotionGroups'
  import LoginBar from '../shoppingcar/LoginBar.vue'
  export default {
    components: {
      TotalInfo,
      ShippingTip,
      Commoditys,
      FailureGroups,
      Empty,
      PromotionGroups,
      LoginBar
    },
    data () {
      return {
        stylecss:''
      }
    },
    mounted () {
      this.stylecss = `margin-top:${this.$refs.fixedbox.offsetHeight}px`;
    }
  }
</script>

<style lang="scss">
  @import '../../styles/yo/usage/core/reset.scss';
  .shoppingcar {
    height: 100%;
    @include flexbox();
    @include flex-direction(column);
  }
  .cart-wrap {
    @include flex(1);
    overflow-y: scroll;
    width: 100%;
  }
  .fixedbox{
    position: fixed;
    top:0;
    left: 0;
    z-index: 100;
    width:100%;
  }
</style>

