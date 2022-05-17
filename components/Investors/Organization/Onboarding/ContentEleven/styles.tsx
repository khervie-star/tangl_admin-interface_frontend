import styled from "styled-components";

export const InputConatainer = styled.div`
  border: 1px solid #e1e8f4;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 2.625rem 2rem;
  max-width: 35rem;
`;

export const Title = styled.h1`
  padding: 1.125rem 0.75rem;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #43566a;
  margin: 0;
`;

export const RadioContainer = styled.div`
  padding: 1rem 0.75rem;
  border: 1px solid #e1e8f4;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  input {
    width: 16px;
    height: 16px;
    border: 1px solid #007afb;
    box-sizing: border-box;
  }
  label {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #43566a;
    margin-left: 16px;
  }
`;
