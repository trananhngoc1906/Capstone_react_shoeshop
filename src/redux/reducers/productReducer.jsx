//rxslice

import { createSlice } from "@reduxjs/toolkit";
import axios, { HttpStatusCode } from "axios";
import { http } from "../../util/config";

const initialState = {
  arrProduct: null,

  productDetail: null,

  productByName: null,
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    getProductByIdAction: (state, action) => {
      state.productDetail = action.payload;
    },
    getProductByNameAction: (state,action)=>{
      state.productByName = action.payload;
    }
  },
});

export const { getProductAction, getProductByIdAction,getProductByNameAction } =
  productReducer.actions;

export default productReducer.reducer;

//============async action ==========

export const getAllProductApi = async (dispatch) => {
  const result = await axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });

  // const action = {
  //   type: 'productReducer/getProductAction',
  //   payload: result.data.content,
  // }

  const action = getProductAction(result.data.content);
  dispatch(action);
};

//middleware (redux thunk)
export const getProductByIdApi = (id) => {
  return async (dispatch) => {
    const result = await http.get(`/api/Product/getbyid?id=${id}`);
    //sau khi có được dữ liệu từ api => dispatch lần 2 lên reducer
    const action = getProductByIdAction(result.data.content);
    dispatch(action);
  };
};


export const getProductByName = (name) =>{
  return async (dispatch) =>{
    const result = await http.get(`/api/Product?keyword=${name}`);

    const action = getProductByNameAction(result.data.content);
    dispatch(action);
  }
}