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
        <div>
            <a href="">
                <i class="icon_5"></i>
                客服电话
            </a>
        </div>
        <div>
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
        div{
            background: white;
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

                }
                .icon_1{
                    background: url(../../assets/images/address.png) no-repeat 0 0;
                    
                }
            }
        }
    }
</style>

