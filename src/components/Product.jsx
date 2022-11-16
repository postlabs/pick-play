import React from "react";
import styled from "styled-components";
import { Gray500, Header14, Header18 } from "../styledMixins";
import GNB from "./GNB";
import exImg from "../data/image/loginImg.png";
const Product = ({ product }) => {
  return (
    <StyledProduct>
      <a
        href={`https://www.toyplus.co.kr/goods/goods_view.php?goodsNo=${product.id}`}
      >
        <div className="imgLayout">
          <img src={product.image} />
          <div></div>
        </div>
        <div className="productName">{product.name}</div>
        <div className="prices">
          <div className="original">
            {product.price
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            원
          </div>
          <div className="discount">
            {((product.price * (100 - product.discount)) / 100)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            원
          </div>
        </div>
      </a>
    </StyledProduct>
  );
};

const StyledProduct = styled.div`
  width: 282px;
  height: 400px;
  padding: 0 12px;
  margin-bottom: 20px;

  a {
    color: black;
    text-decoration: none;
  }

  .imgLayout {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 282px;
    height: 282px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.05);

    img {
      width: 250px;
      height: 191px;
    }
  }

  .productName {
    margin-top: 16px;
    ${Header18};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .prices {
    display: flex;
    margin-top: 10px;

    .original {
      margin-right: 12px;
      text-decoration-line: line-through;
      ${Header14};
      ${Gray500};
    }

    .discount {
      ${Header14};
    }
  }
`;

export default Product;
