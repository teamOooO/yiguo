<template>
<<<<<<< HEAD
  <div class="classify">
    <search></search>
    <side-nav  :page='page'></side-nav>
=======
  <div>
    <search></search>
    <side-nav :navindex="navindex"></side-nav>
>>>>>>> dcaa87275d3e4a85bee8096164dbe66e51031d3f
  </div>
</template>

<script>
  import Search from '../classify/Search';
  import SideNav from '../classify/SideNav';
  export default {
<<<<<<< HEAD
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
=======
    props: ['navindex'],
    components: {
      Search,
      SideNav
    },
        beforeRouteUpdate(to, from, next) {
            console.log(to,from);
            next();
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
        },
  }
</script>
>>>>>>> dcaa87275d3e4a85bee8096164dbe66e51031d3f
