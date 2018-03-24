<template>
    <div class="subnav">
        <ul class="first-screen-menu">
            <router-link to="/product" tag="li" v-for="v in subnav.componentNavs" :key="v.data_id" >
                <a href="javascript:;"> <i><img :src="v.pictureUrl"></i>
                    <p>{{v.navName}}</p>
                </a>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['subnav']
    }
</script>

<style lang="scss">
    @import '../../styles/yo/usage/core/reset.scss';
    .first-screen-menu {
        padding: .1rem .07rem .02rem .07rem;
        background: #fff;
        background-size: 100% 100%;
        font-size: 11px;
        @include flexbox();
        @include flex-wrap(wrap);
        li {
            width: 25%;
            padding: 0 0 .14rem;
            font-size: 12px;
            color: #333;
            text-align: center;
            p {
                color: rgb(51, 51, 51);
            }
            i {
                display: inline-block;
                width: 0.48rem;
                height: 0.48rem;
                img {
                    height: 100%;
                    width: 100%
                }
            }
        }
    }
</style>
