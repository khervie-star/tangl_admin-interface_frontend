import styled from "styled-components";

export const ApplicationReviewWrapper = styled.div`
  border: 1px solid #e1e8f4;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 3rem;
  padding: 24px;
  width: 40%;
`;

export const ApplicationItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 0.5rem 0;
  p {
    color: #324a64;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.1px;
    line-height: 28px;
  }
`;

export const EditButton = styled.div`
  cursor: pointer;
  font-weight: 400;
  letter-spacing: -0.1px;
  line-height: 20px;
  font-size: 14px;
  color: #007afb;
  border-bottom: 1px solid #007afb;
`;
