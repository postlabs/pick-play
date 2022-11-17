import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import styled from "styled-components";
import orangeChip from "../data/image/orangeChip.png";
import jamongChip from "../data/image/jamongChip.png";
import pinkChip from "../data/image/pinkChip.png";
import yellowChip from "../data/image/yellowChip.png";
import skyChip from "../data/image/skyChip.png";
import purpleChip from "../data/image/purpleChip.png";
import GrayBasicButton from "./BasicButton/GrayBasicButton";
import {
  Header12,
  Header20,
  Header32,
  Header36,
  Title16,
} from "../styledMixins";
import Explanation from "./Explanation";
import explanaitonData from "../data/json/explanation.json";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import artCharacter from "../data/image/artCharacter.png";
import readCharacter from "../data/image/readCharacter.png";
import languageCharacter from "../data/image/languageCharacter.png";
import exerciseCharacter from "../data/image/exerciseCharacter.png";
import researchCharacter from "../data/image/researchCharacter.png";
import sensibilityCharacter from "../data/image/sensibilityCharacter.png";
const AnalysisChart = () => {
  const userInformation = useSelector((state) => state.userInfo.userInfo[0]);
  const navigate = useNavigate();
  Chart.register(ArcElement);

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

  let data = {
    datasets: [
      {
        data: [art, read, language, exercise, research, sensibility],
        backgroundColor: [
          artColor,
          readColor,
          languageColor,
          exerciseColor,
          researchColor,
          sensibilityColor,
        ],
        cutout: "65%",
        // cutoutPercentage: 15,
      },
    ],
  };

  return (
    <StyledAnalysisChart>
      <div className="topFlexWrap">
        <div className="doughnut">
          <Doughnut data={data} />
          <div className="characterLayout">
            <img
              className="chartInImg"
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
        </div>
        <div className="rightText">
          <div className="mainAnalysisText">
            {`${userInformation ? userInformation.name : "오로라"} 어린이는`}{" "}
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
              {`${
                highRate === "art"
                  ? "예술성"
                  : highRate === "read"
                  ? "주도성"
                  : highRate === "language"
                  ? "언어성"
                  : highRate === "exercise"
                  ? "운동성"
                  : highRate === "research"
                  ? "탐구성"
                  : "감수성"
              }`}
            </span>
            이
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
              {`${Math.max(
                art,
                read,
                language,
                exercise,
                research,
                sensibility
              )}%`}
            </span>
            로 가장 높네요!
          </div>
          <div className="middleFlexWrap">
            <div className="bottomFlexWrap left">
              <div className="leftText">
                <img className="chip" src={orangeChip} />
                <div>예술성</div>
              </div>
              <div style={{ color: "#FBB562" }} className="percent">
                {art}%
              </div>
            </div>
            <div className="bottomFlexWrap">
              <div className="leftText">
                <img className="chip" src={yellowChip} />
                <div>주도성</div>
              </div>
              <div style={{ color: "#FECA46" }} className="percent">
                {" "}
                {read}%
              </div>
            </div>
            <div className="bottomFlexWrap left">
              <div className="leftText">
                <img
                  style={{ color: "#FBB562" }}
                  className="chip"
                  src={jamongChip}
                />
                <div>언어성</div>
              </div>
              <div style={{ color: "#F26359" }} className="percent">
                {" "}
                {language}%
              </div>
            </div>
            <div className="bottomFlexWrap">
              <div className="leftText">
                <img className="chip" src={skyChip} />
                <div>운동성</div>
              </div>
              <div style={{ color: "#93D0F1" }} className="percent">
                {" "}
                {exercise}%
              </div>
            </div>
            <div className="bottomFlexWrap left">
              <div className="leftText">
                <img className="chip" src={purpleChip} />
                <div>탐구성</div>
              </div>
              <div style={{ color: "#B13F69" }} className="percent">
                {" "}
                {research}%
              </div>
            </div>
            <div className="bottomFlexWrap">
              <div className="leftText">
                <img className="chip" src={pinkChip} />
                <div>감수성</div>
              </div>
              <div style={{ color: "#F8B3C5" }} className="percent">
                {" "}
                {sensibility}%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomExplanation">
        <div className="characteristicText">각 성향의 대한 특징들</div>
        <div className="explanationList">
          {explanaitonData.map((data) => (
            <Explanation data={data} />
          ))}
        </div>
      </div>
      <div className="bottomBtn">
        <div className="bottomBtnLeft">
          <GrayBasicButton
            onClick={() => navigate("/product")}
            text={"내 성향에 맞는 상품 보러가기"}
            size={"medium"}
            state={"default"}
            arrow={"right"}
          />
        </div>
        <div className="bottomBtnRight">
          <GrayBasicButton
            onClick={() => navigate("/youtube")}
            text={"내 성향에 맞는 컨텐츠 보러가기"}
            size={"medium"}
            state={"default"}
            arrow={"right"}
          />
        </div>
      </div>
    </StyledAnalysisChart>
  );
};

const StyledAnalysisChart = styled.div`
  display: flex;
  margin: 0 auto;

  flex-direction: column;
  margin-top: 50px;

  .chartInImg {
    width: 170px;
    height: 127px;
  }

  .characterLayout {
    border: 2px solid #f5f5f5;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 40px;
    position: absolute;
    top: 23.5%;
    left: 23.5%;
  }

  .topFlexWrap {
    /* justify-content: center; */
    display: flex;
    align-items: center;
  }

  .middleFlexWrap {
    display: flex;
    flex-wrap: wrap;
    width: 520px;
  }

  .mainAnalysisText {
    ${Header36}
    width: 380px;
    margin-bottom: 40px;
  }

  .bottomFlexWrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 215px;
    height: 28px;
    margin-bottom: 26px;
  }

  .doughnut {
    width: 384px;
    height: 384px;
    position: relative;
  }

  .rightText {
    margin-left: 80px;
  }

  .chip {
    width: 18px;
    height: 18px;
    margin-right: 8px;
  }

  .leftText {
    display: flex;
    align-items: center;
    ${Title16}
  }

  .percent {
    ${Header20};
  }

  .left {
    margin-right: 90px;
  }

  .characteristicText {
    margin-top: 80px;
    margin-bottom: 40px;
    ${Header32};
  }

  .bottomExplanation {
    width: 975px;
    display: flex;
    flex-direction: column;
  }

  .explanationList {
    display: flex;
    flex-wrap: wrap;
  }

  .bottomBtn {
    margin-top: 20px;
    display: flex;
    margin-bottom: 120px;

    .bottomBtnLeft {
      margin-right: 16px;
    }
  }
  //버튼에 마진탑 20
`;

export default AnalysisChart;
