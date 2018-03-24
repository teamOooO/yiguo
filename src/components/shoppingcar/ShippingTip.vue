<template>
    <div class="total-info">
        <div v-if="$store.getters.saleTopTipDif <= 0">全场满100元包邮，已包邮</div>
        <div v-else>全场满100元包邮，还差<span class="red">{{$store.getters.saleTopTipDif}}</span>元包邮</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tip: '已包邮' //或者还差100.00元包邮
            }
        }
    }
</script>

<style lang="scss">
    @import '../../styles/yo/usage/core/reset.scss';
    .total-info {
        width: 100%;
        height: .34rem;
        padding: 0 0 0 .12rem;
        background: #fff9eb;
        line-height: .34rem;
        font-size: 12px;
        color: #333;
        z-index: 100;
        @include border(0, 0, 1px, 0);
        border-color: #ffd6a0;
    }
</style>


