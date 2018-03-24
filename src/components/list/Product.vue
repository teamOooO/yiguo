<<<<<<< HEAD
<template>
  <div>列表页</div>
</template>
=======
<template>
  <div class="productList">
    <div class="navList line-bottom">
        <router-link to="/product/0" active-class="active" exact tag="div" class="list">销量</router-link>
        <router-link to="/product/1" active-class="active" exact tag="div" class="list">新品</router-link>
        <router-link to="/product/2" active-class="active" exact tag="div" class="list">价格 <i class="priceIcon"></i></router-link>
        
    </div>
  
    <div class="pruductShow">
      <div v-for="v in list" :key="v.CommodityId" class="productContent">
        <router-link :to="{name:'detail',params:{id:v.CommodityId}}" class="img" tag="div">
          <img :src="v.SmallPic">
        </router-link>
        <router-link :to="{name:'detail',params:{id:v.CommodityId}}" class="inforPro" tag="div">
            <p class="title">{{v.CommodityName}}</p>
            <p class="txt">{{v.SubTitle}}</p>
            <p class="price">
              <span class="priceRed">¥{{v.OriginalPrice}}</span>
              <span class="standard">{{v.Spec}}</span>
            </p>
        </router-link>
        <span class="addCart" @click="addToCart(v)"></span>
      </div>
    </div>
    
    <div class="option">
        <router-link class="num" :to="{name:'shoppingcar'}"><i>{{$store.getters.Amount.count}}</i></router-link>
        <a href="#" class="top" id="gotop" style="display: none;"></a>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        list: ""
      }
    },
    created () {
      axios({
        url: '/home/product/list'
        })
        .then((result) => {
            this.list = result.data.RspData.data
      })
    },
    methods: {
      addToCart(v){
        console.log(v)
        //先写入vuex中
        const opt = {
            CommodityAmount: 1,
            CommodityId:v.CommodityId,
            CommodityName: v.CommodityName,
            CommodityPrice: v.CommodityPrice,
            OriginalPrice: v.OriginalPrice,
            PromotionTag:  v.PromotionTag,
            Selected: true,
            SmallPic: v.SmallPic,
        };                
        //再发送ajax请求
        axios({
            method: 'post',
            url: '/api/users/updateCart',
            data: {
                username: this.$store.state.userName,
                id:v.CommodityId,
                number:1
            }
        }).then((result) => {
            if(result.data.ret)
              this.$store.dispatch('addToCart',{opt,id:v.CommodityId,canadd:v.CanAddToCart});
        });
      }
    }
    
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/yo/usage/core/reset";
  
  .productList{
    height: 100%;
    .navList {
      @include flexbox();
      @include border(0 0 1px 0,#ddd);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: .34rem;
      background: #fff;
      overflow: hidden;
      z-index: 100;
      box-sizing: border-box;
      .list{
        @include flex();
        text-align: center;
        height: .34rem;
        line-height: .34rem;
        color: #808080;
        font-size: .1rem;
        .priceIcon{
          display: inline-block;
          width: .05rem;
          height: .07rem;
          background: url(http://img06.yiguoimg.com/d/web/170830/00911/152542/priceone.png) no-repeat;
          background-size: 100% 100%;
          margin-left: .06rem;
        }
      }
      .active {
        @include border(0 0 2px 0,#11B57C,solid);
        box-sizing: border-box;
        color: #11B57C;
      }
    }
    .pruductShow{
      overflow-y: scroll;
      padding-top: .34rem;
      height: 100%;
      .productContent{
        @include border(0 0 1px 0,#ddd);
        @include flexbox();
        z-index: 10;
        position: relative;
        padding: .14rem .1rem;
        box-sizing: border-box;
        overflow: hidden;
        background: #fff;
        .img{
          width: 1rem;
          height: 1rem;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .inforPro{
          @include flex();
          .title{
            font-size: .12rem;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            line-height: .15rem;
          }
          .txt{
            font-size: .11rem;
            line-height: .11rem;
            color: #808080;
            padding: .1rem 0;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .price{
            position: relative;
            height: .24rem;
            padding: .1rem 0;
            z-index: 10;
            .priceRed{
              font-size: .1rem;
              color: #ff6353;
              padding-right: .12rem;
              line-height: .24rem;
              font-weight: 100;
            }
            .standard{
              font-size: .1rem;
              color: #808080;
              line-height: .24rem;
              padding-right: .06rem;
            }
           
          }
        }
      }
    }
    .option{
      position: fixed;
      bottom: .3rem;
      right: .14rem;
      z-index: 100;
      height: .8rem;
      .num{
        z-index: 100;
        position: relative;
        display: block;
        width: .3rem;
        height: .3rem;
        background: url(http://img06.yiguoimg.com/d/web/170830/00914/154105/cart1.png) no-repeat;
        background-size: 100%;
        i{
          position: absolute;
          right: -.23rem;
          top: -.1rem;
          min-width: .09rem;
          height: .14rem;
          padding: 0 .03rem;
          @include border(1px, solid, #fff,.07rem);
          background: #ff6353;
          line-height: .14rem;
          font-size: .11rem;
          font-style: normal;
          color: #fff;
          text-align: center;
        }
      }
    }
  }
.addCart{
    z-index: 100;
    position: absolute;
    right: .14rem;
    bottom: .4rem;
    width: .21rem;
    height: .21rem;
    background: url(../../assets/images/add.png) no-repeat;
    background-size: 100% 100%;
  }
</style>
>>>>>>> aa6f58341cd8394f53b06f4635ffb58d8d9380ee
