import request from '@/utils/request.js'

export const register = data => {
    return request({
        url:'/api/users',
        method:'POST',
        data
    })
}
export const login = data => {
    return request({
        url:'/api/users/login',
        method:'POST',
        data
    })
}