import styled, { css } from "styled-components";
import { IconProps } from "./types";

export const TickIcon = ({ display, active }: IconProps) => {
  return (
    <Ellipse active={active} display={display}>
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="#A0AABA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EditIcon = () => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 15.25V19H3.75L14.81 7.94L11.06 4.19L0 15.25ZM18.41 4.34L14.66 0.59L12.13 3.13L15.88 6.88L18.41 4.34Z"
        fill="#007AFB"
      />
    </svg>
  );
};

export const VerifiedIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 2C7.59401 1.99947 7.19452 2.10193 6.83891 2.29781C6.4833 2.49369 6.18319 2.77657 5.96667 3.12C5.77027 3.07261 5.56868 3.05021 5.36667 3.05333C4.75877 3.07591 4.18212 3.32849 3.75333 3.76C3.4719 4.04695 3.26704 4.39998 3.15755 4.7867C3.04806 5.17342 3.03744 5.58144 3.12667 5.97333C2.78296 6.18846 2.49936 6.48717 2.30234 6.84157C2.10532 7.19597 2.0013 7.59452 2 8C2.00017 8.40661 2.10365 8.80651 2.30072 9.16218C2.4978 9.51784 2.782 9.8176 3.12667 10.0333C3.03828 10.4258 3.04996 10.8341 3.16063 11.2209C3.27129 11.6076 3.4774 11.9604 3.76 12.2467C4.04764 12.5337 4.40344 12.743 4.79407 12.8549C5.18469 12.9668 5.59733 12.9778 5.99333 12.8867C6.20823 13.2251 6.50445 13.5042 6.85498 13.6987C7.2055 13.8932 7.59915 13.9968 8 14C8.40424 14.0001 8.80196 13.8981 9.15626 13.7035C9.51055 13.5089 9.80995 13.2279 10.0267 12.8867C10.4213 12.9751 10.832 12.9623 11.2204 12.8496C11.6088 12.7369 11.9625 12.5278 12.2485 12.2418C12.5345 11.9558 12.7435 11.6022 12.8563 11.2137C12.969 10.8253 12.9818 10.4147 12.8933 10.02C13.2324 9.8031 13.5114 9.50442 13.7048 9.15143C13.8982 8.79844 13.9997 8.40249 14 8C14.0001 7.59576 13.8981 7.19804 13.7035 6.84374C13.5089 6.48945 13.2279 6.19005 12.8867 5.97333V5.97333C12.9751 5.57866 12.9623 5.16804 12.8496 4.77961C12.7369 4.39118 12.5278 4.03754 12.2418 3.75154C11.9558 3.46555 11.6022 3.25647 11.2137 3.14373C10.8253 3.03098 10.4147 3.01824 10.02 3.10667C9.8031 2.76762 9.50442 2.48856 9.15143 2.29518C8.79844 2.10179 8.40249 2.00029 8 2V2Z"
        stroke="#5AC179"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0002 6.66667L7.3335 9.33333"
        stroke="#5AC179"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 8L7.33333 9.33333"
        stroke="#5AC179"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ReloadIcon = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.76667 2.23333C8.80001 1.26666 7.47334 0.666664 6.00001 0.666664C3.05334 0.666664 0.67334 3.05333 0.67334 6C0.67334 8.94666 3.05334 11.3333 6.00001 11.3333C8.48667 11.3333 10.56 9.63333 11.1533 7.33333H9.76667C9.22001 8.88666 7.74001 10 6.00001 10C3.79334 10 2.00001 8.20666 2.00001 6C2.00001 3.79333 3.79334 2 6.00001 2C7.10667 2 8.09334 2.46 8.81334 3.18666L6.66667 5.33333H11.3333V0.666664L9.76667 2.23333Z"
        fill="#007AFB"
      />
    </svg>
  );
};

export const CloudIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9996 16.2C20.7841 15.6572 21.3757 14.8791 21.6891 13.9781C22.0026 13.0771 22.0216 12.0998 21.7434 11.1873C21.4652 10.2748 20.9042 9.47429 20.1414 8.9014C19.3786 8.32851 18.4535 8.01285 17.4996 7.99999H15.6996C15.3973 6.98027 14.8667 6.04283 14.1479 5.25888C13.4291 4.47493 12.5412 3.86507 11.5514 3.47562C10.5617 3.08617 9.49627 2.92738 8.436 3.01129C7.37573 3.09521 6.34852 3.41963 5.43239 3.95991C4.51625 4.5002 3.73528 5.24214 3.14878 6.1294C2.56227 7.01666 2.18567 8.0259 2.04755 9.08048C1.90944 10.1351 2.01345 11.2072 2.35169 12.2156C2.68993 13.224 3.25351 14.142 3.99961 14.9"
        stroke="#A0AABA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12V21"
        stroke="#A0AABA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 16L12 12L8 16"
        stroke="#A0AABA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const RemoveIcon = () => {
  return (
    <svg
      width="16"
      height="22"
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 5V3C4 2.46957 4.21071 1.96086 4.58579 1.58579C4.96086 1.21071 5.46957 1 6 1H10C10.5304 1 11.0391 1.21071 11.4142 1.58579C11.7893 1.96086 12 2.46957 12 3V5M15 5V19C15 19.5304 14.7893 20.0391 14.4142 20.4142C14.0391 20.7893 13.5304 21 13 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V5H15Z"
        stroke="#C99595"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Ellipse = styled.div`
  height: 16px;
  width: 16px;
  ${({ active }: IconProps) =>
    active
      ? css`
          background: #007afb;
        `
      : css`
          background: #324a64;
        `};
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  ${({ display }: IconProps) =>
    !display
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `};
`;

export const AvatarIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3334 17.5V15.8333C13.3334 14.9493 12.9822 14.1014 12.3571 13.4763C11.7319 12.8512 10.8841 12.5 10 12.5H4.16671C3.28265 12.5 2.43481 12.8512 1.80968 13.4763C1.18456 14.1014 0.833374 14.9493 0.833374 15.8333V17.5"
        stroke="#007AFB"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.08333 9.16667C8.92428 9.16667 10.4167 7.67428 10.4167 5.83333C10.4167 3.99238 8.92428 2.5 7.08333 2.5C5.24238 2.5 3.75 3.99238 3.75 5.83333C3.75 7.67428 5.24238 9.16667 7.08333 9.16667Z"
        stroke="#007AFB"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1666 9.16667L15.8333 10.8333L19.1666 7.5"
        stroke="#007AFB"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
