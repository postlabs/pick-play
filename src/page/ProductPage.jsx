import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import styled from "styled-components";
import GNB from "../components/GNB";
import AnalysisCharacter from "../components/AnalysisCharacter";
import products from "../data/json/products.json";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import Pagination from "react-js-pagination";
import { Header12 } from "../styledMixins";
const ProductPage = () => {
  const userInformation = useSelector((state) => state.userInfo.userInfo[0]);

  const matchProducts = products.filter((product) => {
    return userInformation && userInformation.product_list.includes(product.id);
  });

  const newMatchProducts = [];

  for (let i = 0; i < userInformation.product_list.length; i++) {
    for (let j = 0; j < matchProducts.length; j++) {
      if (userInformation.product_list[i] === matchProducts[j].id) {
        newMatchProducts.push(matchProducts[j]);
      }
    }
  }

  // for (let i = 0; i < userInformation.content_list.length; i++) {
  //   for (let j = 0; j < matchContent.length; j++) {
  //     if (userInformation.content_list[i] === matchContent[j].id) {
  //       newMatchContent.push(matchContent[j]);
  //     }
  //   }
  // }

  const [page, setPage] = useState(1);
  const [pagingProducts, setPagingProducts] = useState("");

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    if (userInformation === undefined) {
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    setPagingProducts(matchProducts.slice((page - 1) * 16, page * 16));
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <StyledProductPage>
      <div className="gnb">
        <GNB />
      </div>
      <AnalysisCharacter />

      <div className="productList">
        {newMatchProducts &&
          newMatchProducts.map((product) => <Product product={product} />)}
      </div>
      <Pagination
        className="pagination"
        activePage={page}
        itemsCountPerPage={16}
        totalItemsCount={matchProducts.length}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
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
    margin-left: 12px;
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
    margin: 0 5px;
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
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: black;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: black;
  }
`;

export default ProductPage;
