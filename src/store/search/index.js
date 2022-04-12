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
        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}