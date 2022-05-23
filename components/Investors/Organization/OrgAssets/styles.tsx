import styled, { css } from "styled-components";

export type StatusType = {
  status: string;
};

export const AssetContainer = styled.div`
  padding: 3rem;
`;

export const AssetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AssetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.938rem;
  grid-row: 28.375rem;
  margin: 2.75rem 0rem;
`;

export const StatusTag = styled.div`
  border-radius: 2px;
  padding: 6px 14px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  ${({ status }: StatusType) =>
    status === "Deployed"
      ? css`
          background: #5ac179;
        `
      : css`
          background: #c16565;
        `};
`;

export const AssetCard = styled.div`
  padding: 1.5rem;
  background: #ffffff;
  border: 1px solid #e1e8f4;
  border-radius: 16px;
`;

export const AssetImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  ${StatusTag} {
    position: absolute;
    justify-self: flex-end;
    z-index: 1;
  }
  img {
    height: 10rem;
    width: 100%;
  }
`;

export const AssetName = styled.div`
  margin: 1.375rem 0rem 1rem 0rem;
  h1 {
    margin: 0;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #324a64;
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.1px;
    text-transform: uppercase;
    color: #a0aaba;
  }
`;

export const AssetTable = styled.div`
  margin: 1rem 0rem 2rem 0rem;
`;

export const TableHead = styled.div`
  padding: 2px 0px 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #a0aaba;
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #a0aaba;
  }
  span {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #324a64;
  }
`;

export const TableBody = styled.div`
  padding: 10px 0px 2px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #a0aaba;
  }
  span {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #324a64;
  }
`;
export const ViewButton = styled.button`
  padding: 0.625rem 0rem;
  background: #007afb;
  border-radius: 2px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  border: 0;
  text-align: center;
  width: 100%;
  cursor: pointer;
`;
