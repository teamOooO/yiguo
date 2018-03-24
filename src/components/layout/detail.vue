<<<<<<< HEAD
<template>
<div class="detail">
    <div class="content">
        <div class="de_banner">
            <i class="iconBack" @click="goBack"></i>
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="img in imgs" :key="img.id">
                <img :src="img" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="productInfor">
            <p class="title">{{productInfor.CommodityName}}</p>
            <p class="subhead"><i class="label">{{productInfor.PromotionTag}}</i>{{productInfor.SubTitle}}</p>
            <div class="price">
                <p class="priceIn">
                    <span class="priceRed"><i>¥</i>{{productInfor.CommodityPrice}}</span>
                </p>
                <p class="area">产地：<span class="name">{{productInfor.PlaceOfOrigin}}</span></p>
            </div>
            <div class="sevenDay">
                <i class="dian"></i>{{productInfor.CanNoReasonToReturnText}}
            </div>
        </div>
        <div class="sale">
            <h3>促销</h3>
            <div class="saleIn">
                <div class="saleList saleListTwo">
                    <i class="label">{{CommodityPromotions.PromotionTypeText}}</i>
                    <p class="title">{{CommodityPromotions.PromotionTitle}}</p>
                    <i class="goBack"></i>
                    <div class="list clear">
                        <p class="txt">满100减20</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="norms">
            <div class="title line-bottom">
                规格
                <span class="choose active" v-for="(v) in Speces" :key="v.CommodityId">{{v.Spec}}</span>
            </div>
            <div class="title line-bottom">
                数量
                <div class="counter">
                    <span v-if="count <= 1" class="cut active"><i>-</i></span>
                    <span v-else class="cut" @click="count>1?count--:count"><i>-</i></span>
                    <span class="input">{{count}}</span>
                    <span class="add" @click="count++"><i>+</i></span>
                </div>
                <span class="hint" style="display: none;">限购20件</span>
            </div>
        </div>
        <div class="address clear">
            <p class="title">送至</p>
            <div class="addressDetail">
                <p class="add"><span></span>{{productInfor.ShippingAddress}}</p>
                <p class="infor">
                    <span v-if="productInfor.CanAddToCart==1">有货</span>
                    <span v-else>缺货</span>
                    {{productInfor.DeliveryTips}}</p>
            </div>
        </div>
        <div class="evaluate">
            <p class="title line-bottom">
                <span class="count">评价（{{RspData.voteCount}}）</span>
                <span class="number"><i class="num">{{RspData.voteRate}}</i>好评<i class="back"></i></span>
            </p>
            <div class="content line-bottom">
                <div class="txt clear"><div class="stars-bg">
                    <span class="star" style="width: 100%;"></span>
                    </div><span v-if="RspData.TopOneYgmCommodityVote != null" class="name">{{RspData.TopOneYgmCommodityVote.UserName}}</span></div>
                <p v-if="RspData.TopOneYgmCommodityVote != null" class="text">{{RspData.TopOneYgmCommodityVote.CommentContent}}</p>
            </div>
        </div>
        <div class="detaillist">
            <a href="javascript:;">查看图文详情 &gt;</a>
        </div>
    </div>
    <div class="defooter">
        <router-link class="btn1"  href="/" :to="{name:'home'}"><i class="home"></i>首页</router-link>
        <router-link class="btn1 btn3" href="/mycart" :to="{name:'shoppingcar'}"><i class="cart"></i>购物车 <i class="num">3</i></router-link>
        <a href="javascript:;" class="btn2 btnRed" @click="addToCart">加入购物车</a>
    </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import BannerComp from '../home/BannerComp';
    export default {
        props: ['id'],
        components: {
            BannerComp,
        },
        data() {
            return {
                imgs: [],
                productInfor:'',
                CommodityPromotions:'',
                Speces:[],
                RspData:'',
                count:1
            }
        },
        mounted() {
            axios({
                url: '/api/users/findList/'+this.id,
            }).then((result) => {
                console.log(result)
                if(result){
                    this.RspData =result.data.data.RspData;
                    result = result.data.data.RspData.data;
                    this.imgs.push(...result.Pictures);
                    this.productInfor = result;
                    if(result.CommodityPromotions.length >0)
                        this.CommodityPromotions = result.CommodityPromotions[0];
                    this.Speces = result.Speces;
                }
           });
        },
        methods: {
            goBack(){
               this.$router.go(-1);
            },
            addToCart(){
                axios({
                    method: 'post',
                    url: '/api/users/updateCart',
                    data: {
                        username: 'Fred',
                        id: 'Flintstone'
                    }
                });
            }
        }
    }
</script>

<style lang="scss">
@import "../../styles/yo/usage/core/reset";

