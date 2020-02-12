import axios from 'axios'
export const request = axios.create({
    baseURL:'https://conduit.productionready.io'
})
export default ({ store })=>{
    // 请求拦截
    request.interceptors.request.use(configer => {
        const { user } = store.state
        if (user) {
            configer.headers.Authorization = `Token ${user.token}`
        }
        return configer
    },error => {
        return Promise.reject(error)
    })
    // 响应拦截
    request.interceptors.response.use(response => {
        return response
    },error => {
        return Promise.reject(error)
    })
}