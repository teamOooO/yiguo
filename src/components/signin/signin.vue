<template>
  <div class="signin">
    <form>
      <div class="input-item">
        <div class="input-item-list username">
            <span class="icon-username"></span>
            <input v-model="username" type="text" id="username" placeholder="请输入您的用户名">
        </div>
        <div class="input-item-list password">
            <span class="icon-password"></span>
            <input v-model="password" type="password" id="password" placeholder="请输入您的密码">
        </div>
        <div class="input-item-list password">
            <input v-model="yzm" type="text" id="J_IdentifyCode" placeholder="请输入验证码"> 
            <i class="yzm"></i>
        </div>
      </div>
      <div class="login-option">
        <span>
          <a href="">忘记密码?</a>
        </span>
      </div>
      <div class="btn-login clearfix">
        <button @click="signin" id="btnLogin" class="btn_green" type="button">登录</button>
        <router-link to="/signup" tag="button" id="btnRegister" class="btn_white">立即注册</router-link>
      </div>
      <div class="login-other">
        <dl>
          <dt>-----------&nbsp;合作账号登录&nbsp;-----------</dt>
          <dd>
            <a href="" class="qq" title="使用QQ联合登录">QQ</a>
            
            <a href="" class="weibo" title="使用新浪微博联合登录">新浪微博</a>
          </dd>
        </dl>
      </div>
    </form>
    <div class="bottomcopyright">
      <em class=" icon yiguo_logo"> </em>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import WebStorageCache from'web-storage-cache';
const wsCache = new WebStorageCache();
export default {
  data () {
    return {
      username: '',
      password: '',
      yzm: ''
    }
  },
  methods: {
    signin() {        
      axios.post('/api/users/signin',{
          username: this.username,
          password: this.password
      })
      .then((result) => {
        // console.log(result)
        const d = result.data.data
        if (d.success) {
          wsCache.set('token', d.token, {exp : 3600 * 24})

          this.$store.dispatch('getUserName', d.username)
          this.$store.dispatch('getIssignin', true)

          this.$router.push('/mine')

        } else {
          this.username = ''
          this.password = ''
          this.yzm = ''
          alert('登录失败');
        }
      })
    }
  }

}
</script>

<style lang="scss" scoped>
  @import "../../styles/yo/usage/core/reset";
  input{
    border: 0;
  }
  .signin{
    overflow: hidden;
    .input-item{
      @include border(1px 0 1px 0,#d9dfd5);
      margin-top: .3rem;
      padding: 0 0 0 .19rem;
      background: #fff;
      .input-item-list{
        position: relative;
        padding: .14rem 0;
        border-bottom: 1px solid #e7e7e7;
        input{
          padding: 0 0 0 .3rem;
        }
        span{
          display: block;
          position: absolute;
          top: .14rem;
          left: 0;
          width: .16rem;
          height: .17rem;
        }
        .icon-username{
          background: url('../../assets/images/icon_username.png') no-repeat 0 0;
          background-size: 100% 100%;
        }
        .icon-password{
          background: url('../../assets/images/icon_password.png') no-repeat 0 0;
          background-size: 100% 100%;
        }
        i{
          display: inline-block;
          width: .56rem;
          height: .24rem;
          background: url('../../assets/images/VCodePic.gif') no-repeat 0 0;
          background-size: 100% 100%;
          vertical-align: middle;
        }
      }
    }
    .login-option{
      margin: .15rem .3rem 0 .2rem; 
      a{
        font-size: .14rem;
        color: #008842;
      }
    }
    .btn-login{
      @include flexbox();
      @include justify-content(space-between);
      margin: .24rem .3rem 0;
      text-align: center;
      button{
        display: inline-block;
        width: 45%;
        height: .36rem;
        @include border-radius(.04rem);
        font-size: .15rem;
        border: 0;
      }
      .btn_green{
        color: #fff;
        background: #008842;
      }
      .btn_white{
        @include border(1px,#008842);
        color: #008842;
        background: #fff;
      }
    }
    .login-other{
      margin: .4rem 0 0 0;
      text-align: center;
      color: #a0a0a0;
      font-size: .14rem;
      dl{
        margin-bottom: .2rem;
        dt{
          padding-bottom: .2rem;
        }
        dd{
          padding: 0 .9rem;
          a{
            display: block;
            overflow: hidden;
            float: left;
            width: 50%;
            height: 55px;
            text-indent: -9999px;
          }
          .qq{
            background: url('../../assets/images/login-qq.png') no-repeat center;
            background-size: auto 100%;
          }
          .weibo{
            background: url('../../assets/images/login-weibo.png') no-repeat center;
            background-size: auto 100%;
          }
        }
      }
    }
    .bottomcopyright{
      width: 100%;
      text-align: center;
      bottom: .15rm;
      bottom: 0;
      padding: .1rem;
      position: absolute;
      .yiguo_logo{
        display: inline-block;
        vertical-align: middle;
        background-size: 100% 100%;
        background-image: url('../../assets/images/yiguo_logo.png');
        height: .32rem;
        width: 1.02rem;
      }
    }
  }
</style>
