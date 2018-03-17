import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        footerShow: true
    },
    mutations: {
        changeFooterShow(state, payload) {
            state.footerShow = payload
        }
    }

})

export default store