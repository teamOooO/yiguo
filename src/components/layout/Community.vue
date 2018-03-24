<<<<<<< HEAD
<template>
  <div>
    <category-banner></category-banner>
    <router-view></router-view>
    <!-- <community-content :res="communityContent" /> -->
  </div>
</template>
<script>
import CategoryBanner from '@/components/community/CategoryBanner';
// import CommunityContent from '@/components/community/CommunityContent';
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
  // mounted(){
  //   axios({
  //     url: '/api/community'
  //   })
  //   .then((result) => {
  //     // console.log(result);
  //     const resultData = result.data.RspData.ArticleList.List;
  //     console.log(resultData);
  //     this.communityContent = resultData;
  //   })
  // }
}
</script>
<style lang="scss">


</style>
=======
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
>>>>>>> zhangboyu-0315-router-end
