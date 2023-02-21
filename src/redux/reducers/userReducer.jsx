import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { history } from "../../App.js";

import {
  http,
  layStore,
  layStoreJson,
  luuStore,
  luuStoreJson,
  TOKEN,
  USER_LOGIN,
} from "../../util/config";

const initialState = {
  userLogin: layStoreJson(USER_LOGIN) ? layStoreJson(USER_LOGIN) : null,
  profile: null,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.userLogin = action.payload;
    },
    getProfileAction: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { loginAction, getProfileAction, signUpAction } =
  userReducer.actions;

export default userReducer.reducer;

//========================async action=============

export const loginApi = (userLogin) => {
  return async (dispatch) => {
    await axios({
      url: "https://shop.cyberlearn.vn/api/Users/signin",
      method: "POST",
      data: userLogin,
    })
      .then((result) => {
        //sau khi đăng nhập thành công dispatch lên reducer
        const action = loginAction(result.data.content);
        dispatch(action);

        //Lưu cookie hoặc localstorage cho token
        //lưu thông tin đăng nhập thành công {email, accessToekn} vào localstorage
        luuStoreJson(USER_LOGIN, result.data.content);

        luuStore(TOKEN, result.data.content.accessToken);

        history.push("/profile");
      })
      .catch((error) => {
        console.log(error);
        alert("thông tin đăng nhập chưa chính xác");
      });
  };
};

export const getProfileApi = () => {
  return async (dispatch) => {
    let result = await axios({
      url: "https://shop.cyberlearn.vn/api/Users/getProfile",
      method: "POST",
      headers: {
        Authorization: `Bearer ${layStore(TOKEN)}`,
      },
    }).catch((err) => {
      console.log(err);
      if (err.response.status === 401) {
        history.push("/login");
      }
    });

    //Sau khi call api profile dua len reducer
    const action = getProfileAction(result.data.content);
    dispatch(action);
  };
};
