import styled from "styled-components"
import { device} from "../../../../Global";

export const HeaderWrapper = styled.div`
  padding: 5rem 0rem 5rem 0rem;
  @media ${device.mobileL} {
    padding: 3.5rem 2.125rem 2.5rem 2.125rem;
  }
`;

export const HeaderTitle = styled.h1`
  margin: 2.5rem auto;
  max-width: 58.5rem;
  text-align: center;
  font-size: 80px;
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 96px;
  @media ${device.mobileL} {
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -0.6px;
    margin: 0.5rem auto;
  }
`;

export const HeaderText = styled.p`
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.2px;
  margin: 0rem auto;
  color:#A0AABA;;
  max-width: 40.375rem;
  @media ${device.mobileL} {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    margin: 1rem auto;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0rem;
`;

export const HeaderButton = styled.button`
  font-family: inherit;
  font-size: 1.125rem;
  line-height: 1.5rem;
  background: #007afb;
  border-radius: 4px;
  color: inherit;
  letter-spacing: -0.1px;
  padding: 0.75rem 1.25rem;
  border: 0;
  cursor: pointer;
  &:hover{
    filter: grayscale(50%) blur(0.1px);
    transition: .1s ease-in-out;
  }
  @media ${device.mobileL} {
    font-size: 16px;
    line-height: 20px;
  }
`;
