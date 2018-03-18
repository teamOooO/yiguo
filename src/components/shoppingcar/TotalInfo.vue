<template>
    <div class="cart-total">
        <div class="check"><i class="active"></i>全选</div>
        <div class="text">
            <p>合计(不含运费)：<b>¥{{$store.getters.Amount.sumAmount}}</b></p>
            <span>已优惠: ¥{{$store.getters.Amount.cheapAmount}}</span>
        </div>
        <div class="btn">
            <a href="javascript:;">去结算</a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               
            }
        }
    }
</script>


<style lang="scss">
    @import '../../styles/yo/usage/core/reset.scss';
    .cart-total {
        width: 100%;
        height: .45rem;
        background: #fff;
        @include flexbox();
        border-bottom: 1px solid #999;
        .check {
            top: 0;
            left: 0;
            width: .63rem;
            height: .05rem;
            padding: .11rem 0 .1rem .1rem;
            font-size: 12px;
            i {
                display: inline-block;
                width: .16rem;
                height: .16rem;
                margin: .02rem .06rem 0 0;
                background: url("../../assets/images/check1.png") no-repeat;
                background-size: 100%;
                vertical-align: -4px;
            }
            i.active {
                background-image: url("../../assets/images/check2.png")
            }
        }
        .text {
            @include flex();
            padding: .07rem 0;
            line-height: .06rem;
            font-size: 11px;
            text-align: right;
            padding-right: .08rem;
            p {
                line-height: .19rem;
                height: .19rem;
                font-size: 12px;
            }
            span {
                color: #999;
                line-height: .15rem;
            }
            b {
                font-size: 15px;
                color: #ff6353;
            }
        }
        .btn {
            width: 1.08rem;
            height: .45rem;
            a {
                display: block;
                width: 1.08rem;
                height: .45rem;
                background: #ff6353;
                line-height: .45rem;
                font-size: 16px;
                color: #fff;
                font-weight: bold;
                text-align: center;
            }
        }
    }
</style>
