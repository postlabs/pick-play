import React from "react";
import LogoProbe from "../LogoProbe";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Body16, MonoBlack } from "../../styledMixins";
import { useDispatch, useSelector } from "react-redux";
import { getUserInformation } from "../../modules/userInfo";
import logoImg from "../../data/image/Pick&Play_Logo.png";
let menu = [
  {
    name: "성향 분석",
    link: "/loading",
  },
  {
    name: "상품",
    link: "/product",
  },
  {
    name: "콘텐츠",
    link: "/youtube",
  },
  {
    name: "커뮤니티",
    link: "/community",
  },
  {
    name: "로그아웃",
    link: "/login",
  },
];

let nonLoginMenu = [
  {
    name: "로그인",
    link: "/login ",
  },
];

function GNB() {
  const userInformation = useSelector((state) => state.userInfo.userInfo[0]);
  const dispatch = useDispatch();

  return (
    <GnbStyle>
      <LogoProbeStyle>
        <LogoProbeImg src={logoImg} alt="logo" />
      </LogoProbeStyle>

      <MenuStyle>
        {userInformation
          ? menu.map((item, index) => {
              return (
                <Menu key={index}>
                  <MenuDiv>{item.name}</MenuDiv>
                </Menu>
              );
            })
          : nonLoginMenu.map((item, index) => {
              return (
                <Menu key={index}>
                  <MenuDiv>{item.name}</MenuDiv>
                </Menu>
              );
            })}
      </MenuStyle>
    </GnbStyle>
  );
}

const GnbStyle = styled.div`
  width: 1200px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px none;
  justify-content: space-between;
  /* position: fixed;
  top: 0;
  right: 0;
  left: 0; */
  background-color: white;
`;

const MenuStyle = styled.ul`
  list-style: none;
`;

const Menu = styled.li`
  float: left;
`;

const MenuDiv = styled.div`
  width: 60px;
  height: 24px;
  ${Body16}
  ${MonoBlack}
  margin-left: 40px;
  //border: 1px solid red;
  text-align: center;
`;

const LogoProbeStyle = styled.div`
  height: 45px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  //border: 1px none;
  //border: 1px solid red;

  margin-top: 14;
  margin-left: 40;
`;

const LogoProbeImg = styled.img`
  width: 200px;
  height: 45px;
  min-height: 36px;
  margin-top: 0px;

  line-height: 36px;
  white-space: nowrap;
`;

export default GNB;
