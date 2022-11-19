import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
    (request) => {
        request.params = { ...request.params, api_key: "c3f3b91c6a993643a74066618aa6032e" }
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axios;