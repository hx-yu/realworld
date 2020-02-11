import request from '@/utils/request.js'

export const getArticlesList = (params = {}) => {
    return request({
        url:'/api/articles',
        method:'GET',
        params
    })
}