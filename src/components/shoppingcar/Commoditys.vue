<template>
    <div class="group">
        <line-item :detail="detail"></line-item>
    </div>
</template>

<script>
    import LineItem from './LineItem.vue'
    export default {
        props: ['detail'],
        components: {
            LineItem
        }
    }
</script>


<style lang="scss">
    .group {
        margin-bottom: .08rem;
    }
</style>
