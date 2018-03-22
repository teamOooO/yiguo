<template>
    <div class="signout">
        <div class="blockbox">
            <a href="tel:4000007788">客服热线<span class="fright green">400-000-7788</span><i class="arrow">&gt;</i></a>
        </div>
        <div class="blockbox">
            <a href="">修改登录密码<i class="arrow">&gt;</i></a>
            <a href="" id="btnSetPayPwd">设置支付密码<i class="arrow">&gt;</i></a>
            <a href="">更换手机号码<span class="fright" id="userMobile"></span><i class="arrow">&gt;</i></a>
        </div>
        <div class="blockbox">
            <a href="">关于我们<i class="arrow">&gt;</i></a>
            <a href="">配送说明<i class="arrow">&gt;</i></a>
            <a href="">退换货说明<i class="arrow">&gt;</i></a>
        </div>
        <div class="btn-logout">
            <button @click="signout" >退出登录</button>
        </div>
    </div>
</template>

<script>
    import WebStorageCache from'web-storage-cache';
    const wsCache = new WebStorageCache();
    export default {
        methods: {
            signout(){
                this.$store.commit('setIssignin',false)
                this.$store.commit('setUserName','')
                wsCache.delete('token')
                this.$router.push('/mine')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/yo/usage/core/reset";
    .signout{
        .blockbox{
            @include border(1px 0 0 0,#ccc);
            margin-bottom: .15rem;
            a{
                position: relative;
                display: block;
                color: #333;
                padding: .1rem .34rem .1rem .14rem;
                background: #fff;
                @include border(0 0 1px 0,#ccc);
                font-size: .13rem;
                font-weight: 100;
                i{
                    overflow: hidden;
                    position: absolute;
                    right: .14rem;
                    top: 50%;
                    width: .1rem;
                    height: .18rem;
                    margin-top: -.09rem;
                    text-indent: -999px;
                }
            }
        }
        .blockbox:first-child{
            @include border(0);
        }
        .btn-logout{
            position: absolute;
            bottom: .6rem;
            left: 0;
            right: 0;
            button {
                border: 0;
                display: block;
                width: 1.2rem;
                height: .32rem;
                line-height: .32rem;
                margin: 0 auto;
                text-align: center;
                @include border(1px 1px 1px 1px,#008842,solid,5px);
                color: #008842;
                background: #fff;
            }
        }
    }
</style>