<template>
    <div class="group">
        <line-item v-for="v in $store.state.Commoditys" :key="v.CommodityId" :detail="v"></line-item>
    </div>
</template>

<script>
    import LineItem from './LineItem.vue'
    export default {
        components: {
            LineItem
        }
    }
</script>


<style lang="scss">
    .group {
        margin-top: .08rem;
    }
</style>
