import styled from "styled-components";
import { device } from "../../../Global";
import { FlexWrap, Image } from "../Assets/Common";


export const TabSevenContainer = styled.div`
  margin: 5rem;
  border-radius: 16px;
  padding: 5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: #011122;
  @media ${device.tablet} {
    margin: 2.5rem 1.5rem;
    padding: 2.5rem;
    ${FlexWrap}{
      flex: 100%;
    }
    ${Image}{
      margin-top: 2.5rem;
    }
  }
`;

export const OfferButton = styled.button`
  background: #5ac179;
  border-radius: 4px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-feature-settings: "liga" off;
  color: #ffffff;
  border: 0;
`;

export const IconText = styled.span`
  margin-left: 12px;
`;