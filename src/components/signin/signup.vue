<template>
    <div class="signup">
        <form>
            <div class="input-item">
                <div class="input-item-list">
                    <input v-model="username" type="tel" placeholder="请输入用户名">
                </div>
                <div class="input-item-list">
                    <input v-model="password" type="password" placeholder="请设定您的密码">
                </div>
                <div class="input-item-list">
                    <input v-model="rePassword" type="password" placeholder="请再次输入您的密码">
                </div>
                <div class="input-item-list">
                    <input v-model="yqm" type="text" placeholder="注册邀请码（选填）">
                </div>
            </div>
            <div class="btn-login">
                <button @click="signup" type="button" class="btn_green">注册</button>
            </div>
            <p class="text">
                点击注册，即代表同意
                <a href="">《易果服务协议》</a>
            </p>
            <div class="bottomcopyright">
                <em class=" icon yiguo_logo"> </em>
            </div>
        </form>
        <div class="bottomcopyright">
            <em class=" icon yiguo_logo"> </em>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { MessageBox } from 'mint-ui';
    export default {
        data () {
            return {
                username: '',
                password: '',
                rePassword: '',
                yqm: ''
            }
        },
        methods: {
            signup() {
                if(this.password == this.rePassword && this.username != ''){
                    axios.post('/api/users/signup',{
                            username: this.username,
                            password: this.password,
                            yqm: this.yqm
                    })
                    .then((result) => {
                        console.log(result.data.data.success)
                        if(result.data.data.success){
                            this.$store.dispatch('getIssignin', true)
                            this.$store.dispatch('getUserName', this.username)
                            this.$router.push('/mine')
                        }

                    })
                }else if(this.username == ''){
                    MessageBox({
                         message: '用户名不能为空',
                         title: '提示'
                    })
                }else if(this.password != this.rePassword){
                    MessageBox({
                         message: '密码不一致',
                         title: '提示'
                    })
                }else if(this.password == '' || this.rePassword == ''){
                    MessageBox({
                         message: '密码不能为空',
                         title: '提示'
                    })
                }
            }
        },

    };
</script>

<style scoped lang="scss">
    @import "../../styles/yo/usage/core/reset";
    input{border: 0;}
    .signup{
        padding: 0 0 .7rem 0;
        overflow: hidden;
        .input-item{
            @include border(0 1px 0 1px,#d9dfd5);
            margin-top: .3rem;
            padding: 0 0 0 .19rem;
            background: #fff;
            .input-item-list {
                position: relative;
                padding:.14rem 0;
                @include border(0 0 1px 0 ,#e7e7e7);
            }
        }
        .btn-login {
            margin: .3rem .3rem 0;
            text-align: center;
            .btn_green{
                color: #fff;
                background: #008842;
                width: 60%;
                display: inline-block;
                height: .38rem;
                border: none;
                @include border-radius(4px);
                font-size: .16rem;
            }
        }
        .text{
            text-align: center;
            margin-top: .1rem;
            color: #8d8a8a;
            font-size: .13rem;
            margin: .1rem 0;
            a{
                color: #008842;
            }
        }
        .bottomcopyright {
            width: 100%;
            text-align: center;
            bottom: 0.15rm;
            bottom: 0;
            padding: 0.1rem;
            position: absolute;
            .yiguo_logo {
                display: inline-block;
                vertical-align: middle;
                background-size: 100% 100%;
                background-image: url("../../assets/images/yiguo_logo.png");
                height: 0.32rem;
                width: 1.02rem;
            }
        }
    }
</style>