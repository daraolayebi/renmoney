import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pageOne: {
            statelga: "",
            employment: "",
            income: "",
            bvn: "",
            dob: "",
            fullname: "",
            email: "",
            mobile: "",
            gender: "",
        },
        pageTwo: {
            residentialStatus: "",
            address: "",
            dateMovedIn: "",
            maritalStatus: "",
            education: "",
        },
        pageThree: {

        }
    },
    getters: {
        pageOne: state => state.pageOne,
        pageTwo: state => state.pageTwo,
        pageThree: state => state.pageThree,
        pageFour: state => state.pageFour,
    },
    actions: {
        async AllAdmins({ commit }) {
            commit('DATA_LOADING')
            try {
                let response = await api().get(`/admins`)
                commit('ADMINS', response.data.data.admins)
            }
            catch (error) {
                commit('ADMINS_FAIL')
            }
        },
        async AddAdmin({ commit }, payload) {
            commit('LOADING')
            try {
                let response = await api().get(`/admins/add?username=${payload}`)
                commit('ADMINS_UPDATED', response.data.data)
            }
            catch (error) {
                commit('ADMINS_UPDATED_FAIL', getErrorMessage(error.response.data.code))
            }
        },
        async RemoveAdmin({ commit }, payload) {
            commit('LOADING')
            try {
                let response = await api().get(`/admins/remove?username=${payload}`)
                commit('ADMINS_UPDATED', response.data.data)
            }
            catch (error) {
                commit('ADMINS_UPDATED_FAIL', getErrorMessage(error.response.data.code))
            }
        },
    },
    mutations: {
        LOADING: (state, payload) => {
            state.loading = true
        },
        DATA_LOADING: (state, payload) => {
            state.dataLoading = true
        },
        ADMINS: (state, payload) => {
            state.dataLoading = false
            state.admins = payload
        },
        ADMINS_FAIL: (state, payload) => {
            state.dataLoading = false
            state.admins = []
        },
        ADMINS_UPDATED: (state, payload) => {
            state.loading = false
            state.success = true
        },
        ADMINS_UPDATED_FAIL: (state, payload) => {
            state.loading = false
            state.success = false
            state.errorMessage = payload
        },
        REFRESH_ADMIN_STATE: (state, payload) => {
            state.loading = false
            state.dataLoading = false
            state.success = null
            state.errorMessage = ''
        }
    }
})
