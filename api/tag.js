import request from '@/utils/request.js'

export const getTagsList = () => {
    return request({
        url:'/api/tags',
        method:'GET'
    })
}