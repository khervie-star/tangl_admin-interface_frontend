import styled from "styled-components";

export const FundraisingFormTitle = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
  color: #011122;
  margin-top: 1rem;
`;

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
