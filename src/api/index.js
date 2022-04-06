import requests from "./axios";

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })