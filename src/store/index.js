import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        form: {},
    },
    getters: {
        form: state => state.form,
    },
    actions: {},
    mutations: {
        SAVE_INPUT: (state, payload) => {
            state.formData = payload
        },
    }
})
