import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams(); //This is used to get product id from the url which willwritten in App.js

  //Finding the selected product from the list
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className="">
      <Breadcrum product={product} />

      {/* using this prop we will display detail of the product */}
      <ProductDisplay product={product} />

      <DescriptionBox />

      <RelatedProducts />
    </div>
  );
}

export default Product;
