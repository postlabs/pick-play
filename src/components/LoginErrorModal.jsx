import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Body14, Header20 } from "../styledMixins";
import BasicButton from "./BasicButton/BasicButton";

const StyledLoginModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  .container {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;

    /* 모달창 크기 */
    width: 328px;
    height: 184px;

    /* 최상단 위치 */
    z-index: 999;

    /* 중앙 배치 */
    /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
    /* translate는 본인의 크기 기준으로 작동한다. */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* 모달창 디자인 */
    background-color: #f2f2f2;

    border-radius: 8px;

    .mainText {
      ${Header20}
      margin-left : 24px;
    }

    .subText {
      margin: 22px 0;
      ${Body14}
      margin-left : 24px;
    }

    .okBtn {
      margin-left: 22px;
    }
  }

  /* 모달창 내부 X버튼 */
  .close {
    display: block;
    cursor: pointer;
    position: absolute;
    right: 29px;
    top: 29px;
    width: 16.33px;
    height: 16.33px;
  }
`;

const LoginErrorModal = ({ setModalOpen }) => {
  // 모달 끄기 (X버튼 onClick 이벤트 핸들러)
  const closeModal = () => {
    setModalOpen(false);
  };

  // 모달 외부 클릭시 끄기 처리
  // Modal 창을 useRef로 취득
  const modalRef = useRef(null);

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (e) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };

    // 이벤트 핸들러 등록
    document.addEventListener("mousedown", handler);
    // document.addEventListener('touchstart', handler); // 모바일 대응

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener("mousedown", handler);
      // document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  });

  return (
    <StyledLoginModal>
      <div ref={modalRef} className="container">
        <div className="mainText">가입되지 않은 회원님입니다.</div>
        <div className="subText">먼저 회원 가입 후 로그인 해주세요!</div>
        <BasicButton
          onClick={closeModal}
          className="okBtn"
          text={"확인"}
          state={"default"}
          width={"260px"}
        />
      </div>
    </StyledLoginModal>
  );
};

export default LoginErrorModal;
