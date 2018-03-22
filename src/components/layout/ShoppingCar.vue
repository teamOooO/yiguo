<template>
  <div class="shoppingcar">
     <empty v-show="$store.state.isEmpty"></empty>
    <shipping-tip v-show="!$store.state.isEmpty"></shipping-tip>
    <div class="cart-wrap">
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
  export default {
    components: {
      TotalInfo,
      ShippingTip,
      Commoditys,
      FailureGroups,
      Empty,
      PromotionGroups
    },
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
</style>

