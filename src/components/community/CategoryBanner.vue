<template lang="html">
  <div class="title title-icon" id="divOtherCategoryBanner">
    <!--===homve AD Nav Menu===-->
    <div class="title-in title-pad" style="">
        <ul class="refer">
            <!--<li>腰线数据部份</li>-->

        </ul>
        <!-- icon 入口 Data -->
        <ul class="icon-list clear" style="">

            <router-link :to="{ name: 'community'}" tag="li">
                <a href="javascript:;">
                    <img class="lazy icon1" src="http://img13.yiguoimg.com/e/ad/2016/161020/586030925119660372_120x96.png" id="ArtPic_56dcfeff-9299-432b-82e0-34fee7f318b6" data-original="http://img13.yiguoimg.com/e/ad/2016/161020/586030925119660372_120x96.png" alt="做美食" style="display: block;">

                    做美食
                </a>
            </router-link>
            <router-link :to="{ name: 'knowledge' }" tag="li">
                <a href="javascript:;">
                    <img class="lazy icon1" src="http://img13.yiguoimg.com/e/ad/2016/161020/586030925119693140_120x96.png" id="ArtPic_b7c44cee-4044-4361-b5d3-3918f53f9b03" data-original="http://img13.yiguoimg.com/e/ad/2016/161020/586030925119693140_120x96.png" alt="涨知识" style="display: block;">

                    涨知识
                </a>
            </router-link>
            <router-link :to="{ name: 'livinghome' }" tag="li">
                <a href="javascript:;">
                    <img class="lazy icon1" src="http://img12.yiguoimg.com/e/ad/2016/161020/586030925119725908_120x96.png" id="ArtPic_4d337427-914e-4ada-b997-87672319b3a0" data-original="http://img12.yiguoimg.com/e/ad/2016/161020/586030925119725908_120x96.png" alt="生活家" style="display: block;">

                    生活家
                </a>
            </router-link>
            <router-link :to="{ name: 'lovetoeat' }" tag="li">
                <a href="javascript:;">
                    <img class="lazy icon1" src="http://img09.yiguoimg.com/e/ad/2017/170117/586030927703745073_120x96.png" id="ArtPic_30328b5a-700f-427a-ae7d-e49dd6d4a801" data-original="http://img09.yiguoimg.com/e/ad/2017/170117/586030927703745073_120x96.png" alt="爱试吃" style="display: block;">
                    <i class="new"></i>
                    爱试吃
                </a>
            </router-link>
        </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.title-icon{
  margin-top: 0;
}
.title{
  z-index: 9;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 5px;
  width: 100%;

  .title-in{
    padding: 0 3.6% 0 3.6%;
    box-sizing: border-box;
    width: 100%;
    height: .93rem;
    background: #fff;
    .icon-list{
      li{
        width: 20%;
        float: left;
        padding: 14px 0 14px;
        a {
          display: inline-block;
          position: relative;
          padding-top: 44px;
          width: 100%;
          height: 100%;
          font-size: 14px;
          color: #808080;
          text-align: center;
          .icon1 {
             position: absolute;
             top: 6px;
             left: 50%;
             margin-left: -20px;
             width: 40px;
             height: 32px;
          }
        }
      }
    }
  }
}
</style>
