import React from "react";
import styled from "styled-components";
import monkey from "../data/image/monkey.png";
import { Body15, Header36 } from "../styledMixins";

const AnalysisCharacter = () => {
  return (
    <StyledAnalysisCharacter>
      <div className="characterLayout">
        <img className="character" src={monkey} />
      </div>
      <div>
        <div className="mainText">
          예술성이 높은 오로라 어린이에게 어울리는 상품이에요!
        </div>
        <div className="subText">
          오로라 어린이가 좋아할 360개의 장난감을 추천해 드립니다.
        </div>
      </div>
    </StyledAnalysisCharacter>
  );
};

const StyledAnalysisCharacter = styled.div`
  width: 1200px;
  height: 200px;
  margin-top: 40px;

  display: flex;
  align-items: center;

  .characterLayout {
    border: 2px solid #f5f5f5;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    margin-right: 40px;
  }

  .character {
    width: 170px;
    height: 127px;
    margin-left: 15px;
  }

  .mainText {
    ${Header36};
    width: 470px;
  }

  .subText {
    ${Body15};
    margin-top: 16px;
  }
`;

export default AnalysisCharacter;
