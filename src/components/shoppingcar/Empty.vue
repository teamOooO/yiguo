<template>
    <div class="nogoods" style="">
        <div class="icon"></div>
        <p>购物车空空的，快去逛逛吧！</p>
        <div class="btn">
            <router-link to="/">去逛逛</router-link>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../../styles/yo/usage/core/reset.scss';
    .nogoods {
        margin-top: .08rem;
        height: 2.82rem;
        position: relative;
        padding: .54rem 0 .52rem;
        background: #fff;
        text-align: center;
        // @include border(0 0 1px 0,#000,solid);
        border-bottom: #ddd 1px solid ;
        .icon {
            width: 100%;
            height: .82rem;
            background: url(../../assets/images/cart.png) no-repeat center;
            background-size: auto 100%;
        }
        p {
            padding: .2rem 0 .1rem;
            font-size: 13px;
            color: #808080;
        }
        .btn {
            a {
                position: relative;
                display: inline-block;
                width: 1rem;
                height: .34rem;
                border: 1px solid #11b57c;
                border-radius: 6px;
                line-height: .34rem;
                font-size: 14px;
                color: #11b57c;
            }
        }
    }
</style>
