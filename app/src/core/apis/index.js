import request from "./init"

export function get(url) {
    return request({
        url: url,
        method: 'GET'
    })
}

export function post(url, data = {}, headers = {}) {
    return request({
        url: url,
        method: 'POST',
        data,
        headers
    })
}

export function update(url, data = {}, headers = {}) {
    return request({
        url: url,
        method: 'PATCH',
        data,
        headers
    })
}

export function destroy(url) {
    return request({
        url: url,
        method: 'delete'
    })
}