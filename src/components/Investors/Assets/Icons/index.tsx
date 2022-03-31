import styled, { css } from "styled-components";

export type IconProps = {
  active?: boolean;
};

export const TickIcon = ({ active }: IconProps) => {
  return (
    <Ellipse active={active}>
      <svg
        width="10"
        height="7"
        viewBox="0 0 10 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.90826 2.42726C1.49972 2.05562 0.867266 2.08553 0.495627 2.49407C0.123989 2.90261 0.153903 3.53507 0.562441 3.90671L1.90826 2.42726ZM3.63836 5.35294L2.96544 6.09267L3.63836 6.7048L4.31127 6.09267L3.63836 5.35294ZM8.96709 1.85737C9.37562 1.48573 9.40554 0.853275 9.0339 0.444737C8.66226 0.0361985 8.0298 0.00628495 7.62126 0.377923L8.96709 1.85737ZM0.562441 3.90671L2.96544 6.09267L4.31127 4.61322L1.90826 2.42726L0.562441 3.90671ZM4.31127 6.09267L8.96709 1.85737L7.62126 0.377923L2.96545 4.61322L4.31127 6.09267Z"
          fill="white"
        />
      </svg>
    </Ellipse>
  );
};

export const LockIcon = () => {
  return (
    <svg
      width="16"
      height="22"
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 8H13V6.21C13 3.6 11.09 1.27 8.49 1.02C5.51 0.74 3 3.08 3 6V8H0V22H16V8ZM8 17C6.9 17 6 16.1 6 15C6 13.9 6.9 13 8 13C9.1 13 10 13.9 10 15C10 16.1 9.1 17 8 17ZM5 8V6C5 4.34 6.34 3 8 3C9.66 3 11 4.34 11 6V8H5Z"
        fill="#A0AABA"
      />
    </svg>
  );
};

export const DeleteIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke="#A0AABA"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="#A0AABA"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Ellipse = styled.div`
  height: 16px;
  width: 16px;
  background: #324a64;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
    ${({ active }: IconProps) =>
      !active
        ? css`
            display: none;
          `
        : css`
            display: flex;
          `};
`;
