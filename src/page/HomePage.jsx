import React from "react";
import GNB from "../components/GNB";
import styled from "styled-components";
import AnalysisCharacter from "../components/AnalysisCharacter";
import products from "../data/json/products.json";
import Product from "../components/Product";
import { DeepBlue100, Header32, Header40 } from "../styledMixins";
import BasicButton from "../components/BasicButton/BasicButton";
const HomePage = () => {
  return (
    <StyleListPage>
      <div className="gnb">
        <GNB />
      </div>
      <div className="banner">
        <div className="bannerTitle">
          <div>아이의 성향을 분석하고</div>
          <div>그 성향에 알맞는 상품과 컨텐츠를 제안해 드릴게요!</div>
        </div>
        <div className="bannerBtn">
          <BasicButton
            text={"성향 분석하러 가기"}
            size={"big"}
            width={"155px"}
            state={"default"}
          />
        </div>
      </div>
      <div className="productTitle">
        다른 고객님들이 많이 찾은 베스트 상품들
      </div>
      <div className="productList">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </StyleListPage>
  );
};

const StyleListPage = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 1224px;

  .gnb {
    margin-left: 11px;
  }

  .banner {
    /* width: 1920px; */
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    height: 500px;
    background-color: #ecf1fd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .bannerTitle {
      width: 1200px;
      ${Header40};
      margin-bottom: 40px;
    }

    .bannerBtn {
      width: 1200px;
    }
  }

  .productTitle {
    margin-top: 60px;
    ${Header32};
  }

  .productList {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
  }
`;

export default HomePage;
