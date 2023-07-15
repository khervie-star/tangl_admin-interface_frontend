import styled from "styled-components";
import { ChevronLeftIcon } from "../Icons";

export const GenButton = styled.button`
  background: #007afb;
  border-radius: 4px;
  padding: 0.75rem 1.25rem;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
  font-feature-settings: "liga" off;
  color: #ffffff;
  border: 0;
  cursor: pointer;
`;

export const TextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: var(--blue-100, #007afb);
  text-align: center;
  font-family: Outfit;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.1px;
  background: transparent;
  border: 0;
  cursor: pointer;
`;

export const BackTextButton = ({ children, onClick, disabled }: any) => {
  return (
    <TextButton onClick={onClick} disabled={disabled}>
      <ChevronLeftIcon />
      {children}
    </TextButton>
  );
};
