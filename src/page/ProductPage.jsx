import React from "react";
import Product from "../components/Product";
import styled from "styled-components";
import GNB from "../components/GNB";
import AnalysisCharacter from "../components/AnalysisCharacter";
import products from "../data/json/products.json";
const ProductPage = () => {
  console.log(products);
  return (
    <StyledProductPage>
      <div className="gnb">
        <GNB />
      </div>
      <AnalysisCharacter />
      <div className="productList">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </StyledProductPage>
  );
};

const StyledProductPage = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 1224px;

  .gnb {
    margin-left: 11px;
  }

  .productList {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
  }
`;

export default ProductPage;
