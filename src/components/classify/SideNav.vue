<template>
    <div class="classifyContent">
        <div class="goodsNav">
            <ul>
                <router-link active-class="active" v-for="(v,i) in list" :key="i" tag="li" :to='`/classify/${i}`'>{{v}}</router-link>
            </ul>
        </div>
        <div class="goodContent">
            <div>slijlijlij{{navindex}}</div>
            <good-content></good-content>
        </div>
    </div>
</template>

<script>
    import GoodContent from '@/components/classify/GoodContent'
    const arr = ['国产水果', '精选肉类', '禽类蛋品', '海鲜水产', '即烹美食', '乳品糕点', '新鲜蔬菜', '方便速食', '粮油杂货', '饮料酒水', '礼品礼券']
    export default {
        props: ['navindex'],
        data: () => {
            return {
                list: arr,
            }
        },
        components: {
            GoodContent
        },
        watch: {
            'navindex': () => {
                console.log(1)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/yo/usage/core/reset";
    .active {
        color: #11b57c;
        border-left: .03rem solid #11b57c;
        background: #fff;
    }
    .classifyContent {
        @include flexbox();
        background: #fff;
        height: 100%;
        .goodsNav {
            width: .72rem;
            height: 100%;
            text-align: center;
            background: #f4f4f4;
            li {
                padding: .15rem 0;
                font-size: .12rem;
                line-height: .13rem;
                color: #333;
                box-sizing: border-box;
            }
        }
        .goodContent {
            @include flex()
        }
    }
</style>
