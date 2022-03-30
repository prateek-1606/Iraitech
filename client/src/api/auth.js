import axios from "axios";
const url = 'http://localhost:5000/user'

export const register = (data) => {
    try {
        const res = axios.post(`${url}/signup`, {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            phone: data.phone,
            address: data.address,
            password: data.password
        })
        return res;
    }
    catch (err) {
        throw err;
    }
}

export const login = (data) => {
    try {
        const res = axios.post(`${url}/signin`, {
            email: data.email,
            password: data.password
        })
        return res
    }
    catch (err) {
        throw err;
    }
}

export const getUser = () => {
    try {
        const { token } = JSON.parse(localStorage.getItem('token'));
        const res = axios.get(url, { headers: { "Authorization": `Bearer ${token}` } })
        return res;
    }
    catch (err) {
        throw err;
    }
}