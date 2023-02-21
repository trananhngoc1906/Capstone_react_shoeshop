import React, { useRef } from "react";
import ShoesCard from "../../../components/ShoesCard/ShoesCard";

const Product = ({ arrProduct }) => {
  const ref = useRef();

  return (
    <div className="product">
      <div className="product--sort">
        <span> Sắp xếp:</span>
        <select ref={ref}>
          <option>Tính năng</option>
          <option>Mới nhất</option>
          <option value={3}>Giá: Cao - Thấp</option>
          <option value={4}>Giá: Thấp - Cao</option>
        </select>
      </div>
      {arrProduct?.slice(0, 6).map((prod) => {
        return <ShoesCard key={prod.id} prod={prod} />;
      })}
    </div>
  );
};

export default Product;
