import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AnalysisChart from "../components/AnalysisChart";
import GNB from "../components/GNB";
const AnalysisPage = () => {
  const userInformation = useSelector((state) => state.userInfo.userInfo[0]);

  useEffect(() => {
    if (userInformation === undefined) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <StyledAnalysisPage>
      <div className="gnb">
        <GNB />
      </div>
      <AnalysisChart />
    </StyledAnalysisPage>
  );
};

const StyledAnalysisPage = styled.div`
  .gnb {
    margin-left: 12px;
  }
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 1224px;
  justify-content: center;
  flex-direction: column;
`;
export default AnalysisPage;
