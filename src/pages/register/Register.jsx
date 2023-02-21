import React from "react";
import { useFormik, Formik, Form, Field } from "formik";
import axios from "axios";
import { luuStoreJson, USER_LOGIN } from "../../util/config";

const Register = () => {
  const sendData = async (userSingUp) => {
    const result = await axios({
      url: "https://shop.cyberlearn.vn/api/Users/signup",
      method: "POST",
      data: userSingUp,
    })
      .then((response) => {
        console.log(response);
        luuStoreJson("data-singup", response.data.content);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      email: document.getElementsByName("email")[0].value,
      password: document.getElementsByName("passwordConfirm")[0].value,
      name: document.getElementsByName("name")[0].value,
      gender: document.getElementsByName("gender")[0].checked,
      phone: document.getElementsByName("phone")[0].value,
    };
    sendData(data);
  };

  function validateEmail(value) {
    let error = "";
    if (!value) {
      error = "Vui lòng nhập email !";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Email không hợp lệ !";
    }
    return error;
  }

  const validateName = (value) => {
    let error = "";
    if (!value) {
      error = "Vui lòng nhập Họ và Tên !";
    } else if (/^[0-9]+$/.test(value)) {
      error = "Họ tên chỉ được nhập chữ !";
    }

    return error;
  };

  const validatePassword = (value) => {
    let error = "";
    if (!value) {
      error = "Vui lòng nhập mật khẩu !";
    } else if (
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/.test(
        value
      )
    ) {
      error = "Mật khẩu phải gồm 1 chữ in hoa, 1 số, 1 ký tự đặc biệt";
    } else if (value.length < 6) {
      error = "Mật khẩu phải chứa ít nhất 6 ký tự";
    }
    return error;
  };

  const validatePasswordConfirm = (value) => {
    const pass = document.getElementsByName("password")[0].value;

    let error = "";
    if (!value) {
      error = "Vui lòng nhập mật khẩu !";
    } else if (value !== pass) {
      error = "Mật khẩu xác nhận không chính xác";
    }
    return error;
  };

  const validatePhone = (value) => {
    let error = "";
    if (!value) {
      error = "Vui lòng nhập số điện thoại !";
    } else if (!/^[0-9]+$/.test(value)) {
      error = "Số điện thoại chỉ được nhập số !";
    } else if (value.length < 10) {
      error = "Số điện thoại chưa đúng";
    }
    return error;
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordConfirm: "",
          name: "",
          phone: "",
        }}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form className="register" onSubmit={handleSubmit}>
            <div className="register--input register--email">
              <h5>Email</h5>
              <Field
                type="text"
                className="form-control"
                name="email"
                validate={validateEmail}
              />
              {errors.email && touched.email && (
                <p className="text text-danger">{errors.email}</p>
              )}
            </div>
            <div className="register--input register--name">
              <h5>Họ và tên</h5>
              <Field
                type="text"
                className="form-control"
                name="name"
                validate={validateName}
              />
              {errors.name && touched.name && (
                <p className="text text-danger">{errors.name}</p>
              )}
            </div>
            <div className="register--input register--password">
              <h5>Mật khẩu</h5>
              <Field
                type="text"
                className="form-control"
                name="password"
                validate={validatePassword}
              />
              {errors.password && touched.password && (
                <p className="text text-danger">{errors.password}</p>
              )}
            </div>
            <div className="register--input register--phone">
              <h5>Số điện thoại</h5>
              <Field
                type="text"
                className="form-control"
                name="phone"
                validate={validatePhone}
              />
              {errors.phone && touched.phone && (
                <p className="text text-danger">{errors.phone}</p>
              )}
            </div>
            <div className="register--input register--repassword">
              <h5>Xác nhận mật khẩu</h5>
              <Field
                type="text"
                className="form-control"
                name="passwordConfirm"
                validate={validatePasswordConfirm}
              />
              {errors.passwordConfirm && touched.passwordConfirm && (
                <p className="text text-danger">{errors.passwordConfirm}</p>
              )}
            </div>

            <div className="register--input register--gender">
              <h5>Giới tính</h5>
              <input type="radio" name="gender" value="true" defaultChecked />
              <span className="gender--male">Nam</span>
              <input type="radio" name="gender" id="" value="false" />
              <span className="gender--female">Nữ</span>
              {errors.gender && touched.gender && (
                <p className="text text-danger">{errors.gender}</p>
              )}
            </div>
            <div className="register--button">
              <button type="submit" className="btn btn-success">
                Đăng ký
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Register;
