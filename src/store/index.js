import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    // بحول من نص لاوبجكت
    userDetails: localStorage.getItem("userDetails") ? JSON.parse(localStorage.getItem("userDetails")) : null,
  },
  getters: {
  },
  mutations: {
    setUserDetails(state, payload) {
      state.userDetails = payload;
      // بحول من اوبجت لنص 
      if (payload) localStorage.setItem("userDetails", JSON.stringify(payload))
      else localStorage.removeItem("userDetails")
    }
  },
  actions: {
  },
  modules: {
  }
})


//  parse المختصر المفيد هو جاي نص الوضع الطبيعي بحوله لابوجكت عن طريق ال  

// بطبع نص عادي
console.log(JSON.stringify(localStorage.getItem("userDetails")))

// سطر 9 جاي من سطر 16