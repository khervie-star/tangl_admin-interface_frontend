import styled, { css } from "styled-components";

export type CardProps = {
  col: string;
};

export const AssetInformationWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const ReviewAssetInformationHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const ReviewAssetInformationHeaderText = styled.h4`
  margin: 0;
  padding: 0;
  color: var(--black-40, #a0aaba);
  font-family: Outfit;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: -0.4px;
`;

export const ReviewAssetInformationHeaderDescription = styled.p`
  margin: 0;
  padding: 0;
  color: var(--black-70, #43566a);
  font-family: Outfit;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.1px;
  border-bottom: 0.5px solid #a0aaba;
  padding-bottom: 20px;
`;

export const AssetInformationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-top: 54px;
  .info-header {
    margin: 0;
    padding: 0;
    color: var(--black-80, #324a64);
    font-family: Outfit;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: -0.4px;
    margin-bottom: 32px;
  }
`;

export const AssetInformationCard = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: flex-start;
  gap: 24px;
  border-radius: 8px;
  border: 1px solid var(--black-20, #e1e8f4);
  background: #fff;
`;

export const AssetInformationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 32px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  p {
    margin: 0;
    padding: 0;
    color: var(--black-70, #43566a);
    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  h6 {
    margin: 0;
    padding: 0;
    color: var(--black-80, #324a64);
    font-family: Outfit;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: -0.1px;
  }
`;

export const SectionHeader = styled.h4`
  color: var(--black-80, #324a64);
  font-family: Outfit;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.2px;
  margin: 0;
  padding: 0;
`;

export const SmallText = styled.p`
  color: #43566a;
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
  margin-bottom: 8px;
  padding: 0;
  span {
    color: #a0aaba;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
`;

export const GridItem = styled.div`
  ${({ col }: CardProps) =>
    col &&
    css`
      grid-column: span ${col};
    `};
`;

// export const GridItem = styled.div`
//   grid-column: span 3;
// `;
