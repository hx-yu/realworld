// import request from '@/utils/request.js'
import { request } from '@/plugins/axios-interceptors'

export const getTagsList = () => {
    return request({
        url:'/api/tags',
        method:'GET'
    })
}