import styled from "styled-components";

export const SolidBlueButton = styled.div`
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  color: var(--white, #fff);
  text-align: center;
  font-size: 16px;
  font-family: Outfit;
  font-weight: 500;
  border-radius: 4px;
  background: var(--blue-100, #007afb);
  cursor: pointer;
`;

export const TextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: var(--blue-100, #007afb);
  text-align: center;
  font-size: 18px;
  font-family: Outfit;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.1px;
  cursor: pointer;
`;
