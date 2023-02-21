import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { loginApi } from "../../redux/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";
import FacebookLogin from 'react-facebook-login';
import axios from "axios";
import { luuStoreJson } from "../../util/config";

const Login = () => {
  const { useLogin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const frm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email("Email không hợp lệ"),
    }),
    onSubmit: (values) => {
      //call api
      const actionAsync = loginApi(values);
      dispatch(actionAsync);
    },
  });

  const responseFacebook = (response) => {
    axios({
      url: 'https://shop.cyberlearn.vn/api/Users/facebooklogin',
      method: "POST",
      data: {
        facebookToken: response.accessToken
      }
    }).then(res =>{
      luuStoreJson("FBtoken",res.data.content.accessToken)
    }).catch(err =>{
      console.log(err.message)
    })

  }

  return (
    <>
    <form onSubmit={frm.handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p>email</p>
        <input
          className="form-control w-50"
          name="email"
          onChange={frm.handleChange}
          onBlur={frm.handleBlur}
        />
        {frm.errors.email && (
          <p className="text text-danger">{frm.errors.email}</p>
        )}
      </div>
      <div className="form-group">
        <p>password</p>
        <input
          className="form-control w-50"
          name="password"
          type="password"
          onChange={frm.handleChange}
          onBlur={frm.handleBlur}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success mt-2" type="submit">
          Login
        </button>
      </div>
    </form>
    <FacebookLogin
    appId="1651231998641658"
    // autoLoad={true}
    fields="name,email,picture"
    
    callback={responseFacebook} />
    </>
  );
};

export default Login;
