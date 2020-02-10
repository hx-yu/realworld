import request from '@/utils/request.js'

export const getArticleList = (params = {}) => {
    return request({
        url:'/api/articles',
        method:'GET',
        params
    })
}