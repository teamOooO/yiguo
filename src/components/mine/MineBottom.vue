<template>
    <div class="mineBottome">
        <div>
            <a href="">
                <i class="icon_1"></i>
                收货地址
            </a>
        </div>
        <div>
            <a href="">
                <i class="icon_2"></i>
                充值卡
            </a>
        </div>
        <div>
            <a href="">
                <i class="icon_3"></i>
                礼品兑换券
            </a>
        </div>
        <div>
            <a href="">
                <i class="icon_4"></i>
                帮助中心
            </a>
        </div>
        <div class="nolinebottom">
            <a href="">
                <i class="icon_5"></i>
                客服电话
            </a>
        </div>
        <div class="nolinebottom">
            <a href="">
                <i class="icon_6"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
    @import "../../styles/yo/usage/core/reset";
    .mineBottome{
        @include flexbox();
        @include flex-wrap(wrap);
        background: #fff;
        margin-bottom: .1rem;
        div{
            @include border(0 0 1px 0);
            width: .80rem;
            height: .7rem;
            text-align: center;
            a{
                display: inline-block;
                color: #333;
                font-size: .1rem;
                box-sizing: border-box;
                height: 100%;
                width: 100%;
                padding-top: .44rem;
                position: relative;
                i{
                    display: inline-block;
                    position: absolute;
                    top: .16rem;
                    left: 50%;
                }
                .icon_1{
                    background: url(../../assets/images/address.png) no-repeat 0 0;
                    background-size: 100% 100%;
                    margin-left: -.1rem;
                    width: .18rem;
                    height: .2rem;
                }
                .icon_2{
                    background: url(../../assets/images/czk.png) no-repeat 0 0;
                    background-size: 100% 100%;
                    margin-left: -.1rem;
                    width: .2rem;
                    height: .17rem;
                }
                .icon_3{
                    background: url(../../assets/images/thq.png) no-repeat 0 0;
                    background-size: 100% 100%;
                    margin-left: -.1rem;
                    width: .2rem;
                    height: .2rem;
                }
                .icon_4{
                    background: url(../../assets/images/bzzx.png) no-repeat 0 0;
                    background-size: 100% 100%;
                    margin-left: -.1rem;
                    width: .22rem;
                    height: .22rem;
                }
                .icon_5{
                    background: url(../../assets/images/kf.png) no-repeat 0 0;
                    background-size: 100% 100%;
                    margin-left: -.1rem;
                    width: .25rem;
                    height: .24rem;
                }
                .icon_6{
                    background: url(../../assets/images/tltq.png) no-repeat 0 0;
                    background-size: 100% 100%;
                    margin-left: -.11rem;
                    width: .24rem;
                    height: .24rem;
                }
            }
        }
        .nolinebottom{
            @include border(0)
        }
    }
</style>

