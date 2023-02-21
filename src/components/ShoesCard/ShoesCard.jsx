import React from "react";
import { NavLink } from "react-router-dom";

const ShoesCard = (props) => {
  const { prod } = props;

  return (
    <div className="product__item">
      <div className="product__item--content">
        <NavLink to={`/detail/${prod?.id}`} className="product__item--img">
          <div className="product__item--discount">
            <div>50%</div>
            <div>OFF</div>
          </div>
          <img src={prod?.image} alt="..." />
        </NavLink>
        <hr />
        <NavLink to={`/detail/${prod?.id}`} className="product__item--name">
          {prod?.name}
        </NavLink>
        <div className="product__item--stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <span>({Math.floor(Math.random() * 100) + 10})</span>
        </div>
        <div className="product__item--buy">
          <div className="product__item--price">
            <div className="product__item--new__price">
              {(prod?.price * 5000).toLocaleString()}đ
            </div>
            <div className="product__item--old__price">
              {(prod?.price * 5000 * 2).toLocaleString()}đ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoesCard;
