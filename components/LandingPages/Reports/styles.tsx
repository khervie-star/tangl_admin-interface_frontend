import styled from "styled-components";
import { device } from "../../../Global";
import { ArrowRightIcon } from "../Common/Icons";

export const ReportsContainer = styled.div`
  background: #ffffff;
  padding: 5rem;
  @media ${device.tablet} {
    padding: 1.5rem;
  }
`;

export const ReportsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5rem;
`;

export const ReportsSearchBar = styled.div`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  width: 33rem;
  margin-right: 0.625rem;
  input {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.1px;
    background: #fafafa;
    color: #a0aaba;
    outline: none;
    border: none;
    width: 95%;
    margin-right: 0.625rem;
  }
`;

export const ReportsFilter = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: #011122;
  border-radius: 4px;
  padding: 0.625rem 1rem;
  cursor: pointer;
  @media ${device.tablet} {
    margin-top: 1rem;
  }
  span {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    margin-right: 0.75rem;
  }
`;

export const ReportsGrid = styled.div`
  margin: 5rem 0rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem 2.5rem;
  @media ${device.tablet} {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
  }
`;

export const ReportsCard = styled.div`
  background: linear-gradient(114.8deg, #1f1f1f -0.88%, #43566a 70.84%);
  border-radius: 23.8667px;
  padding: 2.75rem 2.35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.mobileL} {
    padding: 1.75rem 1.35rem;
  }
`;

export const ReportsImage = styled.img`
  width: 100%;
  margin-right: 1rem;
  max-height: 14.625rem;
  max-width: 12.625rem;
  @media ${device.tablet} {
    max-height: 10.625rem;
    max-width: 8.625rem;
  }
`;

export const ReportFloat = styled.span`
  background: #5ac179;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-feature-settings: "liga" off;
  color: #ffffff;
  box-sizing: content-box;
  @media ${device.mobileL} {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const ReportsText = styled.p`
  margin: 0.75rem 0rem;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #ffffff;
  @media ${device.mobileL} {
    font-size: 16px;
    line-height: 18px;
  }
`;

export const DownloadNow = styled.button`
  background: #011122;
  border: 1px solid #a0aaba;
  border-radius: 4px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  font-feature-settings: "liga" off;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  ${ArrowRightIcon} {
    margin-left: 0.625rem;
    @media ${device.mobileL} {
      margin-left: 0.35rem;
    }
  }
  @media ${device.mobileL} {
    font-size: 12px;
    line-height: 16px;
    padding: 0.75rem 1rem;
  }
`;
