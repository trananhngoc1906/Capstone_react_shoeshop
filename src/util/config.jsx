import axios from "axios";

export const USER_LOGIN = "userLogin";
export const TOKEN = "accessToken";
export const TOKEN_CYBER =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNUUiLCJIZXRIYW5TdHJpbmciOiIzMS8wNS8yMDIzIiwiSGV0SGFuVGltZSI6IjE2ODU0OTEyMDAwMDAiLCJuYmYiOjE2NTczODYwMDAsImV4cCI6MTY4NTYzODgwMH0.LWlPoCoXPHgp2U6FijTqXvKFt7ENvY9Tyn9ux-bVlXo";

//các hàm sử dụng để lưu
export const { luuStore, luuStoreJson, layStore, layStoreJson, huyStore } = {
  luuStore: (name, data) => {
    localStorage.setItem(name, data);
  },
  luuStoreJson: (name, jsonData) => {
    const data = JSON.stringify(jsonData);
    localStorage.setItem(name, data);
  },
  layStore: (name) => {
    if (localStorage.getItem(name)) {
      return localStorage.getItem(name);
    }
    return null;
  },
  layStoreJson: (name) => {
    if (localStorage.getItem(name)) {
      return JSON.parse(localStorage.getItem(name));
    }
  },
  huyStore: (name) => {
    localStorage.removeItem(name);
  },
};

//Cấu hình interceptor (Cấu hình cho tất request(gửi đi), response(dữ liệu nhận về))

export const http = axios.create({
  baseURL: "https://shop.cyberlearn.vn",
  timeout: 30 * 1000,
});

//Cấu hình cho request đều có token
http.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${layStore(TOKEN)}`,
    };
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
