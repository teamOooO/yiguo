<template lang="html">

   <!--  -->
  <div class="group-floor pb">


    <div class="" v-for="(v, i) in res">
      <a href="javascript:;" class="floor-img">
        <img :src="v.adPictures[0].pictureUrl" alt="">
      </a>
      <div class="product-list clear">
        <div class="product-list-in">

          <div class="proitem" v-for="(v, i) in res[i].componentCommoditys">
            <div class="pic">
              <a href="javascript:;">
                <img :src="v.pictureUrl" alt="">
              </a>
            </div>
            <div class="info">
              <p class="name">
                <a href="javascript:;">
                  {{v.commodityName}}
                </a>
                <div class="saletip">
                  <span>
                    {{v.saleSlogan}}
                  </span>
                </div>
                <div class="price">
                  <strong>￥{{v.commodityPrice}}</strong>
                  {{v.commoditySpec}}
                  <!-- {{v.componentCommoditys[0].commoditySpec}} -->
                </div>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  // data: () => {
  //   return {
  //     img: []
  //   }
  // },
  props: ['res'],
  mounted() {
    // console.log(this.res);
  }
  // mounted() {
  //   axios({
  //     url: '/api/homedata',
  //   })
  //     .then((result) => {
  //       const resultData = result.data.data.template.componentList;
  //       this.img = resultData[1].adPictures[0].pictureUrl;
  //       // console.log(this.groupFloor);
  //       // console.log(this.groupFloor[1].adPictures[0].pictureUrl);
  //
  //     })
  // }
}
</script>

<style lang="scss">
@import "../../styles/yo/usage/core/reset";
body{
    overflow-y: scroll;
}
.group-floor{
  width: 100%;
  .floor-img{
    display: inline-block;
    width: 100%;
    height: 1.8rem;
    background: #D6D6D7;
    img{
      width: 100%;
    }
  }
  .product-list{
    width: 100%;
    height: 1.6rem;
    overflow: hidden;
    background: #fff;
  }
  .product-list-in{
    width: 100%;
    height: 1.7rem;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: .09rem 0 .17rem .09rem;
    box-sizing: border-box;
  }
  .proitem{
    display: inline-block;
    .info{
      position: relative;
      width: 1rem;
      padding: .06rem .06rem 0;
      box-sizing: border-box;
      text-align: center;
      .name{
        font-size: 11px;
        a{
          color: #000;
        }
      }
      .saletip {
        height: .15rem;
        padding: .06rem 0 0;
        font-size: 11px;
        span {
          display: inline-block;
          height: .13rem;
          padding: 0 .06rem;
          margin-right: .03rem;
          color: #45b575;
          border-radius: .25rem;
          border: 1px solid #45b575;
          line-height: .13rem;
        }
      }
      .price{
        font-size: 11px;
        margin-top: .06rem;
        strong{
          font-size: 12px;
          font-weight: bold;
          color: #fb3d3d;
          margin-right: .03rem;
        }
      }
    }
    .proitem, .sub, .price{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .pic{
    position: relative;
    a img{
      width: .9rem;
      height: .9rem;
    }
  }

}
.pb{
  padding-bottom: .12rem;
}

</style>
