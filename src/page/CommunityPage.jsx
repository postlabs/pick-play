import React, { useState, useEffect } from "react";
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
import axios from "axios";

const CommunityPage = () => {
    const [posts, setPosts] = useState([]);
    const [updated, setUpdated] = useState(false);
    const [rand, setRand] = useState(0);

    useEffect(() => {
        console.log('111', rand)
        setUpdated(false)
        let url = 'https://4rexky5ex4.execute-api.ap-northeast-2.amazonaws.com/test/aurora/?type=community'
        const headers = {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            Accept: "*/*",
          };
        axios.get(url).then((response) => {
            setPosts(response.data);
            setUpdated(true)
        }).catch((error) => {
            console.log(error);
        });
    }, [rand]);

    useEffect(() => {
        let temp_posts = JSON.parse(JSON.stringify(posts));
        for(let i=0; i<temp_posts.length; i++){
            temp_posts[i]['replyCount'] = 0;
            for(let j=0; j<temp_posts.length; j++){
                if(temp_posts[i].id === temp_posts[j].parent_id){            
                    temp_posts[i]['replyCount'] += 1
                }
            }
        }
        console.log(temp_posts)
        setPosts(temp_posts);
        console.log(posts)
    }, [updated]);
  return (
    <StyleListPage>
      <Content>
        <GNB />
        <Title>커뮤니티</Title>
        <PostList/>
        <FBInputContainer type={'community'} parent_id={0} setRand={setRand}/>
        
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
    z-index: -1;
`

const BgImg = styled.img`
  width: 344px;
  height: 626px;
`;
export default CommunityPage;
