import React, { useEffect, useState } from "react";
import GNB from "../components/GNB";
import styled from "styled-components";
import AnalysisCharacter from "../components/AnalysisCharacter";
import products from "../data/json/products.json";
import Product from "../components/Product";
import { DeepBlue100, Header12, Header32, Header40 } from "../styledMixins";
import BasicButton from "../components/BasicButton/BasicButton";
import Pagination from "react-js-pagination";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const [page, setPage] = useState(1);
  const [pagingProducts, setPagingProducts] = useState("");

  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    setPagingProducts(products.slice((page - 1) * 16, page * 16));
    window.scrollTo(0, 600);
  }, [page]);

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
            onClick={() => navigate("/loading")}
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
        {pagingProducts &&
          pagingProducts.map((product) => <Product product={product} />)}
      </div>
      <Pagination
        className="pagination"
        activePage={page}
        itemsCountPerPage={16}
        totalItemsCount={products.length}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
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
    margin-left: 12px;
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
    margin-left: 12px;
    ${Header32};
  }

  .productList {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 120px;
    ${Header12}
  }

  ul {
    list-style: none;
    padding: 0;
    ${Header12}
  }

  ul.pagination li {
    display: inline-block;
    margin: 0 3px;
    cursor: pointer;
    width: 28px;
    height: 28px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    ${Header12}
    border-radius: 4px;
  }

  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
    border-radius: 4px;
    ${Header12}
  }

  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
    border-radius: 4px;
  }

  ul.pagination li a {
    text-decoration: none;
    color: black;
    /* margin-top: 1px; */
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: black;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: gray;
  }

  .page-selection {
    width: 48px;
    height: 30px;
    /* color: black; */
  }
`;

export default HomePage;
