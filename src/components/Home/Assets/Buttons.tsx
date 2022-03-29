import styled from "styled-components";
import { MdOutlineArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export type TextProp = {
  text?: string;
};

export const ApplyButton = ({ text }: TextProp) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/investors");
  };
  return (
    <ApplyBtn onClick={handleClick}>
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
  &:hover{
    filter: grayscale(50%) blur(0.1px);
    transition: .1s ease-in-out;
  }
  span {
    margin-right: 0.75rem;
  }
`;
