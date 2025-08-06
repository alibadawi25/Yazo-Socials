import React from "react";
import styled from "styled-components";

const TiktokButton = ({ onClick = () => {}, className = "" }) => {
  return (
    <StyledWrapper className={className}>
      <button className="Btn" onClick={onClick}>
        <span className="svgContainer">
          <svg
            fill="white"
            className="svgIcon"
            viewBox="0 0 24 24"
            height="1.2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.294-1.95-1.294-3.201V1H13.09v14.009c0 2.647-2.153 4.8-4.8 4.8s-4.8-2.153-4.8-4.8 2.153-4.8 4.8-4.8c.48 0 .943.071 1.378.203V7.047a8.146 8.146 0 0 0-1.378-.117c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8V8.562a9.32 9.32 0 0 0 3.447 1.438v-3.2c-1.049 0-2.034-.4-2.786-1.125l-.636-.113z" />
          </svg>
        </span>
        <span className="BG" />
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .Btn {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: relative;
    /* overflow: hidden; */
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .svgContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    backdrop-filter: blur(4px);
    letter-spacing: 0.8px;
    border-radius: 10px;
    transition: all 0.3s;
    border: 1px solid rgba(156, 156, 156, 0.466);
  }

  .svgIcon {
    fill: white !important;
  }

  .BG {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #000000 0%, #0a0a0a 60%, #1a0a1a 100%);
    z-index: -1;
    border-radius: 9px;
    pointer-events: none;
    transition: all 0.3s;
  }

  .Btn:hover .BG {
    transform: rotate(35deg);
    transform-origin: bottom;
  }

  .Btn:hover .svgContainer {
    background-color: rgba(156, 156, 156, 0.466);
  }
`;

export default TiktokButton;
