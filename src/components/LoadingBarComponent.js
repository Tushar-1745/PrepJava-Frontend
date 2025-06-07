import React from "react";
import styled, { keyframes } from "styled-components";

// Define the keyframe animation for the loading bar
const loadingAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

// Styled components for the LoadingBar
const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #f3f3f3;
  z-index: 9999; /* Ensure it's above other content */
`;

const LoadingBar = styled.div`
  width: 0;
  height: 100%;
  background-color: #4caf50;
  animation: ${loadingAnimation} 3s linear infinite;
`;

const LoadingBarComponent = () => {
  return (
    <LoadingContainer>
      <LoadingBar />
    </LoadingContainer>
  );
};

export default LoadingBarComponent;
