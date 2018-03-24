<template>
    <div v-if="$store.getters.Amount.proSum>0" class="sale-top line-bottom elli">
        <a href="javascript:;">去凑单<i></i></a>
        <span class="tag">满减</span>您还差
        <span class="red">{{$store.getters.Amount.proSum}}</span> 元，即享20元优惠
    </div>
    <div v-else class="sale-top line-bottom elli">
        <a href="javascript:;"><i></i></a>
        <span class="tag" style="">满减</span>已满足 [满100元减20元活动，节省20元]
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    @import '../../styles/yo/usage/core/reset.scss';
    .sale-top {
        margin-top: .08rem;
        position: relative;
        height: .4rem;
        padding: 0 .93rem 0 .09rem;
        background: #f9fef8;
        line-height: .4rem;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        @include border(0 0 1px 0);
        a {
            position: absolute;
            right: 0;
            top: 0;
            color: #333;
            i {
                display: inline-block;
                width: .06rem;
                height: .12rem;
                margin: 0 .18rem 0 .06rem;
                background: url('../../assets/images/arrow1.png') no-repeat;
                background-size: 100%;
                vertical-align: -4px;
            }
        }
        .tag {
            display: inline-block;
            height: .17rem;
            margin: 0 .12rem 0 0;
            padding: 0 .02rem;
            border-radius: 2px;
            background: #11b57c;
            line-height: .19rem;
            color: #fff;
        }
    }
    .red {
        color: #ff6353;
    }
</style>


