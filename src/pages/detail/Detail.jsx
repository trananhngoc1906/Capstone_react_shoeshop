import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShoesCard from "../../components/ShoesCard/ShoesCard";
import { getProductByIdApi } from "../../redux/reducers/productReducer";

const Detail = () => {
  const { productDetail } = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

  const params = useParams();

  const getProductById = async () => {
    // const result = await axios({
    //   url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.id}`,
    //   method: "GET",
    // });

    const action = getProductByIdApi(params.id);
    dispatch(action);
  };

  useEffect(() => {
    getProductById();
  }, [params.id]);

  return (
    <>
      <div className="detail">
        <div className="carousel__left">
          <div className="carousel__left--content">
            <img src={productDetail?.image} alt="..." />
          </div>
        </div>
        <div className="carousel__right">
          <div className="carousel__right--content">
            <div className="carousel__right--name">{productDetail?.name}</div>
            <div className="carousel__right--text">
              {productDetail?.description}
            </div>
            <div className="carousel__right--avai">Available size</div>
            <div className="carousel__right--size">
              <div className="size">{productDetail?.size[0]}</div>
              <div className="size">{productDetail?.size[1]}</div>
              <div className="size">{productDetail?.size[2]}</div>
              <div className="size">{productDetail?.size[3]}</div>
              <div className="size">{productDetail?.size[4]}</div>
            </div>
            <div id="productPrice" className="carousel__right--price"></div>
            <div className="carousel__right--updown">
              <span>+</span>
              <span>1</span>
              <span>-</span>
            </div>
            <button className="carousel__right--add">Add to cart</button>
          </div>
        </div>
      </div>
      <div className="relatedProduct">
        <h1 className="relatedProduct--top">-----Relate Product-----</h1>
        <div className="product">
          {productDetail?.relatedProducts?.map((prod) => {
            return <ShoesCard key={prod.id} prod={prod} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Detail;
