<<<<<<< HEAD
<template>
    <div class="searchTop">
        <form action="">
            <i class="icon"></i>
            <input type="text" placeholder="请输入商品名称" v-model="content" @focus="doinput" @blur="outinput">
            <i v-show="content" @click="clear" class="clear"></i>
        </form>
        <span @click="dosearch">搜索</span>
        <div v-show="isshow" class="mask"></div>
    </div>  
</template>

<script>
import axios from "axios";
import { Toast } from "mint-ui";
export default {
  data: () => {
    return {
      content: "",
      isshow: false
    };
  },
  methods: {
    clear() {
      this.content = "";
    },
    doinput() {
      this.isshow = true;
      this.$store.commit("changeFooterShow", false);
    },
    outinput() {
      this.isshow = false;
      this.$store.commit("changeFooterShow", true);
    },
    dosearch() {
      this.isshow = false;

      if (this.content == "") {
        Toast({
          message: "请输入商品名称",
          position: "middle",
          className: "tip",
          duration: 1500
        });
      } else {
        /* ------------   axios 请求 (未完成) -------------- */
        axios({
          url: "home/classify",
          data: {
            keyWord: this.content
          }
        }).then(result => {
          // console.log(result);
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../styles/yo/usage/core/reset";

.searchTop {
  @include flexbox();
  @include align-items();
  @include border(0 0 1px 0);
  height: 0.4rem;
  width: 100%;
  background: #fff;
  padding: 0.08rem 0.1rem;
  box-sizing: border-box;
  form {
    @include flexbox();
    @include flex();
    @include align-items();
    @include border-radius(0.2rem);
    height: 0.28rem;
    background: #f4f4f4;
    padding: 0 0.1rem 0 0.15rem;
    box-sizing: border-box;
    .icon {
      display: inline-block;
      margin-right: 0.1rem;
      width: 0.13rem;
      height: 0.13rem;
      background: url("../../../static/search/search.png") no-repeat 0 0;
      background-size: 100% 100%;
    }
    input {
      width: 2rem;
      height: 100%;
      background: #f4f4f4;
      border: none;
      @include border-radius(0.2rem);
      font-size: 0.13rem;
    }
    .clear {
      width: 0.11rem;
      height: 0.11rem;
      background: url("../../../static/search/icon-close.png");
      background-size: 100% 100%;
    }
  }
  span {
    display: block;
    height: 0.4rem;
    width: 0.4rem;
    text-align: right;
    line-height: 0.4rem;
    font-size: 0.14rem;
    color: #11b57c;
  }
  .mask {
    background: rgba($color: #000000, $alpha: 0.4);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-top: 0.38rem;
    z-index: 100;
  }
}
=======
<template>
    <div class="searchTop">
        <form action="">
            <i class="icon"></i>
            <input type="text" placeholder="请输入商品名称" v-model="content" @focus="doinput" @blur="outinput">
            <i v-show="content" @click="clear" class="clear"></i>
        </form>
        <span @click="dosearch">搜索</span>
        <div v-show="isshow" class="mask"></div>
    </div>  
</template>

<script>
import axios from "axios";
import { Toast } from "mint-ui";
export default {
  data: () => {
    return {
      content: "",
      isshow: false
    };
  },
  methods: {
    clear() {
      this.content = "";
    },
    doinput() {
      this.isshow = true;
      this.$store.commit("changeFooterShow", false);
    },
    outinput() {
      this.isshow = false;
      this.$store.commit("changeFooterShow", true);
    },
    dosearch() {
      this.isshow = false;

      if (this.content == "") {
        Toast({
          message: "请输入商品名称",
          position: "middle",
          className: "tip",
          duration: 1500
        });
      } else {
        /* ------------   axios 请求 (未完成) -------------- */
        axios({
          url: "api1/classify",
          data: {
            keyWord: this.content
          }
        }).then(result => {
          // console.log(result);
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../styles/yo/usage/core/reset";

.searchTop {
  @include flexbox();
  @include align-items();
  @include border(0 0 1px 0);
  height: 0.4rem;
  width: 100%;
  background: #fff;
  padding: 0.08rem 0.1rem;
  box-sizing: border-box;
  form {
    @include flexbox();
    @include flex();
    @include align-items();
    @include border-radius(0.2rem);
    height: 0.28rem;
    background: #f4f4f4;
    padding: 0 0.1rem 0 0.15rem;
    box-sizing: border-box;
    .icon {
      display: inline-block;
      margin-right: 0.1rem;
      width: 0.13rem;
      height: 0.13rem;
      background: url("../../../static/search/search.png") no-repeat 0 0;
      background-size: 100% 100%;
    }
    input {
      width: 2rem;
      height: 100%;
      background: #f4f4f4;
      border: none;
      @include border-radius(0.2rem);
      font-size: 0.13rem;
    }
    .clear {
      width: 0.11rem;
      height: 0.11rem;
      background: url("../../../static/search/icon-close.png");
      background-size: 100% 100%;
    }
  }
  span {
    display: block;
    height: 0.4rem;
    width: 0.4rem;
    text-align: right;
    line-height: 0.4rem;
    font-size: 0.14rem;
    color: #11b57c;
  }
  .mask {
    background: rgba($color: #000000, $alpha: 0.4);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-top: 0.38rem;
    z-index: 100;
  }
}
>>>>>>> sj-201803015-homepage
</style>