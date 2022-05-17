import styled from "styled-components";
import { TextBody, TextTitle } from "../../../Assets/common";

export const FinalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  
  ${TextTitle}{
    margin-bottom: 7.75rem;
  }
  ${TextBody}{
    margin-bottom: 7rem;
  }
`