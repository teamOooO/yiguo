<template>
    <div class="check" v-on:click="changeSelect">
        <i v-if="isselected" class="active"></i>
        <i v-else></i>
    </div>
</template>

<script>
    export default {
        props: ['isselected', 'dataId'],
        methods: {
            changeSelect() {
                this.$store.commit('changeSelectStatus', {
                    id: this.dataId,
                    status: this.isselected
                })
            }
        }
    }
</script>


<style lang="scss">
    .check {
        width: .35rem;
        height: .05rem;
        padding: .11rem 0 .1rem .1rem;
        font-size: 12px;
        margin-top: .13rem;
        i {
            display: inline-block;
            width: .16rem;
            height: .16rem;
            margin: .02rem .06rem 0 0;
            background: url("../../assets/images/check1.png") no-repeat;
            background-size: 100%;
            vertical-align: -4px;
        }
        i.active {
            background-image: url("../../assets/images/check2.png")
        }
    }
</style>
