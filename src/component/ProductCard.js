import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
    const showDetail =()=>{
      navigate(`/product/${item.id}`)

    }
  return (
    <div>
      <div className="product-card" onClick={showDetail}>
        <img src={item?.img} /> {/*항상 아이템이 있는지 먼저 확인해야함*/}
        <div className="product-choice">{item?.choice == true ? "Conscious choice" : ""}</div>
        <div >{item?.title}</div>
        <div >{item?.price}</div>
        <div >{item?.new == true ? "신제품" : ""}</div>
      </div>
    </div>
  );
};

export default ProductCard;
