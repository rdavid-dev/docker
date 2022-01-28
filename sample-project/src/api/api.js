import axios from 'axios'

class Api {
    constructor() {

    }

    post(path, data, params, headers) {
        return this._send({ method: 'POST', path, data, params, headers });
    }

    put(path, data, params, headers) {
        return this._send({ method: 'PUT', path, data, params, headers });
    }

    get(path, data, params) {
        return this._send({ method: 'GET', path, data, params });
    }

    delete(path, data, params) {
        return this._send({ method: 'DELETE', path, data, params });
    }

    async _send({ method = 'GET', path = '', data = {}, params = {}, headers = {} }) {
        // const token = localStorage.getItem('access');

        // if (token) {
        //     headers.jwt = `Bearer ${token}`;
        // }
        headers.jwt = `Bearer 2`

        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = process.env.VUE_APP_API_BASE_PATH;

        try {
            const response = await axios({
                method,
                url: path,
                params,
                data,
                headers,
            });

            if (response && response.data) {
                return response.data;
            }

            return null;
        } catch (error) {
            if (error.response.status === 401) {
                window.location.href = this.loginUrl;
            }

            return { errors: error.response.data.error };
        }
    }
}

export default new Api()