.detail{
    height: 100%;
    @include flexbox();
    @include  flex-direction(column);
    width: 100%;
   .content{
       @include flex(1);
       width: 100%;
       overflow-y: scroll;
       .productInfor{
            padding: .13rem 0 0 .1rem;
            background: #fff;
            margin-bottom: .12rem;
        }
        .title{
            line-height:  14px;
            font-size: 14px;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .subhead{
            padding-right: .32rem;
            font-size: 12px;
            color: #808080;
            padding-top: .14rem;
            line-height:12px;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-bottom: .12rem;
            .label{
                padding: .03rem .07rem;
                border: 1px solid #1fa44b;
                border-radius: 20px;
                color: #1fa44b;
                margin-right: .08rem;
                font-style: normal;
            }
        }
        .price{
            @include flexbox();
            @include border(0 0 1px 0);
            @include justify-content(space-between);
            padding-bottom: .04rem;
            padding-right: .12rem;
            .priceRed{
                font-size: 20px;
                color: #ff6353;
            }
            .area{
                font-size: 10px;
                color: #808080;
            }
            .name{
                color:#333;
            }
        }
        .sevenDay{
            line-height: .38rem;
            color: #808080;
            font-size:12px;
            .dian{
                display: inline-block;
                width: .04rem;
                height: .04rem;
                background: #11b57c;
                border-radius: 50%;
                margin-right: .06rem;
            }
        }
        .sale {
            background: #fff;
            margin-bottom: .12rem;
            h3{
                padding: .1rem .1rem;
                box-sizing: border-box;
                font-size: 14px;
               color: #808080;  
            @include border(0 0 1px 0);
                
            }
            .saleIn{
                padding-left: .1rem;
                .saleList{
                    padding: .14rem .1rem .12rem .4rem;
                    @include border(0 0 1px 0);
                }
            }
            .label{
                position: absolute;
                top: .15rem;
                left: 0;
                padding: .01rem .04rem;
                background: #11b57c;
                border-radius: 3px;
                font-size: 13px;
                color: #fff;
                font-style: normal;
            }
            .title{
                font-size: 12px;
                color: #333;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .goBack{
                position: absolute;
                right: .14rem;
                top: .15rem;
                display: inline-block;
                width: .08rem;
                height: .16rem;
                background: url(http://img05.yiguoimg.com/d/web/170830/00911/152542/arrow.png) no-repeat;
                background-size: 100% 100%;     
            }
            .list{
                padding: .05rem 0 0 0;
                p{
                    font-size: 12px;
                    color: #333;
                }
            }
        }
    }
    .norms{
        background: #fff;
        margin-bottom: .1rem;
        .title{
            color: #808080;
            font-size: 13px;
            line-height: .4rem;
            padding: .06rem .1rem;
            @include border(0 0 1px 0);
            .choose {
                color: #808080;
                font-size:14px;
                padding: .05rem .05rem;
                box-sizing: border-box;
                border: 1px solid #808080;
                border-radius: 3px;
                margin: 0 .05rem;
            }
            .choose.active {
                color: #11b57c;
                border: 1px solid #11b57c;
            }
        }
    }
    .address{
        background: #fff;
        padding: .15rem .1rem;
        margin-bottom: .1rem;
        @include flexbox();
        .title{
            color: #808080;
            font-size: 13px;
            line-height: 16px;
            padding: .06rem .1rem .06rem 0;
        }
        .add{
            position: relative;
            padding-left: .2rem;
            font-size: .14px;
            color: #333;
            line-height: .16rem;
            @include flex(1);
            width: 100%;
            span{
                position: absolute;
                top: .03rem;
                left: 0;
                display: inline-block;
                width: .13rem;
                height: .12rem;
                background: url(http://img05.yiguoimg.com/d/web/170830/00916/154520/dw.png) no-repeat;
                background-size: 100% 100%;
            }
        }
        .infor{
            line-height: .26rem;
            color: #808080;
            font-size: 12px;
            span{
                color: #11b57c;
                padding-right: .02rem;
            }
        }
    }
    .evaluate {
    background: #fff;
    margin-bottom: .1rem;
        .title {
            @include flexbox();
            @include justify-content(space-between);
            position: relative;
            padding: .1rem .14rem;
            font-size: 13px;
            color: #808080;
            overflow: hidden;
            @include border(0 0 1px 0);
        }
        .number{
            color: #ff6353;
            font-style: normal;
        }
        .content {
            position: relative;
            padding: 0 .1rem .1rem;
            font-size: 12px;
            .txt {
                @include flexbox();       
                @include justify-content(space-between);                         
                padding: .1rem 0 .1rem;
            }
            .star {
                height: 18px;
                background: url(http://img06.yiguoimg.com/d/web/170830/00911/152542/stars.png) no-repeat;
                background-size: auto 35px;
            }
        }
    }
    .detaillist{
        padding: .2rem 0 .2rem;
        a{
            display: block;
            width: 1.2rem;
            padding: .05rem .09rem;
            border: 1px solid #808080;
            color: #808080;
            font-size: 14px;
            margin: 0 auto;
            border-radius: 3px;
            text-align: center;
        }
    }
   .defooter{
       position: relative;
        height: .42rem;
        width: 100%;
        background: #fff;
        padding-left: .1rem;
        padding-right: 0;
        @include flexbox();
        .btn1{
            position: relative;            
            width: 20%;
            height: .42rem;
            text-align: center;
            font-size: 10px;
            color: #8d8a8a;
            padding-top: .26rem;
            i{
                position: absolute;
                top: .09rem;
                left: 50%;
                margin-left: -.1rem;
                display: inline-block;
                width: .18rem;
                height: .16rem;
                background: url(http://img05.yiguoimg.com/d/web/170830/00913/153914/home.png) no-repeat;
                background-size: 100% 100%;
            }
        }
        .btn2{
           background: #ff6353;
           color: #fff;
           width: 30%;
            font-size: 15px;
            color: #fff;
            text-align: center;
            height: .42rem;
            line-height: .42rem;
            box-sizing: border-box;
        }
        .btn3{
            text-align: left;
            @include flex(1);

            .cart{
                background: url(http://img05.yiguoimg.com/d/web/170830/00911/152542/nav_list.png) no-repeat;
                background-size: 100% 100%;           
                margin-left: -.75rem;  
            }
            .num{
                position: absolute;
                top: .05rem;
                right: .3rem;
                margin-left: -.62rem;                  
                display: inline-block;
                padding: .05rem .06rem;
                background: #ff6353;
                font-style: normal;
                color: #fff;
                border-radius: 10px;
                line-height: .1rem;
            }
        }
   }
}
.stars-bg{  
    height: 18px;
    width: 100%;
    .star{
        display: block;
        height: 18px;
        width: 18px;
        background: url(http://img06.yiguoimg.com/d/web/170830/00911/152542/stars.png) no-repeat;
        background-size: auto 35px;
    }
}
.de_banner{
    height:3.21rem;
    width: 3.21rem;
    img{
        height: 100%;
        width: 100%;
    }
}

.iconBack{
    position: absolute;
    top: .15rem;
    left: .15rem;
    display: inline-block;
    width: .3rem;
    height: .3rem;
    background: url(http://img05.yiguoimg.com/d/web/170830/00915/154221/icon-back.png) no-repeat;
    background-size: 100% 100%;
    z-index: 100;
}
        .counter {
            @include flexbox();
            position: absolute;
            width: .7rem;
            top:.14rem;
            left:.5rem;
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
</style>
=======
<template>
<div class="detail">
    <div class="content">
        <div class="de_banner">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="img in imgs" :key="img.id">
            <img :src="img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        </div>
        <div class="productInfor">
            <p class="title">广西桂林金桔1kg</p>
            <p class="subhead"><i class="label">满99减20</i>金色小“榨”弹，一口爽爆味蕾</p>
            <div class="price">
                <p class="priceIn">
                    <span class="priceRed"><i>¥</i>19</span>
                </p>
                <p class="area">产地：<span class="name">广西桂林</span></p>
            </div>
            <div class="sevenDay">
                <i class="dian"></i>不支持7天无理由退货
            </div>
        </div>
        <div class="sale">
            <h3>促销</h3>
            <div class="saleIn">
                <div class="saleList saleListTwo">
                    <i class="label">满减</i>
                    <p class="title">春味好搭档</p>
                    <i class="goBack"></i>
                    <div class="list clear">
                        <p class="txt">满99减20</p>
                        
                        
                    </div>
                </div>
                
            </div>
        </div>
        <div class="norms">
            <div class="title line-bottom">
                规格
                <span class="choose active">1kg/份</span><span class="choose">500g/份</span>
            </div>
            <div class="title line-bottom">
                数量
                <div class="num">
                    <span class="cut line-all active"><i></i></span>
                    <span class="input line-bottom">1</span>
                    <span class="add line-all"><i></i></span>
                </div>
                <span class="hint" style="display: none;">限购20件</span>
            </div>
        </div>
        <div class="address clear">
            <p class="title">送至</p>
            <div class="addressDetail">
                <p class="add"><span></span>北京 朝阳区 朝阳区</p>
                <p class="infor"><span>有货</span>24:00 前完成订单，预计明日(3月23日)送达</p>
            </div>
        </div>
        <div class="evaluate">
            <p class="title line-bottom">
                <span class="count">评价（3538）</span>
                <span class="number"><i class="num">100%</i>好评 <i class="back"></i></span>
            </p>
            <div class="content line-bottom">
                <div class="txt clear"><div class="stars-bg"><span class="star" style="width: 100%;"></span></div><span class="name">ku***</span></div>
                <p class="text">对商品非常满意哦</p>
            </div>
        </div>
        <div class="detaillist">
            <a href="javascript:;">查看图文详情 &gt;</a>
        </div>
    </div>
    <div class="defooter"></div>
    </div>
</template>

<script>
    import axios from 'axios';
    import BannerComp from '../home/BannerComp';
    export default {
        components: {
            BannerComp,
        },
        data() {
            return {
                imgs: []
            }
        },
        mounted() {
            axios({
                method: 'get',
                url: '/api/detail',
            }).then((result) => {
                const arr = result.data.RspData.data.Pictures;
                this.imgs.push(...arr);
            });
        }
    }
</script>

<style lang="scss">
@import "../../styles/yo/usage/core/reset";

.detail{
    height: 100%;
    @include flexbox();
    @include  flex-direction(column);
    width: 100%;
   .content{
       @include flex(1);
       width: 100%;
       overflow-y: scroll;
       .productInfor{
            padding: .13rem 0 0 .1rem;
            background: #fff;
            margin-bottom: .12rem;
        }
        .title{
            line-height:  14px;
            font-size: 14px;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .subhead{
            padding-right: .32rem;
            font-size: 12px;
            color: #808080;
            padding-top: .14rem;
            line-height:12px;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-bottom: .12rem;
            .label{
                padding: .03rem .07rem;
                border: 1px solid #1fa44b;
                border-radius: 20px;
                color: #1fa44b;
                margin-right: .08rem;
                font-style: normal;
            }
        }
        .price{
            @include flexbox();
            @include border(0 0 1px 0);
            @include justify-content(space-between);
            padding-bottom: .04rem;
            padding-right: .12rem;
            .priceRed{
                font-size: 20px;
                color: #ff6353;
            }
            .area{
                font-size: 10px;
                color: #808080;
            }
            .name{
                color:#333;
            }
        }
        .sevenDay{
            line-height: .38rem;
            color: #808080;
            font-size:12px;
            .dian{
                display: inline-block;
                width: .04rem;
                height: .04rem;
                background: #11b57c;
                border-radius: 50%;
                margin-right: .06rem;
            }
        }
        .sale {
            background: #fff;
            margin-bottom: .12rem;
            h3{
                padding: .1rem .1rem;
                box-sizing: border-box;
                font-size: 14px;
               color: #808080;  
            @include border(0 0 1px 0);
                
            }
            .saleIn{
                padding-left: .1rem;
                .saleList{
                    padding: .14rem .1rem .12rem .4rem;
                    @include border(0 0 1px 0);
                }
            }
            .label{
                position: absolute;
                top: .15rem;
                left: 0;
                padding: .01rem .04rem;
                background: #11b57c;
                border-radius: 3px;
                font-size: 13px;
                color: #fff;
                font-style: normal;
            }
            .title{
                font-size: 12px;
                color: #333;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .goBack{
                position: absolute;
                right: .14rem;
                top: .15rem;
                display: inline-block;
                width: .08rem;
                height: .16rem;
                background: url(http://img05.yiguoimg.com/d/web/170830/00911/152542/arrow.png) no-repeat;
                background-size: 100% 100%;     
            }
            .list{
                padding: .05rem 0 0 0;
                p{
                    font-size: 12px;
                    color: #333;
                }
            }
        }
    }
    .norms{
        background: #fff;
        margin-bottom: .3rem;
        .title{
            color: #808080;
            font-size: .42rem;
            line-height: 1.2rem;
            padding: .35rem .32rem;
            .choose {
                color: #808080;
                font-size: .42rem;
                padding: .2rem .2rem;
                box-sizing: border-box;
                border: 1px solid #808080;
                border-radius: 3px;
                margin: 0 .05rem;
            }
            .choose.active {
                color: #11b57c;
                font-size: .42rem;
                padding: .2rem .33rem;
                box-sizing: border-box;
                border: 1px solid #11b57c;
            }
        }
    }
    .address{
        background: #fff;
        padding: .45rem .32rem;
        margin-bottom: .3rem;
        .title{
            color: #808080;
            font-size: .42rem;
            padding-right: .3rem;
        }
    }
    












   .defooter{
       height: .4rem;
       width: 100%;

   }
}


.de_banner{
    height:3.21rem;
    width: 3.21rem;
    img{
        height: 100%;
        width: 100%;
    }
}
</style>
>>>>>>> sj-201803015-homepage
