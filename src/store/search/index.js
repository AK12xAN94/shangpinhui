import { reqSearchInfo } from '@/api'

const state = {
    searchList: {},
}
const mutations = {
    updateSearchList(state,searchList) {
        state.searchList = searchList
    }
}

const actions = {
    //请求搜索页面数据
    async getSearchList({commit},params = {}) {
        const result = await reqSearchInfo(params)
        if(result.code === 200) {
            commit('updateSearchList',result.data)
        }
    }
}

const getters = {
    goodsList(state) {
        
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}