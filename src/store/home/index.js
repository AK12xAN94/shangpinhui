import { reqCategoryList } from "@/api"

const state = {
    categoryList: []
}
const mutations = {
    updateCategoryList(state,categoryList) {
        state.categoryList = categoryList
        // console.log(state.categoryList)
    }
}
const getters = {}
const actions = {
    // 获取三级联动菜单数据
    async getCategoryList({commit}) {
        const data = await reqCategoryList()
        // console.log(data)
        if(data.code === 200) {
            commit('updateCategoryList', data.data)
        }
    },
}

export default {
    state,
    mutations,
    getters,
    actions,
}