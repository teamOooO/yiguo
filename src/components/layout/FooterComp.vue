<template>
    <div class="footer">
        <div class="footer-in">
            <router-link active-class="active" :to="{name:'home'}" exact><i class="icon icon1"></i>首页</router-link>
<<<<<<< HEAD
            <router-link active-class="active" to="/classify"><i class="icon icon2"></i>分类</router-link>
=======
            <router-link active-class="active" :to="{name:'classify',params:{navindex:0}}"><i class="icon icon2"></i>分类</router-link>
>>>>>>> dcaa87275d3e4a85bee8096164dbe66e51031d3f
            <router-link active-class="active" :to="{name:'community'}"><i class="icon icon3"></i>吃饭吧</router-link>
            <router-link active-class="active" :to="{name:'shoppingcar'}"><i class="icon icon4"></i>购物车</router-link>
            <router-link active-class="active" :to="{name:'mine'}"><i class="icon icon5"></i>我的易果</router-link>
        </div>
    </div>
</template>

<style lang="scss">
    $font-color:#11b57c;
    .footer {
        z-index: 99;
        height: .51rem;
        width: 100%;
        background: #FFF;
        padding: 0 .1rem;
        .footer-in {
            width: 100%;
            height: .51rem;
            a {
                display: inline-block;
                position: relative;
                width: 18%;
                height: 100%;
                font-size: 12px;
                text-align: center;
                color: #8d8a8a;
                padding-top: .37rem;
            }
            a.active {
                color: $font-color;
                i.icon1 {
                    background-image: url("../../assets/images/nav_home_selected_active.png");
                }
                i.icon2 {
                    background-image: url("../../assets/images/nav_classify_active.png");
                }
                i.icon4 {
                    background-image: url("../../assets/images/nav_list_active.png");
                }
                i.icon5 {
                    background-image: url("../../assets/images/nav_user_active.png");
                }
            }
            .icon {
                display: inline-block;
                vertical-align: middle;
                background-size: 100% 100%;
                display: inline-block;
                position: absolute;
                top: .09rem;
                left: 50%;
                margin-left: -0.16rem;
                width: .32rem;
                height: .24rem;
            }
            .icon1 {
                background-image: url("../../assets/images/nav_home_selected.png");
            }
            .icon2 {
                background-image: url("../../assets/images/nav_classify.png");
            }
            .icon3 {
                background-image: url("../../assets/images/nav_eat.png");
            }
            .icon4 {
                background-image: url("../../assets/images/nav_list.png");
            }
            .icon5 {
                background-image: url("../../assets/images/nav_user.png");
            }
        }
    }
</style>
