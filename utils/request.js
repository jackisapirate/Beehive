import axios from "axios";
import {BASE_URI} from "./pathMap";

// const instance = axios.create({
//     baseURL: BASE_URI,
// })

const instance = axios.create({
    baseURL: BASE_URI,
    timeout: 5000,
    headers: {
        'Content-Type': "application/json; charset=utf-8"
    }
})


export default {
    get: instance.get,
    post: instance.post
}