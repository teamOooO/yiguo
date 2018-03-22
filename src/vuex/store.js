import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    footerShow: true,
    userName: '',
    issignin: false,
    Commoditys: [{
      "CommodityId": "aa8bd4c5-968c-428b-9005-6c17d51f7845",
      "CommodityName": "广西高乐蜜甜芒果6个200g以上/个",
      "CommodityAmount": 1,
      "CommodityPrice": 35.8000,
      "OriginalPrice": 45.8000,
      "SmallPic": "http://img12.yiguoimg.com/d/items/2017/171115/9288715143324527_300.jpg",
      "PromotionTag": "直降",
      "Selected": true,
      //   "CommodityPromotionGroups": 0 //当前商品是否能参加满减活动0 不能 1 能
    }, {
      CommodityAmount: 1,
      CommodityId: "faa5981e-5542-4189-b6ce-9deac954ade3",
      CommodityName: "原膳深海大虾200g",
      CommodityPrice: 25.9,
      //   CommodityPromotionGroups: 0,
      OriginalPrice: 25.9,
      PromotionTag: "满99减20",
      Selected: true,
      SmallPic: "http://img09.yiguoimg.com/d/items/2017/171225/9288717027550105_300.jpg",
    }, {
      CommodityAmount: 1,
      CommodityId: "faa5981e-5542-4189-b6ce-9deac954adee",
      CommodityName: "原膳深海大虾200g",
      CommodityPrice: 25.9,
      //   CommodityPromotionGroups: 0,
      OriginalPrice: 25.9,
      PromotionTag: "满99减20",
      Selected: true,
      SmallPic: "http://img09.yiguoimg.com/d/items/2017/171225/9288717027550105_300.jpg",
    }],
    PromotionGroups: [{
      "CommodityId": "aa8bd4c5-968c-428b-9005-6c17d51f7843",
      "CommodityName": "广西高乐蜜甜芒果6个200g以上/个",
      "CommodityAmount": 1,
      "CommodityPrice": 35.8000,
      "OriginalPrice": 45.8000,
      "SmallPic": "http://img12.yiguoimg.com/d/items/2017/171115/9288715143324527_300.jpg",
      "PromotionTag": "",
      "Selected": true,
      //   "CommodityPromotionGroups": 0 //当前商品是否能参加满减活动0 不能 1 能
    }],
    FailureGroups: [{
      CommodityAmount: 1,
      CommodityId: "faa5981e-5542-4189-b6ce-9deac954ade7",
      CommodityName: "原膳深海大虾200g",
      CommodityPrice: 25.9,
      OriginalPrice: 25.9,
      PromotionTag: "满99减20",
      Selected: true,
      SmallPic: "http://img09.yiguoimg.com/d/items/2017/171225/9288717027550105_300.jpg",
    }],
    postage: 0

  },
  mutations: {
    changeFooterShow(state, payload) {
        state.footerShow = payload
    },
    setUserName(state, payload){
      state.userName = payload
    },
    setIssignin(state, payload){
      state.issignin = payload
    }
  },
  getters: {
    Amount(state) {
      let sum = 0;
      let origin = 0;
      state.Commoditys.forEach((item) => {
        sum += item.CommodityPrice * item.CommodityAmount;
        origin += item.OriginalPrice * item.CommodityAmount;
      })
      state.PromotionGroups.forEach((item) => {
        sum += item.CommodityPrice * item.CommodityAmount;
        origin += item.OriginalPrice * item.CommodityAmount;
      })
      return {
        sumAmount: sum.toFixed(2),
        cheapAmount: (sum - origin).toFixed(2)
      };
    },
    selectCommodityTotalCount(state) {

    },
    commodityTotalCount(state) {
      return state.Commoditys.length + state.FailureGroups.length + state.PromotionGroups.length;
    },
    saleTopTipDif(state, getters) {
      return (100 - getters.Amount.sumAmount).toFixed(2);
    }
  },
  actions: {
    getUserName(context,data){
      context.commit('setUserName',data)
    },
    getIssignin(context,data){
      context.commit('setIssignin',data)
    }
  }
})

export default store;