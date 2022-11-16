import React from "react";
import GNB from "../components/GNB";
import styled from "styled-components";
import { Header36, MonoBlack } from "../styledMixins";
import PostList from "../components/PostList";

const CommunityPage = () => {
  return (
    <StyleListPage>
      <GNB />
      <Content>
        <Title>커뮤니티</Title>
        <PostList />
      </Content>
    </StyleListPage>
  );
};

const StyleListPage = styled.div`
  width: 1200px;
  height: 500px;
  //display: flex;
  //align-items: center;
  //justify-content: space-between;
  //position: fixed;
  //top: 0;
  //right: 0;
  //left: 0;
  //background-color: white;
  margin: 0 auto;
  margin-top: 60px;
  //border: 1px solid black;
`;

const Content = styled.div`
  width: 792px;
  //border: 1px solid red;
  margin: 0 auto;
`;

const Title = styled.div`
  width: 125px;
  height: 46px;
  margin-top: 40px;
  //border: 1px solid red;
  display: flex;
  align-items: center;
  ${Header36}
  ${MonoBlack}
`;
export default CommunityPage;
