import styled from "styled-components";
import { MdOutlineArrowForward } from "react-icons/md";
import Router from "next/router";
import { device } from "../../../../../Global";

type TextProp = {
  text?: string;
  color?: string;
};

export const ApplyButton = ({ text }: TextProp) => {
  const handleClick = () => {
    Router.push("/Investor/Onboarding");
  };
  return (
    <ApplyBtn onClick={handleClick}>
      <span>{text}</span>
      <MdOutlineArrowForward />
    </ApplyBtn>
  );
};

const ApplyBtn = styled.button`
  display: flex;
  align-items: center;
  background: #011122;
  border: 1px solid #a0aaba;
  box-sizing: border-box;
  border-radius: 4px;
  color: #ffffff;
  padding: 0.75rem 1rem;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  cursor: pointer;
  margin-top: 1rem;
  &:hover{
    filter: grayscale(50%) blur(0.1px);
    transition: .1s ease-in-out;
  }
  span {
    margin-right: 0.75rem;
  }
  @media ${device.mobileL} {
    font-size: 14px;
    line-height: 16px;
  }
`;
