<template lang="html">
  <div class="">
    <div class="prolist2 pb pt" v-for="(v, i) in res">
      <div class="blockwrap">
        <div class="tt">
          <h3>{{v.componentBase.customComponentName}}</h3>
        </div>
        <ul>
          <li v-for="(v, i) in v.componentCommoditys">
            <div class="proitem" :data-cid="v.commodityId">
              <div class="pic">
                <div class="tag">
                  <img :src="v.cornerPictureUrl" alt="">
                </div>
                <a href="javascript:;">
                  <img :src="v.pictureUrl" alt="">
                </a>
              </div>
              <div class="info">
                <p class="name">
                  <a href="javascript:;">{{v.commodityName}}</a>
                </p>
                <div class="saletip">
                  <span  v-if="v.saleSlogan">{{v.saleSlogan}}</span>
                </div>
                <div class="price">
                  <strong>￥{{v.commodityPrice}}</strong>
                  {{v.commoditySpec}}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['res'],
  mounted() {
    console.log(this.res);
  }
}
</script>

<style lang="scss">
@import "../../styles/yo/usage/core/reset";
body{
  overflow-y: scroll;
}
.prolist2{
  .blockwrap{
    @include flexbox();
    @include flex-direction(column);
    padding: 0 .06rem .05rem;
    box-sizing: border-box;
    background: #fff;

  }
  .tt {
    height: .47rem;
    line-height: .47rem;
    text-align: center;
    h3 {
      display: inline-block;
      position: relative;
      font-size: .14rem;
      padding: 0 .04rem;
    }
  }
  ul{
    @include flex(1);
    width: 100%;
    li{
      width: 50%;
      float: left;
      height: 1.88rem;
    }
    .proitem .name, .proitem .sub, .proitem .price {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .proitem {
      width: 80%;
      height: 1.8rem;
      margin: .08rem auto 0;
      text-align: center;
      .pic {
        position: relative;
        width: 100%;
        .tag {
          position: absolute;
          top: .047rem;
          left: .047rem;
          width: .26rem;
          height: auto;
          img{
            width: 100%;
          }
        }
        a{
          display: inline-block;
          width: 100%;
          img{
            width: 100%;
          }
        }
      }
      .info{
        position: relative;
        font-size: 11px;
        .name a{
          color: #000;
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
        .price{
          margin-top: .05rem;
          color: #8d8a8a;
          strong {
           font-weight: bold;
           color: #fb3d3d;
           margin-right: .02rem;

          }
        }
      }
    }
  }
}
</style>
