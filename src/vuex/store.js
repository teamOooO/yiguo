<<<<<<< HEAD
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

function findCommodityById(state, id) {
  for (let i = 0; i < state.Commoditys.length; i++) {
    if (id == state.Commoditys[i].CommodityId) {
      return state.Commoditys[i];
    }
  }
  for (let i = 0; i < state.PromotionGroups.length; i++) {
    if (id == state.PromotionGroups[i].CommodityId) {
      return state.PromotionGroups[i];
    }
  }
  return false;
}

const store = new Vuex.Store({
  state: {
    footerShow: true,
    userName: '',
    issignin: false,
    isEmpty: false,
    Commoditys: [],
    PromotionGroups: [],
    FailureGroups: [],
    postage: 0
  },
  mutations: {
    clearCart(state) {
      state.PromotionGroups = [];
      state.Commoditys = [];
      state.FailureGroups = [];
    },
    addOneToCart(state, payload) {
      const {opt, id, canadd} = payload;
      if (canadd) {
        if (opt.PromotionTag == '' || opt.PromotionTag == null) {
          var arrC = state.Commoditys;
          for (var i = 0; i < arrC.length; i++) {
            if (arrC[i].CommodityId == id) {
              arrC[i].CommodityAmount += opt.CommodityAmount;
              return;
            }
          }
          state
            .Commoditys
            .push(opt);
        } else {
          var arrC = state.PromotionGroups;
          for (var i = 0; i < arrC.length; i++) {
            if (arrC[i].CommodityId == id) {
              arrC[i].CommodityAmount += opt.CommodityAmount;
              return;
            }
          }
          state
            .PromotionGroups
            .push(opt);
        }
      } else {
        var arrC = state.FailureGroups;
        for (var i = 0; i < arrC.length; i++) {
          if (arrC[i].CommodityId == id) {
            return;
          }
        }
        state
          .FailureGroups
          .push(opt)
      }
    },
    changeFooterShow(state, payload) {
      state.footerShow = payload
    },
    setUserName(state, payload) {
      state.userName = payload
    },
    setIssignin(state, payload) {
      state.issignin = payload
    },
    cartIsEmpty(state) {
      if (state.Commoditys.length + state.FailureGroups.length + state.PromotionGroups.length > 0) 
        state.isEmpty = false;
      else 
        state.isEmpty = true;
      }
    ,
    clearAll(state) {
      state.FailureGroups = [];
    },
    changeSelectStatus(state, payload) {
      const {id, status} = payload;
      let row = findCommodityById(state, id);
      if (row) 
        row.Selected = !status;
      }
    ,
    selectAll(state, payload) {
      state
        .Commoditys
        .forEach((item) => {
          item.Selected = !payload;
        })
      state
        .PromotionGroups
        .forEach((item) => {
          item.Selected = !payload;
        })
    },
    commodityAdd(state, id) {
      let row = findCommodityById(state, id);
      row.CommodityAmount++;
    },
    commodityMinus(state, id) {
      let row = findCommodityById(state, id);
      row.CommodityAmount--;
    },
    deletCommodity(state, id) {
      for (let i = 0; i < state.Commoditys.length; i++) {
        if (id == state.Commoditys[i].CommodityId) {
          state
            .Commoditys
            .splice(i, 1);
          return;
        }
      }
      for (let i = 0; i < state.PromotionGroups.length; i++) {
        if (id == state.PromotionGroups[i].CommodityId) {
          state
            .PromotionGroups
            .splice(i, 1);
          return;
        }
      }
      for (let i = 0; i < state.FailureGroups.length; i++) {
        if (id == state.FailureGroups[i].CommodityId) {
          state
            .FailureGroups
            .splice(i, 1);
          return;
        }
      }
    }
  },
  getters: {
    Amount(state) {
      let sum = 0;
      let origin = 0;
      let allSelected = true;
      let psum = 0;
      let count = 0;
      state
        .Commoditys
        .forEach((item) => {
          count++;
          if (item.Selected) {
            sum += item.CommodityPrice * item.CommodityAmount;
            origin += item.OriginalPrice * item.CommodityAmount;
          } else 
            allSelected = false;
          }
        )
      state
        .PromotionGroups
        .forEach((item) => {
          count++;          
          if (item.Selected) {
            sum += item.CommodityPrice * item.CommodityAmount;
            origin += item.OriginalPrice * item.CommodityAmount;
            psum += item.CommodityPrice * item.CommodityAmount;
          } else 
            allSelected = false;
          }
        )
      let cheap = origin - sum;
      if ((100 - psum) <= 0) {
        sum -= 20;
        cheap += 20;
      }
      return {
        sumAmount: sum.toFixed(2),
        cheapAmount: cheap.toFixed(2),
        allSelected,
        proSum: (100 - psum).toFixed(2),
        count
      };
    },
    selectCommodityTotalCount(state) {},
    // commodityTotalCount(state) {   const s = state.Commoditys;   return
    // state.Commoditys.length + state.FailureGroups.length +
    // state.PromotionGroups.length; },
    saleTopTipDif(state, getters) {
      return (100 - getters.Amount.sumAmount).toFixed(2);
    }
  },
  actions: {
    getUserName(context, data) {
      context.commit('setUserName', data)
    },
    getIssignin(context, data) {
      context.commit('setIssignin', data)
    },
    addToCart(context, data) {
      context.commit('addOneToCart', data)
    },
    commodityAdd(context, data) {
      context.commit('commodityAdd', data)
    },
    commodityMinus(context, data) {
      context.commit('commodityMinus', data)
    },
    cartIsEmpty(context, data) {
      context.commit('cartIsEmpty', data)
    },
    deletCommodity(context, data) {
      context.commit('deletCommodity', data)
    },
  }
})

