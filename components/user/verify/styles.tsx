import styled, { keyframes } from "styled-components";
import { userTypes } from "../types";

const bounce = keyframes`
  0%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
`;

const rotate = keyframes`
  100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }
`;

const LoaderWrapper = styled.div`
  margin: 100px auto;
  width: 80px;
  height: 80px;
  position: relative;
  text-align: center;

  -webkit-animation: ${rotate} 2s infinite linear;
  animation: ${rotate} 2s infinite linear;
`;

const Dot1 = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #007afb;
  border-radius: 100%;

  -webkit-animation: ${bounce} 2s infinite ease-in-out;
  animation: ${bounce} 2s infinite ease-in-out;
`;
const Dot2 = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #007afb;
  border-radius: 100%;

  top: auto;
  bottom: 0;

  -webkit-animation: ${bounce} 2s infinite ease-in-out;
  animation: ${bounce} 2s infinite ease-in-out;
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const VerificationResultTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.4px;
  color: ${({ color }: userTypes) =>
    color === "success"
      ? " #4bb543"
      : color === "error"
      ? "crimson"
      : "#a0aaba"};
`;

export const VerificationResultDescription = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.4px;
  color: #324a64;
`;

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Dot1 />
      <Dot2 />
    </LoaderWrapper>
  );
};
