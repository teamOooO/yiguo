<template>
    <div class="nofooter">
        <router-view/>
        <footer-comp></footer-comp>
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
    @import "../../styles/yo/usage/core/reset";
    .nofooter{
        @include flexbox();
        @include flex-direction(column);
        height: 100%;
    }
</style>