import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import Post from "../Post";
//import postData from "../../data/json/posts.json";
import axios from "axios";

function PostList(props) {
    const {posts, setRand} = props;
    
    return (
        <PostStyle>
            {posts.map((post, index) => (
                <Post key={index} data={post} setRand={setRand} />
            ))}
            
        </PostStyle>
    );
}

const PostStyle = styled.div`
  width: 792px;
  //height: 500px;
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

export default PostList;