import axios from "axios";


const $api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})

$api.interceptors.request.use((config) =>  {
    config.headers['Content-Type'] = '';
    return config
})
$api.interceptors.response.use((data) => data);


export default $api