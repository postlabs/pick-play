import React from "react";
import GNB from "../components/GNB";
import styled from "styled-components";

const HomePage = () => {
  return (
    <StyleListPage>
      <GNB />
      
    </StyleListPage>
  );
};

const StyleListPage = styled.div`
  margin: 0 auto;
`;

export default HomePage;
