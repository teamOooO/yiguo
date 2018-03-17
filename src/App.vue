<template>
  <div id="app">
    <router-view/>
    <footer-comp v-show="$store.state.footerShow"></footer-comp>
  </div>
</template>

<script>
import FooterComp from "@/components/layout/FooterComp.vue";
export default {
  name: "App",
  components: {
    FooterComp
  }
};
</script>

<style lang="scss">
  #app{
    width: 100%;
    height: 100%;
  }
</style>
