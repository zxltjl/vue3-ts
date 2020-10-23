import {createStore } from 'vuex'


export default createStore({
    strict: process.env.NODE_ENV !== 'production',
    state:{
        count:0
    },
    mutations: {
        increment(state,val){
            state.count = val;
        }
    },
    actions: {},
});