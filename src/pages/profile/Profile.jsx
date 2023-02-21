import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileApi } from "../../redux/reducers/userReducer";

const Profile = () => {
  const { profile } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const actionAsync = getProfileApi();
    dispatch(actionAsync);
  }, []);

  return (
    <div className="profile">
      <div className="profile__img">
        <img src={profile?.avatar} alt="..." />
      </div>
      <div className="profile__info">
        <div className="profile__name">
          Tên: <span>{profile?.name}</span>
        </div>
        <div className="profile__email">
          Gmail: <span>{profile?.email}</span>
        </div>
        <div className="profile__phone">
          Số điện thoại: <span>{profile?.phone}</span>
        </div>
        <div className="profile__gender">
          Giới tính: <span>{profile?.gender === true ? "Nam" : "Nữ"}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
