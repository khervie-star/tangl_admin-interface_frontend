import styled from "styled-components";
import { Grid } from "../../../components/Investors/Assets/common";
import { device } from "../../../Global";

export const OrganizationWrapper = styled.div`
  background: #ffffff;
  ${Grid} {
    grid-template-columns: repeat(2, 1fr);
  }
`;