import styled from "styled-components";
import { device } from "../../../../../Global";

export const Display = styled.div`
  display: flex;
  margin: 4.7rem 5rem 8.2rem 5rem;
  flex-direction: column;
  @media ${device.tablet} {
    flex-wrap: wrap;
    margin: 4.7rem 2.5rem 8.2rem 2.5rem;
  }
  @media ${device.mobileL} {
    flex-wrap: wrap;
    margin: 4.7rem 1.5rem 8.2rem 1.5rem;
  }
`;

export const CreateAssetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
  margin-bottom: 32px;
`;

export const CreateAssetHeaderText = styled.h4`
  color: var(--black-100, #011122);
  font-family: Outfit;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: -0.4px;
  margin: 0;
  padding: 0;
`;

export const CreateAssetBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;
