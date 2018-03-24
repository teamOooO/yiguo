<template lang="html">
  <div class="">
    <div class="title open-article community-content" v-for="(v, i) in res">

        <div class="title-in">
            <div class="img-box">
                <span class="txt food">{{v.OtherCategoryName}}</span>
                <span class="num"><i class="icon icon5"></i>{{v.TotalReadNum}}</span>
                <img class="lazy" :src="v.PictureUrl" style="display: block;">
            </div>
            <p class="tit1">
                {{v.EfruitArticleTitle}}
            </p>
            <p class="tit2">{{v.EfruitArticleSummary}}</p>
            <div class="time">
                <img class="lazy  img-circle img-responsive" :src="v.AuthorPicture" style="display: block;">
                <span class="name">{{v.Author}}&nbsp;</span>
                <span class="time-new">{{v.PublishedTimed}}</span>
            </div>

        </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: () => {
    return {
      res: []
    }
  },
  mounted(){
    axios({
      url: '/home/knowledge'
    })
      .then((result) => {
        // console.log(result);
        const resultData = result.data.RspData.ArticleList.List;
        // console.log(resultData);
        this.res = resultData;
      })
  }
}
</script>

<style lang="scss">
body{
  overflow-y: scroll;
}
.community-content{
  z-index: 9;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 5px;


  .border-color {
    color: #ccc;
    border: none;
    font-style: normal;
  }
  .title-in {
    position: relative;
    padding: 2.6% 2.6% 0 2.6%;
    box-sizing: border-box;
    width: 100%;
    height: 3.5rem;
    background: #fff;
    .img-box {
      position: relative;
      img{
        width: 100%;
      }
      .txt {
        position: absolute;
        top: 10px;
        left: 0;
        padding: 2px 9px 0px 4px;
        box-sizing: border-box;
        height: 23px;
        line-height: 20px;
        background: #cccccc;
        text-align: left;
        color: #fff;
        border-radius: 0 15px 15px 0;
        font-size: 13px;
        opacity: 0.90;

      }
      .food {
          background: #fb3d61;
      }
      .num {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 2px 8px 0px 20px;
        height: 17px;
        line-height: 16px;
        box-sizing: border-box;
        background: rgba(255,255,255,.85);
        border-radius: 20px;
        text-align: center;
        color: #656565;
        font-size: 12px;

        .icon5 {
            position: absolute;
            left: 6px;
            top: 4px;
            background-position: 0px 0;
            width: 12px;
            height: 9px;
        }
      }
    }
    .tit1 {
      padding: 14px 0 0px;
      font-size: 18px;
      color: #000;
      line-height: 22px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .tit2 {
      padding: 10px 0 0px;
      font-size: 13px;
      color: #6d6d6d;
      line-height: 17px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .time {
      position: relative;
      padding: 0px 80px 0px 45px;
      box-sizing: border-box;
      margin-top: 10px;
      img {
        position: absolute;
        left: 0px;
        top: 50%;
        margin-top: -17px;
        width: 34px;
        height: 34px;
        border-radius: 50%;
      }
      .name {
        display: inline-block;
        line-height: 57px;
        color: #8d8a8a;
        font-size: 13px;
      }
      .time-new {
        position: absolute;
        top: 50%;
        margin-top: -28px;
        right: 0;
        line-height: 57px;
        color: #8d8a8a;
        font-size: 13px;
      }
    }
  }
}
</style>
