<template>
  <div class="shoppingcar">
    <shipping-tip v-show="!isEmpty"></shipping-tip>
    <div class="cart-wrap">
      <empty v-show="isEmpty"></empty>
      <div v-show="!isEmpty" class="goods">
        <commoditys v-for="v in $store.state.Commoditys" :key="v.CommodityId" :detail="v"></commoditys>
        <promotion-groups v-for="v in $store.state.PromotionGroups" :key="v.CommodityId" :detail="v"></promotion-groups>
        <failure-groups v-for="v in $store.state.FailureGroups" :key="v.CommodityId" :detail="v"></failure-groups>
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
    data() {
      return {
        isEmpty: true,
        
      }
    },
    mounted() {
      if (this.$store.getters.commodityTotalCount > 0)
        this.isEmpty = false;
    //  console.log(this.$store.getters.commodityTotalCount)
     
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
</style>

