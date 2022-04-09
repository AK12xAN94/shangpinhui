import { reqCategoryList, reqBannerList, reqFloorList } from "@/api"

const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],
}
const mutations = {
    updateCategoryList(state,categoryList) {
        state.categoryList = categoryList        
    },
    updateBannerList(state, bannerList) {
        state.bannerList = bannerList
    },
    updateFloor(state, floorList) {
        state.floorList = floorList
    }
}
const getters = {}
const actions = {
    // 获取三级联动菜单数据
    async getCategoryList({commit}) {
        const data = await reqCategoryList()
        if(data.code === 200) {
            commit('updateCategoryList', data.data)
        }
    },
    //获取首页轮播图数据
    async getBannerList({commit}) {
        const data = await reqBannerList()        
        if(data.code === 200) {
            commit('updateBannerList', data.data)
        }
    },
    //获取楼层信息
    async getFloorList({commit}) {
        const data = await reqFloorList()
        console.log(data)
        if(data.code === 200) {
            commit('updateFloor', data.data)
        }
    }
}

export default {
    state,
    mutations,
    getters,
    actions,
}