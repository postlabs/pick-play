import React, { useState } from "react";
import GNB from "../components/GNB";
import styled from "styled-components";
import {
  Body14,
  Gray400,
  Header14,
  Header36,
  MonoBlack,
} from "../styledMixins";
import PostList from "../components/PostList";
import bgImage from "../data/image/coummunity_bg.png";
import FBInputContainer from "../components/FBInputContainer";

const CommunityPage = () => {
  /* 
  const [content, _setContent] = useState("");

  
  const handleCommentUpdate =(e) => {
    _setContent(e.target.value);
  }
  const handleSubmit = (event) => {
    // if (window.innerWidth < 791 && message.length > 110) {
    //   setOverTextCount(true);
    //   WaringTextRef.current.focus();
    //   return;
    // }
    // checkErrorMessage();
    // if (
      // message !== "찾으시는 제품 이름이나 링크를 알려주세요." &&
    //   errorMessage === "" &&
    //   content.length > 1 &&
    //   content.length <= 110
    // ) {
    //   obj = {
    //     type: "feedback",
    //     username: "anonymous",
    //     comment: content,
    //   };
    //   const headers = {
    //     "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    
    //   };
   
    //   url =
    //     "https://4rexky5ex4.execute-api.ap-northeast-2.amazonaws.com/test/comment";
    //   axios
    //     .post(url, obj, { headers })
    //     .then((response) => {
    //       _setContent("");
    //       handleCommentGetAll();
    //       setRegister(true);
    //       window.scrollTo(0, 0);
    //       setTimeout(() => {
    //         location.reload();
    //       }, 3000);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
  };
  */
  return (
    <StyleListPage>
      <Content>
        <GNB />
        <Title>커뮤니티</Title>
        <PostList />
        <FBInputContainer />
      </Content>
      <BgStyle>
        <BgImg src={bgImage} alt="bgImage" />
      </BgStyle>
    </StyleListPage>
  );
};

const StyleListPage = styled.div`
  /* width: 1200px; */
  //height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  //justify-content: space-between;
  //position: fixed;
  //top: 0;
  //right: 0;
  //left: 0;
  //background-color: white;
  margin: 0 auto;
  //margin-top: 60px;
  //border: 1px solid black;
`;

const Content = styled.div`
  width: 792px;
  //border: 1px solid red;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
/* 
const FBInputContainer = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 24px;
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //border: 1px solid red;
  .flexElement {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 791px) {
    display: none;
  }
`;

const FBInput = styled.input`
  width: 672px;
  height: 36px;
  //color: var(--mountain-mist);
  border: 1px solid #bdbdbd;
  border: ${(props) =>
    props.messageCount >= 110 ? "1px solid red" : "1px solid #bdbdbd"};
  border-radius: 4px;
  &:focus {
    outline-width: 0;
    outline: none;
    ${MonoBlack}
  }
  padding-left: 12px;
  padding-right: 12px;
  ${Body14}

  ::placeholder {
    ${Body14}
    ${Gray400}
  }
`;

const FBButton = styled.button`
  width: 78px;
  height: 40px;
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Header14}
  background-color: ${(props) =>
    props.message === 0 || props.message >= 110 ? "#EBEBEB " : "#000000"};
  border: 1px solid var(--cararra);
  border-radius: 4px;
  color: ${(props) =>
    props.message === 0 || props.message >= 110 ? " #C2C2C2 " : "#FFFFFF"};
  cursor: ${(props) =>
    props.message === 0 || props.message > 110 ? "not-allowed" : "pointer"};
`;
*/
const BgStyle = styled.div`
  position: fixed;
  width: 344px;
  height: 626px;
  right: 0;
  bottom: 0;
  margin-right: 30px;
  margin-bottom: 30px;
`;

const BgImg = styled.img`
  width: 344px;
  height: 626px;
`;
export default CommunityPage;
