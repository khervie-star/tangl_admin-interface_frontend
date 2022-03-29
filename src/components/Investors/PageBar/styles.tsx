import styled from "styled-components"

export type FlowType = {
    active?: boolean;
    checked?: boolean;
}

export const FlowWrap = styled.div`
  display: flex;
  align-items: center;
`

export const FlowCircle = styled.p`
  box-sizing: border-box;
  background: ${({ checked }: FlowType) =>
    checked ? "#007AFB" : "#ffffff"};
  border:1px solid #007AFB;
  border-radius:50%;
  height: 12px;
  width: 12px;
`

export const FlowBar = styled.p`
  height:1px;
  width:40px;
  background: #007AFB;
  margin:0px 8px;
`