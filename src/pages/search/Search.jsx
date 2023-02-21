import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import ShoesCard from "../../components/ShoesCard/ShoesCard";
import {
  getProductByName,
  getProductByNameAction,
} from "../../redux/reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";

const _ = require("lodash");

const Search = () => {
  const { productByName } = useSelector((state) => state.productReducer);

  const [searchParams, setSearchParams] = useSearchParams();
  const keywordRef = useRef("");
  const dispatch = useDispatch();

  const getProductbyName = async () => {
    const action = getProductByName(keywordRef.current);

    dispatch(action);
  };

  useEffect(() => {
    getProductbyName();
  }, [keywordRef.current]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ keyword: keywordRef.current });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    keywordRef.current = value;
  };

  const handleChangeOption = (e) => {
    const { value } = e.target;
    if (value == 1) {
      let newArr = _.map(_.orderBy(productByName, "price"));
      const action = getProductByNameAction(newArr);
      dispatch(action);
    } else if (value == 2) {
      let newArr = _.map(_.orderBy(productByName, "price", ["desc"]));
      const action = getProductByNameAction(newArr);
      dispatch(action);
    }
  };

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <div className="form-group d-flex">
          <input
            className="form-control w-50"
            type="text"
            placeholder="Product name..."
            onChange={handleChange}
          />
          <button className="btn btn-primary">Tìm kiếm</button>
        </div>
        <div className="mt-5">
          <select
            onChange={(e) => {
              handleChangeOption(e);
            }}
          >
            <option value={0}>Tìm kiếm theo giá</option>
            <option value={1}>Giá tăng dần</option>
            <option value={2}>Giá giảm dần</option>
          </select>
        </div>
      </form>
      <h3 className="search--name">Kết quả tìm kiếm</h3>
      <div className="product">
        {productByName?.slice(0, 9).map((prod) => {
          return <ShoesCard prod={prod} key={prod.id} />;
        })}
      </div>
    </>
  );
};

export default Search;
