<template>
    <div class="first-screen">
        <header-comp></header-comp>
        <banner-comp></banner-comp>
        <subnav></subnav>
    </div>
</template>

<script>
    import HeaderComp from './HeaderComp';
    import BannerComp from './BannerComp';
    import Subnav from './Subnav';
    export default {
        name: 'firstscreen',
        components: {
            HeaderComp,
            BannerComp,
            Subnav
        }
    }
</script>
