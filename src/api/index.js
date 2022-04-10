import requests from "./axios";
import mockRequests from './mockAxios'

//三级联动分类请求
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })
//轮播图数据请求
export const reqBannerList = () => mockRequests.get('/banner')
//楼层信息数据请求
export const reqFloorList = () => mockRequests.get('/floor')
//搜索模块数据请求
export const reqSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })