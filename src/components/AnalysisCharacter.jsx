import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import artCharacter from "../data/image/artCharacter.png";
import readCharacter from "../data/image/readCharacter.png";
import languageCharacter from "../data/image/languageCharacter.png";
import exerciseCharacter from "../data/image/exerciseCharacter.png";
import researchCharacter from "../data/image/researchCharacter.png";
import sensibilityCharacter from "../data/image/sensibilityCharacter.png";
import { Body15, Header36 } from "../styledMixins";

const AnalysisCharacter = () => {
  const userInformation = useSelector((state) => state.userInfo.userInfo[0]);

  const art = Math.floor(userInformation && userInformation.tendency1);
  const read = Math.floor(userInformation && userInformation.tendency2);
  const language = Math.floor(userInformation && userInformation.tendency3);
  const exercise = Math.floor(userInformation && userInformation.tendency4);
  const research = Math.floor(userInformation && userInformation.tendency5);
  const sensibility = Math.floor(userInformation && userInformation.tendency6);

  const artColor = "#FBB562";
  const readColor = "#FECA46";
  const languageColor = "#F26359";
  const exerciseColor = "#93D0F1";
  const researchColor = "#B13F69";
  const sensibilityColor = "#F8B3C5";

  let obj = {
    art: art,
    read: read,
    language: language,
    exercise: exercise,
    research: research,
    sensibility: sensibility,
  };

  let highRate = Object.keys(obj).find(
    (key) => obj[key] === Math.max(...Object.values(obj))
  );

  return (
    <StyledAnalysisCharacter>
      <div className="characterLayout">
        <img
          className="character"
          src={
            highRate === "art"
              ? artCharacter
              : highRate === "read"
              ? readCharacter
              : highRate === "language"
              ? languageCharacter
              : highRate === "exercise"
              ? exerciseCharacter
              : highRate === "research"
              ? researchCharacter
              : highRate === "sensibility"
              ? sensibilityCharacter
              : ""
          }
        />
      </div>
      <div>
        <div className="mainText">
          <span
            style={{
              color:
                highRate === "art"
                  ? artColor
                  : highRate === "read"
                  ? readColor
                  : highRate === "language"
                  ? languageColor
                  : highRate === "exercise"
                  ? exerciseColor
                  : highRate === "research"
                  ? researchColor
                  : highRate === "sensibility"
                  ? sensibilityColor
                  : "black",
            }}
          >
            {highRate === "art"
              ? "예술성"
              : highRate === "read"
              ? "주도성"
              : highRate === "language"
              ? "언어성"
              : highRate === "exercise"
              ? "운동성"
              : highRate === "research"
              ? "탐구성"
              : "감수성"}
          </span>
          {`이 높은 ${
            userInformation ? userInformation.name : "오로라"
          } 어린이에게 어울리는 ${
            window.location.href.includes("product") ? "상품" : "컨텐츠"
          }이에요!`}
        </div>
        <div className="subText">
          {`${
            userInformation ? userInformation.name : "오로라"
          } 어린이가 좋아할 360개의 ${
            window.location.href.includes("product") ? "장난감" : "컨텐츠"
          } 추천해 드립니다.`}
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
