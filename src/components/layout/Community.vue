<template>
  <div>
    <category-banner></category-banner>
    <router-view></router-view>
  </div>
</template>
<script>
import CategoryBanner from '@/components/community/CategoryBanner';

import axios from 'axios';
export default {
  data: () => {
    return {
      communityContent: []
    }
  },
  components: {
    CategoryBanner
  }

}
</script>
<style lang="scss">


</style>
