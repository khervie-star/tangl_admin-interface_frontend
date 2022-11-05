import styled, { css } from "styled-components";
import { device } from "../../../Global";
import { CgCheck } from "react-icons/cg";

type NewsType = {
  active?: boolean;
  margin?: string;
};

export const NewsContainer = styled.div`
  background: #ffffff;
  padding: 5rem;
  max-width: 1440px;
  margin: auto;
  @media ${device.tablet} {
    padding: 1.5rem;
  }
`;

export const ReportGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 8.75rem;
  margin-top: 5rem;
  box-sizing: border-box;
  @media ${device.tablet} {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
    grid-row-gap: 2.5rem;
    margin-top: 2.5rem;
  }
`;

export const ReportImage = styled.div`
  background: #324a64;
  box-sizing: border-box;
  padding: 1.25rem;
  width: 100%;
  img {
    width: 100%;
    box-sizing: border-box;
  }
`;

export const ReportUpdated = styled.ul`
  li {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #324a64;
    /* display: flex;
    align-items: center; */
    @media ${device.mobileL} {
      font-size: 16px;
      line-height: 24px;
    }
    a {
      margin-left: 0.1rem;
      color: #007afb;
      text-decoration: none;
    }
  }
`;

export const ViewReports = styled.button`
  width: 80%;
  background: #011122;
  border-radius: 4px;
  padding: 0.75rem 0rem;
  display: flex;
  justify-content: center;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
  font-feature-settings: "liga" off;
  color: #ffffff;
  cursor: pointer;
  @media ${device.mobileL} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ReportFormContainer = styled.div`
  background: #ffffff;
  border: 1px solid #e1e8f4;
  border-radius: 24px;
  padding: 2.5rem;
`;

export const ReportFormTitle = styled.h1`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.4px;
  color: #324a64;
  margin: 0;
  @media ${device.mobileL} {
    font-size: 18px;
    line-height: 28px;
  }
`;

export const ReportCertification = styled.div`
  display: flex;
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #43566a;
    margin: 0;
    margin-left: 1.25rem;
    width: 85%;
    @media ${device.mobileL} {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const CheckedMark = styled(CgCheck)`
  color: #ffffff;
  font-size: 24px;
  @media ${device.mobileL} {
    font-size: 18px;
  }
`;

export const ReportCheck = styled.div`
  margin-top: 0.5rem;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${({ active }: NewsType) =>
    active
      ? css`
          background: #007afb;
          border: 0;
        `
      : css`
          background: #ffffff;
          border: 1px solid #43566a;
        `}

  @media ${device.mobileL} {
    width: 18px;
    height: 18px;
  }
`;

export const DownloadReport = styled.button`
  width: 100%;
  background: #007afb;
  border-radius: 4px;
  padding: 0.75rem 0rem;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  display: flex;
  justify-content: center;
  letter-spacing: -0.1px;
  font-feature-settings: "liga" off;
  color: #ffffff;
  margin: 2rem 0rem;
  border: 0;
  cursor: pointer;
  @media ${device.mobileL} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ReportFormFooter = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: #011122;
  font-size: 18px;
  span {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #43566a;
    margin-right: 1.5rem;
    @media ${device.tablet} {
      margin-bottom: 1rem;
    }
    @media ${device.mobileL} {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const ReportBase = styled.div`
  margin: 5rem 0rem;
`;

export const BaseTitle = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    width: 75%;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.5px;
    color: #011122;
    text-align: center;
    @media ${device.tablet} {
      width: 100%;
    }
    @media ${device.mobileL} {
    font-size: 28px;
    line-height: 36px;
  }
  }
`;

export const BaseBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #324a64;
  }
`;

export const BaseFlex = styled.div`
  flex: 50%;
  margin: ${({ margin }: NewsType) => margin && margin};
  @media ${device.tablet} {
    flex: 100%;
    margin: 0;
  }
`;

export const KeyTakeaways = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 900 !important;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
  font-feature-settings: "liga" off;
  color: #000f22;
  margin: 0;
  @media ${device.tablet} {
    margin-bottom: 1rem;
  }
  @media ${device.mobileL} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const BaseList = styled.ul`
  @media ${device.tablet} {
    margin: 0;
  }
  li {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #324a64;
    @media ${device.tablet} {
      margin-bottom: 0.625rem;
    }
    @media ${device.mobileL} {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
