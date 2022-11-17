import React, { Fragment } from "react";
import styled from "styled-components";

import {
  Header14,
  Header12,
  Body14,
  Body12,
  MonoBlack,
  Gray600,
} from "../../styledMixins";
function Dot(props) {
  const { color } = props;

  return (
    <Fragment>
      {color === "#93D0F1" ? <Circle1 /> : null}
      {color === "#F8B3C5" ? <Circle2 /> : null}
      {color === "#FBB562" ? <Circle3 /> : null}
      {color == "#FFFFFFF" ? <Circle4 /> : null}
    </Fragment>
  );
}

const Circle1 = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #93d0f1;
`;

const Circle2 = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #f8b3c5;
`;

const Circle3 = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fbb562;
`;

const Circle4 = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: "#FFFFFFF";
  //border: 1px solid black;
`;

export default Dot;
