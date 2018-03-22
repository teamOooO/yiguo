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
