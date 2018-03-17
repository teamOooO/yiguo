<template>
  <div>
    <mine-top></mine-top>
    <mine-center></mine-center>
    <mine-bottom></mine-bottom>
  </div>
</template>

<script>
import MineTop from "@/components/mine/MineTop";
import MineCenter from "@/components/mine/MineCenter";
import MineBottom from "@/components/mine/MineBottom";
export default {
  components: {
    MineTop,
    MineCenter,
    MineBottom
  }
};
</script>
