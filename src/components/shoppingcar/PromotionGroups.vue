<template>
    <div class="group">
        <sale-top></sale-top>
         <line-item :detail="detail"></line-item>
    </div>
</template>

<script>
    import LineItem from './LineItem.vue'
    import SaleTop from './SaleTop.vue'
    export default {
         props: ['detail'],
        components: {
            LineItem,
            SaleTop
        }
    }
</script>
