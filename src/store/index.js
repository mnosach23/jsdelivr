import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        packages: []
    },
    mutations: {
        setPackage (state, packageData) {
            state.packages = packageData;
        }
    },
    actions: {
        searchForPackage ({ commit }, payload) {
            fetch(`https://api.jsdelivr.com/v1/jsdelivr/libraries?name=${payload}*`)
                .then(response => response.json())
                .then(data => commit('setPackage', data))
        }
    },
    getters: {
        packages(state) {
            return state.packages;
        },
    }
});

export default store;