export default store;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> zhangboyu-0315-router-end
=======
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

function findCommodityById(state, id) {
  for (let i = 0; i < state.Commoditys.length; i++) {
    if (id == state.Commoditys[i].CommodityId) {
      return state.Commoditys[i];
    }
  }
  for (let i = 0; i < state.PromotionGroups.length; i++) {
    if (id == state.PromotionGroups[i].CommodityId) {
      return state.PromotionGroups[i];
    }
  }
  return false;
}

const store = new Vuex.Store({
  state: {
    footerShow: true,
    isEmpty: false,
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
      Selected: false,
      SmallPic: "http://img09.yiguoimg.com/d/items/2017/171225/9288717027550105_300.jpg",
    }, {
      CommodityAmount: 1,
      CommodityId: "faa5981e-5542-4189-b6ce-9deac954adee",
      CommodityName: "原膳深海大虾200g",
      CommodityPrice: 25.9,
      //   CommodityPromotionGroups: 0,
      OriginalPrice: 25.9,
      PromotionTag: "满99减20",
      Selected: false,
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
      "Selected": false,
      //   "CommodityPromotionGroups": 0 //当前商品是否能参加满减活动0 不能 1 能
    }, {
      "CommodityId": "aa8bd4c5-968c-428b-9005-6c17d51f7842",
      "CommodityName": "广西高乐蜜甜芒果6个200g以上/个",
      "CommodityAmount": 1,
      "CommodityPrice": 35.8000,
      "OriginalPrice": 45.8000,
      "SmallPic": "http://img12.yiguoimg.com/d/items/2017/171115/9288715143324527_300.jpg",
      "PromotionTag": "",
      "Selected": false,
      //   "CommodityPromotionGroups": 0 //当前商品是否能参加满减活动0 不能 1 能
    }],
    FailureGroups: [{
      CommodityAmount: 1,
      CommodityId: "faa5981e-5542-4189-b6ce-9deac954ade7",
      CommodityName: "原膳深海大虾200g",
      CommodityPrice: 25.9,
      OriginalPrice: 25.9,
      PromotionTag: "满99减20",
      Selected: false,
      SmallPic: "http://img09.yiguoimg.com/d/items/2017/171225/9288717027550105_300.jpg",
    }, {
      CommodityAmount: 1,
      CommodityId: "faa5981e-5542-4189-b6ce-9deac953adee",
      CommodityName: "原膳深海大虾200g",
      CommodityPrice: 25.9,
      //   CommodityPromotionGroups: 0,
      OriginalPrice: 25.9,
      PromotionTag: "满99减20",
      Selected: false,
      SmallPic: "http://img09.yiguoimg.com/d/items/2017/171225/9288717027550105_300.jpg",
    }],
    postage: 0
  },
  mutations: {
    changeFooterShow(state, payload) {
      state.footerShow = payload
    },
    cartIsEmpty(state) {
      if (state.Commoditys.length + state.FailureGroups.length + state.PromotionGroups.length > 0)
        state.isEmpty = false;
      else state.isEmpty = true;
    },
    clearAll(state) {
      state.FailureGroups = [];
    },
    changeSelectStatus(state, payload) {
      const {
        id,
        status
      } = payload;
      let row = findCommodityById(state, id);
      if (row) row.Selected = !status;
    },
    selectAll(state, payload) {
      state.Commoditys.forEach((item) => {
        item.Selected = !payload;
      })
      state.PromotionGroups.forEach((item) => {
        item.Selected = !payload;
      })
    },
    commodityAdd(state, id) {
      let row = findCommodityById(state, id);
      row.CommodityAmount++;
    },
    commodityMinus(state, id) {
      let row = findCommodityById(state, id);
      row.CommodityAmount--;
    },
    deletCommodity(state, id) {
      for (let i = 0; i < state.Commoditys.length; i++) {
        if (id == state.Commoditys[i].CommodityId) {
          state.Commoditys.splice(i, 1);
          return;
        }
      }
      for (let i = 0; i < state.PromotionGroups.length; i++) {
        if (id == state.PromotionGroups[i].CommodityId) {
          state.PromotionGroups.splice(i, 1);
          return;
        }
      }
      for (let i = 0; i < state.FailureGroups.length; i++) {
        if (id == state.FailureGroups[i].CommodityId) {
          state.FailureGroups.splice(i, 1);
          return;
        }
      }
    }
  },
  getters: {
    Amount(state) {
      let sum = 0;
      let origin = 0;
      let allSelected = true;
      let psum = 0;
      state.Commoditys.forEach((item) => {
        if (item.Selected) {
          sum += item.CommodityPrice * item.CommodityAmount;
          origin += item.OriginalPrice * item.CommodityAmount;
        } else allSelected = false;
      })
      state.PromotionGroups.forEach((item) => {
        if (item.Selected) {
          sum += item.CommodityPrice * item.CommodityAmount;
          origin += item.OriginalPrice * item.CommodityAmount;
          psum += item.CommodityPrice * item.CommodityAmount;
        } else allSelected = false;
      })
      let cheap = origin - sum;
      if ((100 - psum) <= 0) {
        sum -= 20;
        cheap += 20;
      }
      return {
        sumAmount: sum.toFixed(2),
        cheapAmount: cheap.toFixed(2),
        allSelected,
        proSum: (100 - psum).toFixed(2)
      };
    },
    selectCommodityTotalCount(state) {

    },
    // commodityTotalCount(state) {
    //   const s = state.Commoditys;
    //   return state.Commoditys.length + state.FailureGroups.length + state.PromotionGroups.length;
    // },
    saleTopTipDif(state, getters) {
      return (100 - getters.Amount.sumAmount).toFixed(2);
    },
  }
})

export default store;
>>>>>>> sj-201803015-homepage
=======
>>>>>>> aa6f58341cd8394f53b06f4635ffb58d8d9380ee
>>>>>>> 350ba3790f3ca45a0eae3eb9d2ce4dda2c260e69
