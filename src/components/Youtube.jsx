import React from "react";
import styled from "styled-components";
import exImg from "../data/image/loginImg.png";
import { Gray500, Header14, Header18, Title18 } from "../styledMixins";
const Youtube = ({ content }) => {
  console.log(content);
  return (
    <StyledYoutube>
      <a href={`https://www.youtube.com/watch?v=${content.id}`}>
        <div className="imgLayout">
          <img src={content.image} />
        </div>
        <div className="youtubeTitle">{content.name}</div>
        <div className="prices"></div>
      </a>
    </StyledYoutube>
  );
};

const StyledYoutube = styled.div`
  width: 282px;
  height: 350px;
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
    height: 200px;

    img {
      width: 282px;
      height: 200px;
    }
  }

  .youtubeTitle {
    margin-top: 16px;
    ${Title18};
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

export default Youtube;
