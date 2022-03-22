import styled from "styled-components";

export type TabProps = {
  height?: string;
  margin?: string;
  padding?: string;
  flex?: string;
  alignItems?: string;
  textAlign?:string;
};

export const FlexWrap = styled.div`
  flex: 50%;
  box-sizing: border-box;
  padding: ${({ padding }: TabProps) => (padding ? padding : "0")};
`;

export const Box = styled.div`
  display: flex;
  height: ${({ height }: TabProps) => (height ? height : "0")};
  background: #a0aaba;
  margin: ${({ margin }: TabProps) => (margin ? margin : "0")};
`;

export const TextTitle = styled.h1`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  color: #ffffff;
  margin: ${({ margin }: TabProps) => (margin ? margin : "0")};
  display: ${({ flex }: TabProps) => (flex ? flex : "")};
  align-items: ${({ alignItems }: TabProps) => (alignItems ? alignItems : "")};
  text-align: ${({ textAlign }: TabProps) => (textAlign ? textAlign : "")};
`;

export const TextBody = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: #a0aaba;
  margin: ${({ margin }: TabProps) => (margin ? margin : "0")};
  padding: ${({ padding }: TabProps) => (padding ? padding : "0")};
  display: ${({ flex }: TabProps) => (flex ? flex : "")};
  align-items: ${({ alignItems }: TabProps) => (alignItems ? alignItems : "")};
  text-align: ${({ textAlign }: TabProps) => (textAlign ? textAlign : "")};
`;
