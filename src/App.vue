<template>
  <div id="app">
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

</style>














