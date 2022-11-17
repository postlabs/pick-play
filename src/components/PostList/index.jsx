import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import Post from "../Post";
//import postData from "../../data/json/posts.json";
import axios from "axios";

function PostList() {
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