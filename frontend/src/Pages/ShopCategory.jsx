import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

import dropdown_icon from "../Components/Assets/dropdown_icon.png";

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  
  return (
    <div className="shop-category">
      <img className="shopCategory-banner" src={props.banner} alt="banner" />

      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>

        <div className="shopCategory-sort">
          Sort by <img src={dropdown_icon} alt="dropdown icon" />
        </div>
      </div>

      <div className="shopCategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadMore">
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory;
