import styled from "styled-components";

export const TopBarContainer = styled.div`
  background: #ffffff;
  top: 0;
  border-bottom: 0.5px solid #a0aaba !important;
  padding: 1.875rem 2.9rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 33rem;
    position: relative;
    background: #fafafa;
    border: 0;
    border-radius: 5px;
    padding: 10px 24px;
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.1px;
    color: #a0aaba;
    box-sizing: border-box;
    &:hover {
      border: 0;
    }
    &:focus {
      border: 0;
    }
  }
`;

export const Account = styled.div`
  display: flex;
  align-items: center;
`;

export const AccountInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.875rem;
  img {
    border-radius: 50%;
    width: 33px;
    height: 33px;
  }
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: -0.1px;
    color: #324a64;
    margin: 0rem 1rem;
  }
`;
