<template>
  <div class="classifyContent">
      <div class="goodsNav">
          <ul>
              <router-link 
              active-class="active" 
              v-for ="(v,i) in list" :key="i" 
              tag="li" 
              :to='`/classify/${i}`'
              >{{v}}</router-link> 
          </ul>
      </div>
      <div class="goodContent">
          <good-content :result='result'></good-content>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import GoodContent from '@/components/classify/GoodContent'
    const arr = ['进口水果','国产水果','精选肉类','禽类蛋品','海鲜水产','即烹美食','乳品糕点','新鲜蔬菜','方便速食','粮油杂货','饮料酒水','礼品礼券']
    export default {
        props: ['page'],
        data:() => {
            return {
                list: arr,
                result: ''
            }
        },
        components: {
            GoodContent
        },
        watch: {
            'page':function(newval, oldval){
               this.axios(newval);
            }
        },
        created () {
            this.axios(0)
        }
        ,
        methods: {
            axios(page){
                axios({
                url: '/api/commodity/classify'
                })
                .then((result) => {
                    this.result = result.data.RspData.data[page].Childs
                    // console.log(this.result)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/yo/usage/core/reset";
    .active {
        color: #11b57c;
        border-left: .03rem solid #11b57c;
        background: #fff;
    }
    .classifyContent {
        @include flexbox();
        background: #fff;
        height: 100%;
        .goodsNav {
            width: .72rem;
            height: 100%;
            text-align: center;
            background: #f4f4f4;
            ul{
                width: 100%;
                height: 100%;
                overflow-y: scroll;
                padding: .15rem 0 .15rem 0;
                li{
                    padding: .15rem 0;
                    font-size: .12rem;
                    line-height: .13rem;
                    color: #333;
                }
            }
        }
        .goodContent{
            @include flex();
        }
    }
</style>
