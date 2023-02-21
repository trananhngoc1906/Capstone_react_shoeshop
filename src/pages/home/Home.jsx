import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllProductApi } from "../../redux/reducers/productReducer";
import Product from "./product/Product";
import CarouselHome from "./carousel/CarouselHome";

const Home = () => {
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const getAllProduct = async () => {
    // const result = await axios({
    //   url: "https://shop.cyberlearn.vn/api/Product",
    //   method: "GET",
    // });

    // const action = {
    //   type: 'productReducer/getProductAction',
    //   payload: result.data.content,
    // }

    const action = getAllProductApi;
    dispatch(action);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <>
      <CarouselHome arrProduct={arrProduct} />
      <h1 className="text-center mt-5 display-2">Product Feature</h1>
      <Product arrProduct={arrProduct} />
    </>
  );
};

export default Home;
