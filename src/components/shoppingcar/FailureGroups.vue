<<<<<<< HEAD
<template>
    <div v-show="$store.state.FailureGroups.length > 0" class="failure-groups">
        <div class="title">失败商品</div>
        <failure-item v-for="v in $store.state.FailureGroups" :key="v.CommodityId" :detail="v"></failure-item>
        <div class="clear-btn" @click="clearAll">
            <a href="javascript:;">清除失效商品</a>
        </div>
    </div>
</template>
<script>
    import FailureItem from './FailureItem'
    export default {
        props: ['detail', 'index'],
        components: {
            FailureItem
        },
        methods: {
            clearAll() {
                this.$store.commit('clearAll');
                this.$store.commit('cartIsEmpty');
            }
        }
    }
</script>


<style lang="scss">
    @import '../../styles/yo/usage/core/reset.scss';
    .failure-groups {
        margin:.08rem 0;
        .clear-btn {
            background: #fff;
            position: relative;
            height: .4rem;
            padding: .05rem 0 0;
            text-align: center;
            a {
                position: relative;
                display: inline-block;
                width: .94rem;
                height: .27rem;
                line-height: .27rem;
                font-size: 12px;
                color: #808080;
                border: 2px solid #ddd;
                border-radius: 7px;
                font-size: 12px;
            }
        }
        .title {
            height: .35rem;
            width: 100%; // @include border(0, 0, 1px, 0);
            font-size: 12px;
            line-height: .35rem;
            padding-left: .14rem;
            background: #fff;
            border-bottom: 1px solid #eee;
        }
    }
</style>
=======
<template>
    <div v-show="$store.state.FailureGroups.length > 0" class="failure-groups">
        <div class="title">失败商品</div>
        <failure-item v-for="v in $store.state.FailureGroups" :key="v.CommodityId" :detail="v"></failure-item>
        <div class="clear-btn" @click="clearAll">
            <a href="javascript:;">清除失效商品</a>
        </div>
    </div>
</template>
<script>
    import FailureItem from './FailureItem'
    export default {
        props: ['detail', 'index'],
        components: {
            FailureItem
        },
        methods: {
            clearAll() {
                this.$store.commit('clearAll');
                this.$store.commit('cartIsEmpty');
            }
        }
    }
</script>


<style lang="scss">
    @import '../../styles/yo/usage/core/reset.scss';
    .failure-groups {
        margin:.08rem 0;
        .clear-btn {
            background: #fff;
            position: relative;
            height: .4rem;
            padding: .05rem 0 0;
            text-align: center;
            a {
                position: relative;
                display: inline-block;
                width: .94rem;
                height: .27rem;
                line-height: .27rem;
                font-size: 12px;
                color: #808080;
                border: 2px solid #ddd;
                border-radius: 7px;
                font-size: 12px;
            }
        }
        .title {
            height: .35rem;
            width: 100%; // @include border(0, 0, 1px, 0);
            font-size: 12px;
            line-height: .35rem;
            padding-left: .14rem;
            background: #fff;
            border-bottom: 1px solid #eee;
        }
    }
</style>
>>>>>>> sj-201803015-homepage
