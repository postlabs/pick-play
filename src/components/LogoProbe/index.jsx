import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImg from "../../data/image/Pick&Play_Logo.png";

function LogoProbe() {
  return (
    <LogoProbeStyle>
      <Link style={{ textDecoration: "none" }} to={"/"}>
        <LogoProbeImg src={logoImg} alt="logo" />
          
        
      </Link>
    </LogoProbeStyle>
  );
}

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

export default LogoProbe;
