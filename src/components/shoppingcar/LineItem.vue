<template>
    <router-link class="line-item" tag="div" :to="{name:'detail',params:{id:detail.CommodityId}}">
        <check :isselected="detail.Selected" :data-id="detail.CommodityId"></check>
        <div class="img"><img :src="detail.SmallPic"></div>
        <div class="text">
            <h2 class="elli2">{{detail.CommodityName}}</h2>
            <div v-if="detail.PromotionTag" class="saletip"><span class="line-all">{{detail.PromotionTag}}</span></div>
            <p><strong class="price">￥<b>{{detail.CommodityPrice}}</b></strong>
                <span v-if="detail.OriginalPrice!=detail.CommodityPrice" class="bl">￥{{detail.OriginalPrice}}</span></p>
        </div>
        <div class="del" @click="deletCommodity(detail.CommodityId)"><i></i></div>
        <div class="limit red"></div>
        <!-- <div class="yo-number"></div> -->
        <div class="num">
            <span v-if="detail.CommodityAmount <= 1" class="cut active"><i>-</i></span>
            <span v-else class="cut" @click="commodityMinus(detail.CommodityId)"><i>-</i></span>
            <span class="input">{{detail.CommodityAmount}}</span>
            <span class="add" @click="commodityAdd(detail.CommodityId)"><i>+</i></span>
        </div>
    </router-link>
</template>

<script>
    import Check from './Check'
    export default {
        props: ['detail'],
        components: {
            Check
        },
        methods: {
            commodityAdd(id) {
                this.$store.commit('commodityAdd', id);
            },
            commodityMinus(id) {
                this.$store.commit('commodityMinus', id);
            },
            deletCommodity(id) {
                this.$store.commit('deletCommodity', id);
                this.$store.commit('cartIsEmpty');
            }
        }
    }
</script>


<style lang="scss">
    @import '../../styles/yo/usage/core/reset.scss'; // @import '../../styles/yo/lib/fragment/yo-number.scss';
    .line-item {
        height: .9rem;
        padding: .1rem .08rem;
        background: #fff;
        @include flexbox();
        border-bottom: 1px solid #ddd; // border-color: #ccc;
        // @include border(0, 0, 1px, 0);
        position: relative; // .yo-number {
        //     @include yo-number('', .7rem, .21rem, 3px);
        // }
        // .check {
        //     width: .35rem;
        //     height: .05rem;
        //     padding: .11rem 0 .1rem .1rem;
        //     font-size: 12px;
        //     margin-top: .13rem;
        //     i {
        //         display: inline-block;
        //         width: .16rem;
        //         height: .16rem;
        //         margin: .02rem .06rem 0 0;
        //         background: url("../../assets/images/check1.png") no-repeat;
        //         background-size: 100%;
        //         vertical-align: -4px;
        //     }
        //     i.active {
        //         background-image: url("../../assets/images/check2.png")
        //     }
        // }
        .img {
            height: 100%;
            width: .7rem;
            margin-right: .03rem;
            img {
                width: 100%;
            }
        }
        .text {
            @include flex(1);
            @include flexbox();
            @include flex-direction(column);
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
                color: #ff6353;
                font-size: 14px;
            }
            .bl {
                text-decoration: line-through;
                font-size: 12px;
                color: #888;
                margin-left: .03rem;
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
        .num {
            @include flexbox();
            position: absolute;
            right: .13rem;
            top: .6rem;
            width: .7rem;
            height: .21rem;
            font-size: 13px;
            line-height: .21rem;
            text-align: center;
            .cut {
                width: .21rem;
                height: 100%;
                border: 1px solid #ddd;
                border-radius: 3px 0 0 3px;
                font-size: 18px;
            }
            span.active {
                color: #bbb;
            }
            .input {
                @include flex(1);
                border: 1px solid #ddd;
                border-left: none;
                border-right: none;
            }
            .add {
                width: .21rem;
                height: 100%;
                border: 1px solid #ddd;
                border-radius: 0 3px 3px 0;
                font-size: 18px;
            }
        }
    }
</style>
