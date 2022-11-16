import React from "react";
import styled from "styled-components";
import AnalysisChart from "../components/AnalysisChart";
import GNB from "../components/GNB";
const AnalysisPage = () => {
  return (
    <StyledAnalysisPage>
      <GNB />
      <AnalysisChart />
    </StyledAnalysisPage>
  );
};

const StyledAnalysisPage = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 1224px;
  justify-content: center;
  flex-direction: column;
`;
export default AnalysisPage;
