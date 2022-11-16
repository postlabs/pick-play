import React from "react";
import styled from "styled-components";
import AnalysisCharacter from "../components/AnalysisCharacter";
import GNB from "../components/GNB";
import Youtube from "../components/Youtube";
import contents from "../data/json/contents.json";
const YoutubePage = () => {
  console.log(contents);
  return (
    <StyledYoutubePage>
      <div className="gnb">
        <GNB />
      </div>
      <AnalysisCharacter />
      <div className="youtubeList">
        {contents.map((content) => (
          <Youtube content={content} />
        ))}
      </div>
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
    margin-left: 11px;
  }

  .youtubeList {
    margin-top: 40px;
    margin-top: 4 0px;
    display: flex;
    flex-wrap: wrap;
  }
`;

export default YoutubePage;
