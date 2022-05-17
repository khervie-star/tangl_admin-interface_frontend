import styled from "styled-components";

export const InputConatainer = styled.div`
  border: 1px solid #e1e8f4;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 2.625rem 2rem;
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

export const File = styled.div`
  position: relative;
  overflow: hidden;
  margin: 2rem 0rem;
  input[type="file"] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
`;

export const Click = styled.div`
  border: 1px solid #e1e8f4;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ClickText = styled.div`
  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #43566a;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.1px;
    color: #a0aaba;
  }
`;
export const ImgSelect = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.1px;
  color: #43566a;
`;
