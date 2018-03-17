<template>
  <div id="app">
<<<<<<< HEAD
    <router-view/>
    <footer-comp v-show="$store.state.footerShow"></footer-comp>
=======
    <!-- <router-view/>
    <footer-comp></footer-comp> -->
    <router-view></router-view>
>>>>>>> dcaa87275d3e4a85bee8096164dbe66e51031d3f
  </div>
</template>

<script>
<<<<<<< HEAD
import FooterComp from "@/components/layout/FooterComp.vue";
=======
import FooterComp from '@/components/layout/FooterComp.vue'
>>>>>>> dcaa87275d3e4a85bee8096164dbe66e51031d3f
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
