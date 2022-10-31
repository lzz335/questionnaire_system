import request from "@/api/request";

export const login = (data) => {
    return request({
        url: '/login',
        method: 'POST',
        data
    })
}
