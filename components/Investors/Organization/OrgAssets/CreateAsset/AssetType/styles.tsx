import styled from "styled-components";

export const AssetTypeWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const AssetTypeHeaderText = styled.h4`
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

export const AssetTypeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const AssetTypeCard = styled.div`
  display: flex;
  padding: 24px;
  align-items: flex-start;
  gap: 60px;
  border-radius: 8px;
  border: 1px solid var(--black-20, #e1e8f4);
  background: #fff;
`;

export const AssetTypeItem = styled.div`
  display: flex;
  width: 437px;
  flex-direction: column;
`;

export const AssetTypeName = styled.p`
  color: var(--black-100, #011122);
  font-family: Outfit;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.1px;
  margin: 0;
  padding: 0;
`;

export const AssetTypeDescription = styled.p`
  color: var(--black-70, #43566a);
  text-align: justify;
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1px;
  margin: 0;
  padding: 0;
`;
