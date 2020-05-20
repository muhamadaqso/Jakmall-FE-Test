import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import VuexPersist from 'vuex-persist'


Vue.use(Vuex);
const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: localStorage
})

export const store = new Vuex.Store({
    state: {
        btnlink: 'Continue to payment',
        linkto: '/payment',
        purchased: 10,
        isvalid: '',
        cost: 500000,
        dropFee:{
          title: '',
          cost: ''
        },
        totalcost: 500000,
        checked: false,
        addrcount:{
          used: 0,
          left: 120
        },
        valid: {
          emailval: false,
          phoneval: false,
          addressval: false,
          droname: false,
          drophone: false
        },
        notvalid: {
          emailval: false,
          phoneval: false,
          addressval: false,
          droname: false,
          drophone: false
        },
        user: {
          phone: '',
          email: '',
          address: '',
          droname: '',
          drophone: ''
        },
        ewalletsaldo: 1500000,
        estimate: '',
        dayestimate: ['today', '2 days', '1 day'],
        courierchose: '',
        courier: ['GO-SEND', 'JNE', 'Personal Courier'],
        courierprices: [15000, 9000, 29000],
        pricechose: '',
        payment: '',
        paymethod: ['e-Wallet', 'Bank Transfer', 'Virtual Account'],
        by: '',
        shipment: ''
        },
    // getters: {
        
    // },
    plugins: [vuexPersist.plugin]
})