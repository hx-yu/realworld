// import request from '@/utils/request.js'
import { request } from '@/plugins/axios-interceptors'

export const getArticlesList = (params = {}) => {
    return request({
        url:'/api/articles',
        method:'GET',
        params
    })
}

export const createArticle = data => {
    return request({
        url:'/api/articles',
        method:'POST',
        data
    })
}