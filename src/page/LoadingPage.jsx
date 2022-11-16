import React, {useState, useEffect} from "react";
import {Header32, MonoBlack} from "../styledMixins"
import styled from "styled-components";
import GNB from "../components/GNB";
import Dot from "../components/Dot";

const LoadingPage = () => {
  const [count, setCount] = useState(0);
  const [circle1, setCircle1] = useState(false);
  const [circle2, setCircle2] = useState(false);
  const [circle3, setCircle3] = useState(false);
  useEffect(()=>{
    let timer = setInterval(()=>{ setCount(count + 1)}, 200);
    
    return () => {
      clearInterval(timer);
    }
  });

  useEffect(()=>{
    if( count % 4 === 0){
      setCircle1(false);
      setCircle2(false);
      setCircle3(false);
    }else if( count % 4 === 1){
      setCircle1(true);
      setCircle2(false);
      setCircle3(false);
    }else if( count % 4 === 2){
      setCircle1(true);
      setCircle2(true);
      setCircle3(false);
    }else if( count % 4 === 3){
      setCircle1(true);
      setCircle2(true);
      setCircle3(true);
    }
  }, [count]);
  return (
    <StyleListPage>
      <GNB />
      <LoadingBox>
        <DotBox>
          {circle1 ? <Dot color="#93D0F1"/> : <Dot color="#FFFFFFF"/>}
          {circle2 ? <Dot color="#F8B3C5"/> : <Dot color="#FFFFFFF"/>}
          {circle3 ? <Dot color="#FBB562"/> : <Dot color="#FFFFFFF"/>}
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
  //display: flex;
  //align-items: center;
  //justify-content: space-between;
  margin: 0 auto;
  margin-top: 60px;
  //border: 1px solid black;
  
`;

const LoadingBox = styled.div`
  width: 1200px;
  height: 156px;
  margin-top: 381px;
  //border: 1px solid black;
`;

const DotBox = styled.div`
  width: 66px
  height: 14px;
  display: flex;
  flex-direction: row;
  margin-bottom: 60px;
  //border: 1px solid black;
  justify-content: center;
  gap: 12px;
`;

const TextBox = styled.div`
  width: 500px
  height: 84px;
`;

const Text = styled.div`
  ${Header32}
  ${MonoBlack}
  display: flex;
  justify-content: center;
`;

export default LoadingPage;
