<template>
  <div class="listContent">
      <a href="" v-for ="v in result" :key="v.CategoryCode" :id="v.CategoryCode">
        <img :src="v.PictureUrl" alt="">
        {{v.CategoryName}}
      </a> 
  </div>
</template>

<script>
export default {
  props: ['result']
}
</script>


<style lang="scss" scoped>
  @import "../../styles/yo/usage/core/reset";
  .listContent{
    width: 100%;
    height: 100%;
    padding: .15rem .18rem .5rem;
    overflow-y: scroll;
    a{
      float: left;
      box-sizing: border-box;
      width: .70rem;
      height: .82rem;
      text-align: center;
      color: #808080;
      font-size: .10rem;
      padding: 0 .11rem;
      img{
        width: .57rem;
        height: .57rem;
      }
    }
  }
</style>
