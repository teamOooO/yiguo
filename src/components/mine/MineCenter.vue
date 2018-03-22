<template>
    <div class="mineCenter">
        <ul>
            <li>
                <a href="">
                    <i class="icon_1"></i>
                    待支付
                </a>
            </li>
            <li>
                <a href="">
                    <i class="icon_2"></i>
                    待收货
                </a>
            </li>
            <li>
                <a href="" class="green">
                    <i class="icon_3"></i>
                    评价送悠币
                </a>
            </li>
            <li>
                <a href="">
                    <i class="icon_4"></i>
                    在线退换货
                </a>
                <i class="icon_6"></i>
            </li>
            <li>
                <a href="">
                    <i class="icon_5"></i>
                    全部订单<span class="right"></span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
    @import "../../styles/yo/usage/core/reset";
    .mineCenter{
        margin-bottom: .09rem;
        background: #fff;
        height: .7rem;
        ul{
            @include flexbox();
            width: 100%;
            height: 100%;
            li{
                @include flex();
                text-align: center;
                position: relative;
                a{
                    color: #333;
                    font-size: .1rem;
                    display: inline-block;
                    box-sizing: border-box;
                    height: 100%;
                    width: 100%;
                    padding-top: .44rem;
                    position: relative;
                    i{
                        display: inline-block;
                        width: .18rem;
                        position: absolute;
                        top: .2rem;
                        left: 50%;
                        margin-left: -.1rem;
                        background-size: 100% 100%;
                    }
                    .icon_1{
                        background: url(../../assets/images/unpaid.png) no-repeat 0 0;
                        background-size: 100% 100%;
                        height: .14rem;
                    }
                    .icon_2{
                        background: url(../../assets/images/take.png) no-repeat 0 0;
                        background-size: 100% 100%;
                        height: .16rem;
                    }
                    .icon_3{
                        background: url(../../assets/images/evaluate.png) no-repeat 0 0;
                        background-size: 100% 100%;
                        height: .16rem;
                    }
                    .icon_4{
                        background: url(../../assets/images/changing.png) no-repeat 0 0;
                        background-size: 100% 100%;
                        height: .18rem;
                    }
                    .icon_5{
                        background: url(../../assets/images/allOrder.png) no-repeat 0 0;
                        background-size: 100% 100%;
                        width: .16rem;
                        height: .18rem;
                    }
                    .right{
                        background: url(../../assets/images/goPage2.png) no-repeat 0 0;
                        background-size: 100% 100%;
                        display: inline-block;
                        width: .04rem;
                        height: .07rem;
                        margin-left: .02rem;
                    }
                }
                .icon_6{
                    display: inline-block;
                    background: url(../../assets/images/xian.png) no-repeat 0 0;
                    background-size: 100% 100%;
                    width: .04rem;
                    height: 100%;
                    position: absolute;
                    right: -.05rem;
                    top: 0;
                }
            }
        }
        .green{
            color: #008842;
        }
    }
</style>


