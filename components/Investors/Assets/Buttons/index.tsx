import styled from "styled-components";
import { device } from "../../../../Global";
import { BtnProps } from "./types";

export const BackButton = ({ onClick }: BtnProps) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <svg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.08946 0.410765C7.4149 0.736202 7.4149 1.26384 7.08946 1.58928L2.67871 6.00002L7.08946 10.4108C7.4149 10.7362 7.4149 11.2638 7.08946 11.5893C6.76402 11.9147 6.23638 11.9147 5.91095 11.5893L0.910948 6.58928C0.585511 6.26384 0.585511 5.7362 0.910948 5.41076L5.91095 0.410765C6.23638 0.0853278 6.76402 0.0853278 7.08946 0.410765Z"
          fill="#A0AABA"
        />
      </svg>
    </ButtonWrapper>
  );
};

export const ButtonWrapper = styled.button`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0.886rem 1.042rem;
  border: 1px solid #a0aaba;
  cursor: pointer;
  box-sizing: border-box;
  @media ${device.tablet} {
    margin-bottom: 2rem;
  }
`;

export const ContinueButton = ({ children, onClick, disabled }: BtnProps) => {
  return (
    <ContBtn disabled={disabled} onClick={onClick}>
      {children}
    </ContBtn>
  );
};

export const ContBtn = styled.button`
  border: 1px solid #007afb;
  background: inherit;
  font-family: Outfit;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.1px;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 1rem 1.5rem;
  color: #007afb;
  cursor: pointer;
`;

export const DarkContinueButton = ({
  children,
  onClick,
  disabled,
}: BtnProps) => {
  return (
    <DarkContBtn disabled={disabled} onClick={onClick}>
      {children}
    </DarkContBtn>
  );
};

export const DarkContBtn = styled.button`
  font-family: Outfit;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.1px;
  background: #007afb;
  border: 1px solid #007afb;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 1rem 1.5rem;
  color: #fff;
  cursor: pointer;
`;
