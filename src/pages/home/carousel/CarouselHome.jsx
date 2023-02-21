import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  margin: 0,
  height: "300px",
  // color: "#fff",
  // lineHeight: "160px",
  // textAlign: "center",
  background: "#000000",
};
const CarouselHome = ({ arrProduct }) => {
  return (
    <div className="carousel">
      <Carousel autoplay={false}>
        <div>
          <img src="../img/76562-Black friday powerpoint.png" alt="..." />
        </div>
        <div>
          <img
            src="../img/buy-two-get-one-free-sale-poster-design-lettering-vector-illustration-169056080.jpg"
            alt="..."
          />
        </div>
        <div>
          <img
            src="../img/christmas-sale-banner-on-red-background-with-50-vector-12029358.jpg"
            alt="..."
          />
        </div>
        <div>
          <img src="../img/istockphoto-1285304992-612x612.jpg" alt="..." />
        </div>
        <div>
          <img src="../img/khung-gio-san-sale-shopee-1-1.png" alt="..." />
        </div>
        {/* <div>
    <img src="../img/january-shopping-day-sale-banner-promotion-discount-204264629.jpg" alt='...' />
    </div> */}
      </Carousel>
    </div>
  );
};

export default CarouselHome;
