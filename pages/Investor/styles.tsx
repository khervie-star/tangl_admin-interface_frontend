import styled from "styled-components";
import { Display, Grid } from "../../components/Investors/Assets/common";
import { device } from "../../Global";

export const InvestorContainer = styled.div`
  background: #ffffff;
  ${Grid} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${Display} {
    margin: 4.7rem 15.5rem 8.2rem 5rem !important;
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #3798ff;
  }
`;
