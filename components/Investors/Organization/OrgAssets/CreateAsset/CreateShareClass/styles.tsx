import styled, { css } from "styled-components";

type componentProps = {
  reverse?: boolean;
};

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 650px;
  box-sizing: border-box;
`;

export const SectionHeader = styled.div`
  color: var(--black-80, #324a64);
  font-family: Outfit;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.2px;
`;

export const SectionCard = styled.div`
  width: 100%;
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 8px;
  border: 1px solid var(--black-20, #e1e8f4);
  background: #fff;
  box-sizing: border-box;
`;

export const SectionCardText = styled.p`
  color: var(--black-70, #43566a);
  font-family: Outfit;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.1px;
  margin: 0;
  padding: 0;
`;

export const ShareClassName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  p {
    margin: 0;
    padding: 0;
    color: #43566a;
    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
  }
`;

export const InputWithAdornment = styled.div`
  width: 100%;
  height: 60px;
  // flex-shrink: 0;
  border-radius: 8px;
  display: flex;
  border: 1px solid #e1e8f4;
  ${({ reverse }: componentProps) =>
    reverse
      ? css`
          flex-direction: row-reverse;
        `
      : css`
          flex-direction: row;
        `};
  label {
    background: #f4f4f4;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    box-sizing: border-box;
    color: var(--black-80, #324a64);
    font-family: Outfit;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 155.556% */
    letter-spacing: -0.1px;
    ${({ reverse }: any) =>
      reverse
        ? css`
            border-radius: 0 8px 8px 0;
          `
        : css`
            border-radius: 8px 0 0 8px;
          `};
  }
  input {
    width: 50%;
    border: none;
    border-radius: 8px;
    padding: 18px;
    color: var(--black-80, #324a64);
    font-family: Outfit;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 155.556% */
    letter-spacing: -0.1px;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: var(--black-40, #a0aaba);
      font-family: Outfit;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px; /* 155.556% */
      letter-spacing: -0.1px;
    }
  }
`;

export const InputWithSideLabel = ({ children, placeholder, reverse }: any) => {
  return (
    <InputWithAdornment reverse={reverse}>
      <label>{children}</label>
      <input placeholder={placeholder} />
    </InputWithAdornment>
  );
};
