<template>
  <div class="banner_wrap">
    <div class="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="img in imgs" :key="img.id">
          <img :src="img.pictureUrl" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="bottom-img">
      <img :src="bottom_img">
    </div>
  </div>
</template>

<script>
  import {
    Swipe,
    SwipeItem
  } from 'mint-ui';
  import axios from 'axios';
  export default {
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem
    },
    data: () => {
      return {
        imgs: [],
        key: '',
        bottom_img: ''
      }
    },
    mounted() {
      axios({
          url: 'api/homedata',
          data: {
            start: 0,
            count: 10
          }
        })
        .then((result) => {
          const data = result.data.data.template.componentList[0];
          this.imgs = data.carouselPictures;
          this.bottom_img = data.adPictures[0].pictureUrl;
        })
    },
  }
</script>

<style lang="scss">
  .banner_wrap {
    img {
      height: 100%;
      width: 100%
    }
    .banner {
      margin-top: .4rem;
      width: 100%;
      height: 1.85rem;
      img {
        height: 100%;
        width: 100%
      }
    }
  }
</style>
