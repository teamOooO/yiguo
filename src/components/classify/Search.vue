<template>
    <div class="searchTop">
        <form action="">
            <i class="icon"></i>
            <input type="text" placeholder="请输入商品名称" v-model="content">
            <i v-show="content" @click="clear" class="clear"></i>
        </form>
        <span @click="dosearch">搜索</span>
    </div>  
</template>

<script>
import axios from 'axios'
import { Toast } from 'mint-ui'
export default {
    data:() => {
        return {
            content: ''
        }
    },
    methods:{
        clear() {
            this.content = ''
        },
        dosearch(){
            if(this.content == ''){
                Toast({
                    message: '请输入商品名称',
                    position: 'middle',
                    className:'tip',
                    duration: 1500
                })
            }else{
                /* ------------   axios 请求 (未完成) -------------- */
                axios({
                    url:'api/ProductOpt/GetProductLists',
                    data: {
                       keyWord: this.content
                    }
                })
                .then((result) => {
                    console.log(result)

                })
            }
        }
    }

}
</script>

<style scoped lang="scss">
    @import "../../styles/yo/usage/core/reset";
    
    .searchTop {
        @include flexbox();
        @include align-items();
        height: .4rem;
        width: 100%;
        background: #fff;
        padding: .08rem 0.1rem;
        box-sizing: border-box;
        form{
            @include flexbox();
            @include flex();
            @include align-items();
            height: .28rem;
            background: #f4f4f4;
            @include border-radius(.2rem);
            padding: 0 .1rem 0 .15rem;
            box-sizing: border-box;
            .icon{
                display: inline-block;
                margin-right: .1rem;
                width: .13rem;
                height: .13rem;
                background:url('../../../static/search/search.png') no-repeat 0 0;
                background-size: 100% 100%;
            }
            input{
                width: 2rem;
                height: 100%;
                background:#f4f4f4;
                border: none;
                @include border-radius(.2rem);
                font-size: .13rem;
            } 
            .clear{
                width: .11rem;
                height: .11rem;
                background: url('../../../static/search/icon-close.png');
                background-size: 100% 100%;
            }
        }
        span{
            display: block;
            height: .4rem;
            width: .4rem;
            text-align: right;
            line-height: .4rem;
            font-size: .14rem;
            color: #11b57c;
        }
    }
</style>


