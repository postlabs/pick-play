import React, {Fragment, useState} from "react";
import styled from "styled-components";
import {Header14, Header12, Body14, Body12, MonoBlack, Gray600} from "../../styledMixins"
import FBInputContainer from "../FBInputContainer";
import postData from "../../data/json/posts.json";

function Post(props) {
    const { data, setRand } = props;
    //console.log(data)

    const [click, setClick] = useState(false);
    const onClick = () => {
        setClick(!click);
        //console.log(click)
    }
    
    return (
        <Fragment>
            {data.type === 'community' &&
                <PostStyle>
                    <LeftStyle>
                        <Img src={postData[0].img}/>
                    </LeftStyle>
                    <RightStyle>
                        <NameStyle>{data.username}</NameStyle>
                        <ArticleStyle>{data.comment}</ArticleStyle>
                        <InfoStyle>
                            <Date>{data.time.split('-')[0] + '.' + data.time.split('-')[1] + '.' + data.time.split('-')[2].split(' ')[0]}</Date>
                            <Reply>
                                <ReplyText>댓글</ReplyText>
                                <ReplyCount>{data.replyCount}</ReplyCount>
                            </Reply>
                            <ReplyBtn onClick={onClick}>댓글 달기</ReplyBtn>
                        </InfoStyle>
                    </RightStyle>
                </PostStyle>
            }
            {data.type === 'reply' &&
                <ReplyStyle>
                    <LeftStyle>
                        <Img src={postData[0].img}/>
                    </LeftStyle>
                    <RightStyle>
                        <NameStyle>{data.username}</NameStyle>
                        <ArticleStyle>{data.comment}</ArticleStyle>
                        <InfoStyle>
                            <Date>{data.time.split('-')[0] + '.' + data.time.split('-')[1] + '.' + data.time.split('-')[2].split(' ')[0]}</Date>
                        </InfoStyle>
                    </RightStyle>
                </ReplyStyle>
            }
            {click && <FBInputContainer type={'reply'} parent_id={data.id} setRand={setRand} setClick={setClick}/>}
        </Fragment>
    );
}

const PostStyle = styled.div`
    width: 792px;
    min-height: 106px;
    display: flex;
    flex-direction: row;
    
    //border: 1px solid black;
    border-radius: 6px;
    background-color: #FAFAFA;
    margin-bottom: 14px;
`;

const ReplyStyle = styled.div`
    width: 762px;
    min-height: 106px;
    display: flex;
    flex-direction: row;
    
    //border: 1px solid black;
    border-radius: 6px;
    background-color: #FAFAFA;
    margin-bottom: 14px;
    margin-left: 30px;
`;

const LeftStyle = styled.div`
    width: 66px;
`;
const RightStyle = styled.div`
    width: 726px;
    //border: 1px solid black;
`;

const Img = styled.img`
    width: 38px;
    height: 38px;
    margin-top: 16px;
    margin-left: 16px;
    //border: 1px solid black;
    border-radius: 50%;
`;

const NameStyle = styled.div`
    width: 710px;
    height: 20px;
    margin-top: 16px;
    //border: 1px solid black;
    ${Header14}
    ${MonoBlack}
`;

const ArticleStyle = styled.div`
    //border: 1px solid black;
    ${Body14}
    ${MonoBlack}
    margin-right: 16px;
    margin-top: 8px;
`;

const InfoStyle = styled.div`
    //border: 1px solid black;
    display: flex;
    flex-direction: row;
    margin-top: 8px;
    margin-bottom: 16px;
`;

const Date = styled.div`
    //border: 1px solid black;
    ${Body12}
    ${Gray600}
`;

const Reply = styled.div`
    //border: 1px solid black;
    display: flex;
    flex-direction: row;
    margin-left: 12px;
    ${Header12}
    ${Gray600}
`;
const ReplyText = styled.div`
    //border: 1px solid black;
    ${Body12}
    ${Gray600}
`;
const ReplyCount = styled.div`
    //border: 1px solid black;
    ${Header12}
    ${Gray600}
    margin-left: 3px;
`;

const ReplyBtn = styled.div`
    //border: 1px solid black;
    ${Header12}
    ${Gray600}
    margin-left: 12px;
`;

export default Post;