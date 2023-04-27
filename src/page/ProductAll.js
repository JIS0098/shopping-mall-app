import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";

const ProductAll = () => {
  const productList = useSelector((state)=>state.product.productList)
  const [query, setQuery] = useSearchParams("");
  let dispatch =useDispatch();
  const getProducts = async () => {
    let searchQuery=query.get("q") ||"";
    dispatch(productAction.getProducts( searchQuery))
  };

  useEffect(() => {
    getProducts();
  }, [query]); //query가 바뀌면 다시 렌더링해줘

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
