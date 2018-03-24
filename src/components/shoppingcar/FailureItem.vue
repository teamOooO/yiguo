<<<<<<< HEAD
<template>
    <div class="fail-line-item">
        <div class="check"><i></i></div>
        <div class="img"><img :src="detail.SmallPic"></div>
        <div class="text">
            <h2 class="elli2">{{detail.CommodityName}}</h2>
            <p><strong class="price">￥<b>{{detail.CommodityPrice}}</b></strong></p>
        </div>
        <div class="del" @click="deletCommodity(detail.CommodityId)"><i></i></div>
    </div>
</template>

<script>
    export default {
        props: ['detail'],
        methods: {
            deletCommodity(id) {
                this.$store.commit('deletCommodity', id);
                this.$store.commit('cartIsEmpty');
            }
        }
    }
</script>


<style lang="scss">
    @import '../../styles/yo/usage/core/reset.scss';
    .fail-line-item {
        height: .9rem;
        padding: .1rem .08rem;
        background: #fff;
        @include flexbox();
        border-bottom: 1px solid #ddd; // border-color: #ccc;
        // @include border(0, 0, 1px, 0);
        position: relative; // .yo-number {
        //     @include yo-number('', .7rem, .21rem, 3px);
        // }
        .check {
            width: .35rem;
            height: .05rem;
            padding: .11rem 0 .1rem .1rem;
            font-size: 12px;
            margin-top: .13rem;
            i {
                display: inline-block;
                width: .16rem;
                height: .16rem;
                margin: .02rem .06rem 0 0;
                background: url("../../assets/images/check3.png") no-repeat;
                background-size: 100%;
                vertical-align: -4px;
            }
        }
        .img {
            height: 100%;
            width: .7rem;
            margin-right: .03rem;
            opacity: .6;
            img {
                width: 100%;
            }
        }
        .text {
            @include flex(1);
            @include flexbox();
            @include flex-direction(column);
            color: rgba(0, 0, 0, 0.6);
            .elli2 {
                @include flex(1);
                line-height: .15rem;
                font-size: 13px;
                font-weight: normal;
                width: 100%;
            }
            .saletip {
                height: .15rem;
                font-size: 11px;
                span {
                    display: inline-block;
                    height: .15rem;
                    padding: 0 .06rem;
                    margin-right: .03rem;
                    color: #45b575;
                    border-radius: .25rem;
                    border: 1px solid #45b575;
                    line-height: .15rem;
                }
            }
            .price {
                font-size: 14px;
            }
        }
        .del {
            position: absolute;
            right: .13rem;
            top: .12rem;
            width: .13rem;
            height: .13rem;
            i {
                display: block;
                width: 100%;
                height: 100%;
                background: url(../../assets/images/del.png) no-repeat;
                background-size: 100%;
            }
        }
    }
</style>
=======
<template>
    <div class="fail-line-item">
        <div class="check"><i></i></div>
        <div class="img"><img :src="detail.SmallPic"></div>
        <div class="text">
            <h2 class="elli2">{{detail.CommodityName}}</h2>
            <p><strong class="price">￥<b>{{detail.CommodityPrice}}</b></strong></p>
        </div>
        <div class="del" @click="deletCommodity(detail.CommodityId)"><i></i></div>
    </div>
</template>

<script>
    export default {
        props: ['detail'],
        methods: {
            deletCommodity(id) {
                this.$store.commit('deletCommodity', id);
                this.$store.commit('cartIsEmpty');
            }
        }
    }
</script>


<style lang="scss">
    @import '../../styles/yo/usage/core/reset.scss';
    .fail-line-item {
        height: .9rem;
        padding: .1rem .08rem;
        background: #fff;
        @include flexbox();
        border-bottom: 1px solid #ddd; // border-color: #ccc;
        // @include border(0, 0, 1px, 0);
        position: relative; // .yo-number {
        //     @include yo-number('', .7rem, .21rem, 3px);
        // }
        .check {
            width: .35rem;
            height: .05rem;
            padding: .11rem 0 .1rem .1rem;
            font-size: 12px;
            margin-top: .13rem;
            i {
                display: inline-block;
                width: .16rem;
                height: .16rem;
                margin: .02rem .06rem 0 0;
                background: url("../../assets/images/check3.png") no-repeat;
                background-size: 100%;
                vertical-align: -4px;
            }
        }
        .img {
            height: 100%;
            width: .7rem;
            margin-right: .03rem;
            opacity: .6;
            img {
                width: 100%;
            }
        }
        .text {
            @include flex(1);
            @include flexbox();
            @include flex-direction(column);
            color: rgba(0, 0, 0, 0.6);
            .elli2 {
                @include flex(1);
                line-height: .15rem;
                font-size: 13px;
                font-weight: normal;
                width: 100%;
            }
            .saletip {
                height: .15rem;
                font-size: 11px;
                span {
                    display: inline-block;
                    height: .15rem;
                    padding: 0 .06rem;
                    margin-right: .03rem;
                    color: #45b575;
                    border-radius: .25rem;
                    border: 1px solid #45b575;
                    line-height: .15rem;
                }
            }
            .price {
                font-size: 14px;
            }
        }
        .del {
            position: absolute;
            right: .13rem;
            top: .12rem;
            width: .13rem;
            height: .13rem;
            i {
                display: block;
                width: 100%;
                height: 100%;
                background: url(../../assets/images/del.png) no-repeat;
                background-size: 100%;
            }
        }
    }
</style>
>>>>>>> sj-201803015-homepage
