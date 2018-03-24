<<<<<<< HEAD
<template>
    <div v-show="$store.state.PromotionGroups.length>0" class="group">
        <sale-top></sale-top>
        <line-item v-for="v in $store.state.PromotionGroups" :key="v.CommodityId" :detail="v"></line-item>
    </div>
</template>

<script>
    import LineItem from './LineItem.vue'
    import SaleTop from './SaleTop.vue'
    export default {
        components: {
            LineItem,
            SaleTop
        }
    }
</script>
=======
<template>
    <div v-show="$store.state.PromotionGroups.length>0" class="group">
        <sale-top></sale-top>
        <line-item v-for="v in $store.state.PromotionGroups" :key="v.CommodityId" :detail="v"></line-item>
    </div>
</template>

<script>
    import LineItem from './LineItem.vue'
    import SaleTop from './SaleTop.vue'
    export default {
        components: {
            LineItem,
            SaleTop
        }
    }
</script>
>>>>>>> sj-201803015-homepage
