import styled from "styled-components";
import { device } from "../../../../../Global";
import { BsPatchCheck } from "react-icons/bs";

export const ListTag = styled(BsPatchCheck)`
  color: #a0aaba;
  font-size: 36px;
  @media ${device.tablet} {
    font-size: 28px;
  }
`;

const Tag = styled.div`
  
`;

export const CircleIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 28.5002C22.3638 28.5002 28.3333 22.5306 28.3333 15.1668C28.3333 7.80303 22.3638 1.8335 15 1.8335C7.63616 1.8335 1.66663 7.80303 1.66663 15.1668C1.66663 22.5306 7.63616 28.5002 15 28.5002Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
