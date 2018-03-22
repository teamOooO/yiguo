<template>
    <div class="failure-groups">
        <div class="title">失败商品</div>
        <failure-item :detail="detail"></failure-item>
        <div class="clear-btn">
            <a href="javascript:;">清除失效商品</a>
        </div>
    </div>
</template>
<script>
    import FailureItem from './FailureItem'
    export default {
        props: ['detail'],
        components: {
            FailureItem
        }
    }
</script>


<style lang="scss">
    @import '../../styles/yo/usage/core/reset.scss';
    .failure-groups {
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
