<template>
  <div class="banner_wrap">
    <div class="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="img in imgs.carouselPictures" :key="img.id">
          <img :src="img.pictureUrl" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="bottom-img">
      <img :src="pic">
    </div>
  </div>
</template>

<script>
  import {
    Swipe,
    SwipeItem
  } from 'mint-ui';
  export default {
    props: ['imgs'],
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem
    },
    data() {
      return {
        pic: ''
      }
    },
    updated() {
      this.pic = this.imgs.adPictures[0].pictureUrl
    }
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
