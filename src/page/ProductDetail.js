import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";
const ProductDetail = () => {
  let { id } = useParams();
  let dispatch=useDispatch();
  const product =useSelector((state)=>state.product.detail)
  const getProductDetail = async () => {
    dispatch(productAction.getProductDetail(id));
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div className="product-title">{product?.title}</div>
          <div className="product-price">₩ {product?.price}</div>
          <div className="product-new">
            {product?.choice === true ? "Conscious choice" : ""}
          </div>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button className="add-but"> 추가</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
