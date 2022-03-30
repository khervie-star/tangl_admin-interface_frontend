import styled from "styled-components"
import { device } from "../../../Global"

export const TextTitle = styled.h1`
font-weight: 700;
font-size: 32px;
line-height: 40px;
letter-spacing: -0.4px;
color: #324A64;
margin-top: 5rem;
`

export const TextBody = styled.p`
font-family: 'Outfit';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
letter-spacing: -0.4px;
color: #A0AABA;
margin-top: 1rem;
`

export const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  grid-row: 300px;
  margin:5rem 0rem;
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Card = styled.div`
  background: #FFFFFF;
  border: 1px solid #E1E8F4;
  box-sizing: border-box;
  border-radius: 8px;
  text-align: center;
  height: 104px;
  padding: 0px 32px;
  display: flex;
  align-items: center;
  cursor:pointer;
  p{
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.4px;
    color: #43566A;
    margin:auto;
  }
`