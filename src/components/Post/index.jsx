import React, {Fragment, useState} from "react";
import styled from "styled-components";
import {Header14, Header12, Body14, Body12, MonoBlack, Gray600} from "../../styledMixins"
import FBInputContainer from "../FBInputContainer";

function Post(props) {
    const { data } = props;
    console.log(data.img)

    const [click, setClick] = useState(false);
    const onClick = () => {
        setClick(!click);
    }
    return (
        <Fragment>
            <PostStyle>
                <LeftStyle>
                    <Img src={data.img}/>
                </LeftStyle>
                <RightStyle>
                    <NameStyle>{data.name}</NameStyle>
                    <ArticleStyle>{data.article}</ArticleStyle>
                    <InfoStyle>
                        <Date>{data.date}</Date>
                        <Reply>
                            <ReplyText>댓글</ReplyText>
                            <ReplyCount>{data.ReplyCount}</ReplyCount>
                        </Reply>
                        <ReplyBtn onClick={onClick}>댓글 달기</ReplyBtn>
                    </InfoStyle>
                </RightStyle>
            </PostStyle>
            {click && <FBInputContainer/>}
        </Fragment>
    );
}

const PostStyle = styled.div`
    width: 792px;
    height: 126px;
    display: flex;
    flex-direction: row;
    
    //border: 1px solid black;
    border-radius: 6px;
    background-color: #FAFAFA;
    margin-bottom: 14px;
`;

const LeftStyle = styled.div`
    width: 82px;
`;
const RightStyle = styled.div`
    width: 710px;
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
`;

const InfoStyle = styled.div`
    //border: 1px solid black;
    display: flex;
    flex-direction: row;
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