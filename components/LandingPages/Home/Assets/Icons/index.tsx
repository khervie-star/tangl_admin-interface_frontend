import styled from "styled-components";
import { device } from "../../../../../Global";
import { BsPatchCheck } from "react-icons/bs";

// export const ListTag = styled(BsPatchCheck)`
//   color: #a0aaba;
//   font-size: 36px;
//   @media ${device.tablet} {
//     font-size: 28px;
//   }
// `;

const Tag = styled.div`
  color: #a0aaba;
  font-size: 36px;
  @media ${device.tablet} {
    font-size: 28px;
  }
`;

export const ListTag = () => {
  return (
    <svg
      width="44"
      height="45"
      viewBox="0 0 44 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.166748" width="44" height="44" rx="8" fill="#007AFB" />
      <path
        d="M26 15.1667H18C14.134 15.1667 11 18.3008 11 22.1667C11 26.0327 14.134 29.1667 18 29.1667H26C29.866 29.1667 33 26.0327 33 22.1667C33 18.3008 29.866 15.1667 26 15.1667Z"
        stroke="#F4F4F4"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26 25.1667C27.6569 25.1667 29 23.8236 29 22.1667C29 20.5099 27.6569 19.1667 26 19.1667C24.3431 19.1667 23 20.5099 23 22.1667C23 23.8236 24.3431 25.1667 26 25.1667Z"
        stroke="#F4F4F4"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const CircleIcon = () => {
  return (
    <Tag>
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
    </Tag>
  );
};
