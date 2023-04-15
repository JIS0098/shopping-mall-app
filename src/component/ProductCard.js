

import React from "react";

const ProductCard = ({item}) => {
  return (
    <div className="product-card">
      <img src={item?.img} />  {/*항상 아이템이 있는지 먼저 확인해야함*/} 
      <div>{item?.choice==true? "Concious choice":""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new==true? "신제품":""}</div>
    </div>
  );
};

export default ProductCard;

