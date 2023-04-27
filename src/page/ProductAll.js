import React, { useEffect,} from "react";
import ProductCard from "../component/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const productList=useSelector((state)=>state.product.productList);
  const [query, setQuery] = useSearchParams("");
  const dispatch = useDispatch((state)=>state.productList)
  const getProducts = async () => {
    let searchQuery=query.get("q") ||"";
    dispatch(productAction.getProducts(searchQuery));
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
