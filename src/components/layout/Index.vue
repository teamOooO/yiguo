<template>
    <div class="index">
        <router-view class="indexcon"/>
        <footer-comp v-show="$store.state.footerShow"></footer-comp>
    </div>
</template>

<script>
    import FooterComp from '@/components/layout/FooterComp.vue'
    export default {
        name: "App",
        components: {
            FooterComp
        }
    };
</script>

<style lang="scss">
    @import '../../styles/yo/usage/core/reset.scss';
    .index {
        height: 100%;
        width: 100%;
        @include flexbox();
        @include flex-direction(column);
    }
    .indexcon{
       
        @include flex(1);
        width: 100%;
        overflow-y: scroll;
    }
</style>