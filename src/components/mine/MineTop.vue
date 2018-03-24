<<<<<<< HEAD
<template>
    <div>
        <div class="mine">
            <div class="header">
                <router-link :to="{name:'signin'}">
                    <img src="../../assets/images/no-pic.jpg" alt="">
                    <i v-if="!$store.state.issignin">登录/注册</i>
                    <i v-else>{{$store.state.userName}}</i>
                </router-link>
                <p v-show="$store.state.issignin" class="signIn"><a>
                    <i class="gift"></i>签到送好礼<i class="goBack"></i></a>
                </p>
                <router-link class="setting" to="/signout"></router-link>
            </div>
        </div>
        <div class="account">
            <p>
                <a href="">
                    <span v-if="!$store.state.issignin" class="num">-</span>
                    <span v-if="$store.state.issignin" class="num">0.00</span>
                    <span class="txt" >账户余额</span>
                </a>
            </p>
            <p>
                <a href="">
                    <span v-if="!$store.state.issignin" class="num">-</span>
                    <span v-if="$store.state.issignin" class="num">2</span>
                    <span class="txt" >优惠券</span>
                </a>
            </p>
            <p>
                <a href="">
                    <span v-if="!$store.state.issignin" class="num">-</span>
                    <span v-if="$store.state.issignin" class="num">120</span>
                    <span class="txt" >悠币</span>
                </a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
  @import "../../styles/yo/usage/core/reset";
    .mine{
        box-sizing: border-box;
        width: 3.2rem;
        height: 1.1rem;
        background: url(../../assets/images/homeBg.jpg) 100% 100%;
        background-size: 100% 100%;
        padding: 0 .1rem 0 .13rem;
        position: relative;
        .header{
            box-sizing: border-box;
            padding-top: .24rem;
            height: .95rem;
            width: 100%;
            a{
                // width: 100%;
                img{
                    width: .58rem;
                    height: .58rem;
                    border: .03rem solid rgba(255,255,255,.5);
                    @include border-radius(50%)
                }
                i{
                    display: inline-block;
                    color: #fff;
                    font-size: .15rem;
                    // width: 10rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    line-height: .15rem;
                    padding: 0 0 0 .15rem;
                    vertical-align: middle;
                }
            }
            .setting{
                position: absolute;
                top: 0.1rem;
                right: .15rem;
                display: inline-block;
                width: .16rem;
                height: .18rem;
                background: url(../../assets/images/setting.png) no-repeat 100% 100%;
                background-size: 100% 100%;
            }
            .signIn{
                position: absolute;
                right: 0;
                bottom: .45rem;
                height: .24rem;
                background: #c5f9e5;
                @include border-radius(3px 0 0 3px);
                color: #12b67c;
                font-size: .12rem;
                a{
                    position: relative;
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                    line-height: 100%;
                    color: #12b67c;
                    padding: .07rem 0.11rem .07rem .2rem;
                    .gift{
                        position: absolute;
                        left: 0.04rem;
                        top: 50%;
                        margin-top: -.12rem;
                        display: inline-block;
                        width: .12rem;
                        height: .25rem;
                        background: url(../../assets/images/gift.png) center no-repeat;
                        background-size: .12rem .15rem;
                    }
                    .goBack{
                        position: absolute;
                        top: 0;
                        right: .01rem;
                        display: inline-block;
                        width: .03rem;
                        height: .25rem;
                        background: url(../../assets/images/goPage3.png) center no-repeat;
                        background-size: .03rem .06rem;
                    }
                }
            }
        }
    }
    .account{
        @include flexbox();
        width: 100%;
        height: .46rem;
        background: #1eb675;
        padding: .08rem .13rem .08rem .13rem;
        box-sizing: border-box;
        p{
            @include flex();
            text-align: center;
            box-sizing: border-box;
            @include border(0 1px 0 0,#fff,dashed);
      
            a{
                color: #fff;
                span{
                    display: block;
                    font-size: .11rem;
                }
                .num{
                    height: .12rem;
                    line-height: .12rem;
                }
                .txt{
                    box-sizing: content-box;
                    height: .10rem;
                    line-height: .10rem;
                    padding-top: .07rem;
                }
            }
        }
        p:last-child{
            @include border(0)
        }
    }
</style>
=======
<template>
    <div>
        <div class="mine">
            <div class="header">
                <a href="">
                    <img src="../../assets/images/no-pic.jpg" alt="">
                    <i>登录/注册</i>
                </a>
                <a class="setting" href=""></a>
            </div>
        </div>
        <div class="account">
            <p>
                <a href="">
                    <span class="num">-</span>
                    <span class="txt" >账户余额</span>
                </a>
            </p>
            <p>
                <a href="">
                    <span class="num">-</span>
                    <span class="txt" >优惠券</span>
                </a>
            </p>
            <p>
                <a href="">
                    <span class="num">-</span>
                    <span class="txt" >悠币</span>
                </a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
  @import "../../styles/yo/usage/core/reset";
    .mine{
        box-sizing: border-box;
        width: 3.2rem;
        height: 1.1rem;
        background: url(../../assets/images/homeBg.jpg) 100% 100%;
        background-size: 100% 100%;
        padding: 0 .1rem 0 .13rem;
        position: relative;
        .header{
            box-sizing: border-box;
            padding-top: .24rem;
            height: .95rem;
            width: 100%;
            a{
                // width: 100%;
                img{
                    width: .58rem;
                    height: .58rem;
                    border: .03rem solid rgba(255,255,255,.5);
                    @include border-radius(50%)
                }
                i{
                    display: inline-block;
                    color: #fff;
                    font-size: .15rem;
                    // width: 10rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    line-height: .15rem;
                    padding: 0 0 0 .15rem;
                    vertical-align: middle;
                }
            }
            .setting{
                position: absolute;
                top: 0.1rem;
                right: .15rem;
                display: inline-block;
                width: .16rem;
                height: .18rem;
                background: url(../../assets/images/setting.png) no-repeat 100% 100%;
                background-size: 100% 100%;
            }
        }
    }
    .account{
        @include flexbox();
        width: 100%;
        height: .46rem;
        background: #1eb675;
        padding: .08rem .13rem .08rem .13rem;
        box-sizing: border-box;
        p{
            @include flex();
            text-align: center;
            box-sizing: border-box;
            @include border(0 1px 0 0,#fff,dashed);
      
            a{
                color: #fff;
                span{
                    display: block;
                    font-size: .11rem;
                }
                .num{
                    height: .12rem;
                    line-height: .12rem;
                }
                .txt{
                    box-sizing: content-box;
                    height: .10rem;
                    line-height: .10rem;
                    padding-top: .07rem;
                }
            }
        }
        p:last-child{
            @include border(0)
        }
    }
</style>
>>>>>>> sj-201803015-homepage
