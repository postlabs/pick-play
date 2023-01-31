import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AnalysisCharacter from "../components/AnalysisCharacter";
import GNB from "../components/GNB";
import Youtube from "../components/Youtube";
import contents from "../data/json/contents.json";
import { Header12 } from "../styledMixins";
const YoutubePage = () => {
  const userInformation = useSelector((state) => state.userInfo.userInfo[0]);

  const matchContent = contents.filter((content) => {
    return userInformation && userInformation.content_list.includes(content.id);
  });

  const newMatchContent = [];

  for (let i = 0; i < userInformation.content_list.length; i++) {
    for (let j = 0; j < matchContent.length; j++) {
      if (userInformation.content_list[i] === matchContent[j].id) {
        newMatchContent.push(matchContent[j]);
      }
    }
  }

  const [page, setPage] = useState(1);
  const [pagingContents, setPagingContents] = useState("");

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    if (userInformation === undefined) {
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    setPagingContents(newMatchContent.slice((page - 1) * 16, page * 16));
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <StyledYoutubePage>
      <div className="gnb">
        <GNB />
      </div>
      <AnalysisCharacter />
      <div className="youtubeList">
        {pagingContents &&
          pagingContents.map((content) => <Youtube content={content} />)}
      </div>
      <Pagination
        className="pagination"
        activePage={page}
        itemsCountPerPage={16}
        totalItemsCount={matchContent.length}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </StyledYoutubePage>
  );
};

const StyledYoutubePage = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 1224px;
  justify-content: center;
  flex-direction: column;

  .gnb {
    margin-left: 12px;
  }

  .youtubeList {
    margin-top: 40px;
    margin-top: 4 0px;
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

export default YoutubePage;
