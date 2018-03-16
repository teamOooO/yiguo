<template>
    <div class="first-screen">
        <header-comp></header-comp>
        <banner-comp :imgs="res"></banner-comp>
        <subnav :subnav="res"></subnav>
    </div>
</template>

<script>
    import HeaderComp from './HeaderComp';
    import BannerComp from './BannerComp';
    import Subnav from './Subnav';
    export default {
        props: ['res'],
        components: {
            HeaderComp,
            BannerComp,
            Subnav
        }
    }
</script>
