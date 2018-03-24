<<<<<<< HEAD
<template>
  <div class="classify">
    <search></search>
    <side-nav  :page='page'></side-nav>
  </div>
</template>

<script>
  import Search from '../classify/Search';
  import SideNav from '../classify/SideNav';
  export default {
    props:['page'],
    components: {
      Search,
      SideNav,
    }
  }
</script>
<style lang="scss">
  @import "../../styles/yo/usage/core/reset";
  .classify{
    @include flexbox();
    @include flex-direction(column);
    @include flex();
    width: 100%;
    height: 100%;
  }
</style>
=======
<template>
  <div class="classify">
    <search></search>
    <side-nav  :page='page'></side-nav>
  </div>
</template>

<script>
  import Search from '../classify/Search';
  import SideNav from '../classify/SideNav';
  export default {
    props:['page'],
    components: {
      Search,
      SideNav,
    }
  }
</script>
<style lang="scss">
  @import "../../styles/yo/usage/core/reset";
  .classify{
    width: 100%;
    height: 100%;
    @include flexbox();
    @include flex-direction(column)
  }
</style>
>>>>>>> sj-201803015-homepage
