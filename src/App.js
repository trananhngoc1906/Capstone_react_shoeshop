import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/style.scss";

import { BrowserRouter, Navigate, Route, Routes, unstable_HistoryRouter as HistoryRouter} from "react-router-dom";
import HomeTemplate from "./templates/homeTemplate/HomeTemplate";

import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Carts from "./pages/carts/Carts";
import Search from "./pages/search/Search";
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";
import {createBrowserHistory} from 'history'


export const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<Home />} />
            <Route path="detail">
              <Route path=":id"  element={<Detail />}></Route>
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="carts" element={<Carts />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<Navigate to="" />} />
          </Route>
        </Routes>
      </HistoryRouter>
    </Provider>
  );
}

export default App;
