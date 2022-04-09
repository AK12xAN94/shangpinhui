import requests from "./axios";
import mockRequests from './mockAxios'

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

export const reqBannerList = () => mockRequests.get('/banner')

export const reqFloorList = () => mockRequests.get('/floor')