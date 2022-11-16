import React from "react";
import styled from "styled-components";
import smallLeftArrow from "../../static/img/smallLeftArrow.png";
import smallRightArrow from "../../static/img/smallRightArrow.png";
import largeWhiteLeftArrow from "../../static/img/largeWhiteLeftArrow.png";
import largeWhiteRightArrow from "../../static/img/largeWhiteRightArrow.png";

function BasicButton(props) {
  const { text, size, arrow, width } = props;

  return (
    <StyledBasicButton {...props}>
      {arrow === "left" && (size === "big" || "large" || "medium") ? (
        <img className="largeWhiteLeftArrow" src={largeWhiteLeftArrow} />
      ) : arrow === "left" && size === "small" ? (
        <img className="smallLeftArrow" src={smallLeftArrow} />
      ) : (
        ""
      )}
      {text}
      {arrow === "right" && (size === "big" || "large" || "medium") ? (
        <img className="largeWhiteRightArrow" src={largeWhiteRightArrow} />
      ) : arrow === "right" && size === "small" ? (
        <img className="smallRightArrow" src={smallRightArrow} />
      ) : (
        ""
      )}
    </StyledBasicButton>
  );
}

const StyledBasicButton = styled.div`
  display: flex;
  font-family: "Pretendard Regular";
  align-items: center;
  justify-content: center;
  font-size: 13px;
  line-height: 18px;
  font-weight: 700;
  border-radius: 4px;
  width: ${(props) => (props.width ? props.width : "")};
  justify-content: ${(props) => (props.width ? "center" : "")};
  font-size: ${(props) =>
    props.size === "small"
      ? "13px"
      : props.size === "medium" || "large"
      ? "14px"
      : props.size === "big"
      ? "16px"
      : "16px"};
  color: ${(props) => (props.state === "default" ? "white" : "#C2C2C2")};
  background-color: ${(props) =>
    props.state === "default" ? "black" : " #EBEBEB"};
  padding: ${(props) =>
    props.size === "small" && props.arrow === "left"
      ? "7px 10px 7px 5px"
      : props.size === "medium" && props.arrow === "left"
      ? "6px 12px 6px 6px"
      : props.size === "large" && props.arrow === "left"
      ? "8px 14px 8px 8px"
      : props.size === "big" && props.arrow === "left"
      ? "12px 16px 12px 8px"
      : props.size === "small" && props.arrow === "right"
      ? "7px 5px 7px 10px"
      : props.size === "medium" && props.arrow === "left"
      ? "6px 6px 6px 12px"
      : props.size === "large" && props.arrow === "right"
      ? "8px 8px 8px 14px"
      : props.size === "big" && props.arrow === "right"
      ? "12px 8px 12px 16px"
      : props.size === "small"
      ? "7px 10px"
      : props.size === "medium"
      ? "12px 8px"
      : props.size === "large"
      ? "14px 10px"
      : props.size === "big"
      ? "16px 12px"
      : "16px 12px"};
  :hover {
    background: ${(props) => props.state !== "disabled" && "#555555"};
  }
  :active {
    background: ${(props) => props.state !== "disabled" && "#303030;"};
  }
  cursor: pointer;

  .largeWhiteLeftArrow {
    margin-right: 4px;
    width: 24px;
    height: 24px;
  }

  .largeWhiteRightArrow {
    margin-left: 4px;
    width: 24px;
    height: 24px;
  }

  .smallLeftArrow {
    margin-right: 9px;
  }

  .smallRightArrow {
    margin-right: 9px;
  }
`;

export default BasicButton;
