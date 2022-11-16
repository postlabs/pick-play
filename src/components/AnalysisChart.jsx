import React from "react";
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
const AnalysisChart = () => {
  Chart.register(ArcElement);

  let data = {
    datasets: [
      {
        data: [50, 20, 30, 25, 11, 22],
        backgroundColor: [
          "#FBB562",
          "#F8B3C5",
          "#93D0F1 ",
          "#F26359",
          "#B13F69",
          "#FECA46",
        ],
        cutout: "65%",
        cutoutPercentage: 15,
      },
    ],
  };

  return (
    <StyledAnalysisChart>
      <div className="topFlexWrap">
        <div className="doughnut">
          <Doughnut data={data} />
        </div>
        <div className="rightText">
          <div className="mainAnalysisText">
            오로라 어린이는 예술성이 21%로 가장 높네요!
          </div>
          <div className="middleFlexWrap">
            <div className="bottomFlexWrap left">
              <div className="leftText">
                <img className="chip" src={orangeChip} />
                <div>예술성</div>
              </div>
              <div className="percent">21%</div>
            </div>
            <div className="bottomFlexWrap">
              <div className="leftText">
                <img className="chip" src={yellowChip} />
                <div>주도성</div>
              </div>
              <div className="percent">21%</div>
            </div>
            <div className="bottomFlexWrap left">
              <div className="leftText">
                <img className="chip" src={jamongChip} />
                <div>언어성</div>
              </div>
              <div className="percent">21%</div>
            </div>
            <div className="bottomFlexWrap">
              <div className="leftText">
                <img className="chip" src={skyChip} />
                <div>운동성</div>
              </div>
              <div className="percent">21%</div>
            </div>
            <div className="bottomFlexWrap left">
              <div className="leftText">
                <img className="chip" src={purpleChip} />
                <div>탐구성</div>
              </div>
              <div className="percent">21%</div>
            </div>
            <div className="bottomFlexWrap">
              <div className="leftText">
                <img className="chip" src={pinkChip} />
                <div>감수성</div>
              </div>
              <div className="percent">21%</div>
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
            text={"내 성향에 맞는 상품 보러가기"}
            size={"medium"}
            state={"default"}
            arrow={"right"}
          />
        </div>
        <div className="bottomBtnRight">
          <GrayBasicButton
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
  .topFlexWrap {
    justify-content: center;
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
    width: 408px;
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

    .bottomBtnLeft {
      margin-right: 16px;
    }
  }
  //버튼에 마진탑 20
`;

export default AnalysisChart;
