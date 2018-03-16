<template>
  <div class="shoppingcar">
    <shipping-tip></shipping-tip>
    <div class="cart-wrap"></div>
    <total-info></total-info>
  </div>
</template>

<script>
  import Empty from '../shoppingcar/Empty'
  import FailureGroups from '../shoppingcar/FailureGroups'
  import Commoditys from '../shoppingcar/Commoditys'
  import ShippingTip from '../shoppingcar/ShippingTip'
  import TotalInfo from '../shoppingcar/TotalInfo'
  export default {
    components: {
      TotalInfo,
      ShippingTip,
      Commoditys,
      FailureGroups,
      Empty
    }
  }
</script>

<style lang="scss">
  @import '../../styles/yo/usage/core/reset.scss';
  .shoppingcar {
    @include flexbox();
    @include flex-direction(column);
  }
  .cart-wrap {
    @include flex(1);
    margin-top: .48rem;
  }
</style>

