import React from "react";
import styled from "styled-components";
import dia from "../data/image/dia.png";
import { Body13, Body14, Gray500, Header13, Header16 } from "../styledMixins";
const Explanation = ({ data }) => {
  return (
    <StyledExplanation>
      <div>
        <div></div>
        <div className="title">{data.title}</div>
        <div className="mainText">
          <div>{data.mainTextOne}</div>
          <div>{data.mainTextTwo}</div>
        </div>
        <div className="subTexts">
          <div className="subTextOne">다중 지능과의 상관성</div>
          <div className="subTextTwo">{data.subTextTwo}</div>
        </div>
      </div>
    </StyledExplanation>
  );
};

const StyledExplanation = styled.div`
  width: 447px;
  height: 98px;
  margin-bottom: 40px;

  .title {
    ${Header16}
  }

  .mainText {
    ${Body14}
    margin : 8px 0;
  }

  .subTexts {
    display: flex;

    .subTextOne {
      ${Header13};
      ${Gray500};
      margin-right: 8px;
    }

    .subTextTwo {
      ${Body13}
      ${Gray500};
    }
  }
`;
export default Explanation;
