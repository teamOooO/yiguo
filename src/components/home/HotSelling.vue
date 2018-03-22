<template lang="html">
  <div class="">
    <div class="one-image pb pt" v-for="(v, i) in hotSellingTit">
      <a href="javascript:;" class="link-img" :data-tid="v.adPictures[0].id">
        <img :src="v.adPictures[0].pictureUrl">
      </a>
    </div>
    <div class="prolist pt" v-for="(v, i) in hotSelling">
      <div class="blockwrap">
        <div class="proitem" :data-cid="v.componentCommoditys[0].commodityId">
           <div class="pic">
             <div class="tag" style="display: none;">
               <img src=""></div>
               <a href="javascript:;">
                 <img :src="v.componentCommoditys[0].pictureUrl">
               </a>
             </div>
           <div class="info">
             <p class="name"><a href="javascript:;">{{v.componentCommoditys[0].commodityName}}</a></p>
             <p class="sub">{{v.componentCommoditys[0].subTitle}}</p>
             <div class="saletip">
               <span  v-if="v.componentCommoditys[0].saleSlogan">{{v.componentCommoditys[0].saleSlogan}}</span>
             </div>
             <div class="price">
               <strong>¥{{v.componentCommoditys[0].commodityPrice}}</strong>
               {{v.componentCommoditys[0].commoditySpec}}
             </div>
           </div>
         </div>
       </div>
     </div>

  </div>
</template>

<script>
export default {
  props: ['hotSellingTit', 'hotSelling']
}
</script>

<style lang="scss">
@import "../../styles/yo/usage/core/reset";
body{
  overflow-y: scroll;
}
.one-image{
  width: 100%;
  height: 1.15rem;
  img{
    width: 100%;
  }
}
.pb {
    padding-bottom: .03rem;
}
.pt {
    padding-top: .03rem;
}
.prolist{
  .blockwrap {
    box-sizing: border-box;
    background: #fff;
  }
  .proitem .name, .proitem .sub, .proitem .price {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .proitem {
    position: relative;
    height: 1.3rem;
    padding: .08rem;
    @include flexbox();
    .pic {
      width: 1.15rem;
      height: 1.15rem;
      margin-right: .12rem;
      background: #fff;
      img{
        width: 100%;
      }
      .tag {
        position: absolute;
        top: .05rem;
        left: .05rem;
        width: .3rem;
      }
      a img {
        height: 1.1rem;
      }
    }
    .info{
      position: relative;
      height: .95rem;
      margin: .18rem 0;
      .name {
        margin: 0 0 .04rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        a {
          color: #000;
          font-size: .14rem;
        }
      }
      .sub {
        width: 1.7rem;
        font-size: .12rem;
        margin: 0 0 .05rem;
        color: #8d8a8a;
      }
      .saletip{
        height: .15rem;
        span {
          height: .15rem;
          padding: 0 .06rem;
          border-radius: .3rem;
          line-height: .15rem;
          font-size: .12rem;
          border: 1px solid #45b575;
          display: inline-block;
          color: #45b575;
        }
      }
      .price {
        position: absolute;
        left: 0;
        bottom: 0;
        strong {
          font-size: .14rem;
          font-weight: bold;
          color: #fb3d3d;
          margin-right: .02rem;
        }
      }
    }
  }
}
</style>
