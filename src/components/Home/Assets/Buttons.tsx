import styled from "styled-components";
import { MdOutlineArrowForward } from "react-icons/md";

export type TextProp = {
  text?: string;
};

export const ApplyButton = ({ text }: TextProp) => {
  return (
    <ApplyBtn>
      <span>{text}</span>
      <MdOutlineArrowForward />
    </ApplyBtn>
  );
};

export const ApplyBtn = styled.button`
  display: flex;
  align-items: center;
  background: #011122;
  border: 1px solid #a0aaba;
  box-sizing: border-box;
  border-radius: 32px;
  color: inherit;
  padding: 0.75rem 1rem;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  cursor: pointer;
  span {
    margin-right: 0.75rem;
  }
`;
