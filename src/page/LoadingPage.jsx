import React, { useState, useEffect } from "react";
import { Header32, MonoBlack } from "../styledMixins";
import styled from "styled-components";
import GNB2 from "../components/GNB/GNB2";
import Dot from "../components/Dot";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LoadingPage = () => {
  const userInformation = useSelector((state) => state.userInfo.userInfo[0]);

  const [count, setCount] = useState(0);
  const [circle1, setCircle1] = useState(false);
  const [circle2, setCircle2] = useState(false);
  const [circle3, setCircle3] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    let timer = setInterval(() => {
      setCount(count + 1);
    }, 200);

    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    if (count % 4 === 0) {
      setCircle1(false);
      setCircle2(false);
      setCircle3(false);
    } else if (count % 4 === 1) {
      setCircle1(true);
      setCircle2(false);
      setCircle3(false);
    } else if (count % 4 === 2) {
      setCircle1(true);
      setCircle2(true);
      setCircle3(false);
    } else if (count % 4 === 3) {
      setCircle1(true);
      setCircle2(true);
      setCircle3(true);
    }
  }, [count]);

  useEffect(() => {
    setTimeout(() => {
      navigate("/analysis");
    }, 3000);
  }, []);

  useEffect(() => {
    if (userInformation === undefined) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <StyleListPage>
      <GNB2 />
      <LoadingBox>
        <DotBox>
          {circle1 ? <Dot color="#93D0F1" /> : <Dot color="#FFFFFFF" />}
          {circle2 ? <Dot color="#F8B3C5" /> : <Dot color="#FFFFFFF" />}
          {circle3 ? <Dot color="#FBB562" /> : <Dot color="#FFFFFFF" />}
        </DotBox>
        <TextBox>
          <Text>아이의 성향을 분석하고 있어요!</Text>
          <Text>잠시만 기다려 주세요.</Text>
        </TextBox>
      </LoadingBox>
    </StyleListPage>
  );
};

const StyleListPage = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;

  //border: 1px solid black;
`;

const LoadingBox = styled.div`
  width: 1200px;
  height: 156px;
  margin-top: 381px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DotBox = styled.div`
  width: 66px;
  height: 14px;
  display: flex;
  flex-direction: row;
  margin-bottom: 60px;

  justify-content: center;
  gap: 12px;
`;

const TextBox = styled.div`
  width: 500px;
  height: 84px;
`;

const Text = styled.div`
  ${Header32}
  ${MonoBlack}
  display: flex;
  justify-content: center;
`;

export default LoadingPage;
