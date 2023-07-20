import styled from "styled-components";

export type TabProps = {
  active?: boolean;
  activeTab?: number;
};

export const Wrapper = styled.div`
  margin: 0;
  padding: 3em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  max-width: 1280px;
`;

export const Header = styled.div`
  display: inline-flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 100%;
`;

export const HeaderText = styled.h4`
  color: var(--black-80, #324a64);
  font-family: Outfit;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
  letter-spacing: -0.4px;
  margin: 0;
  padding: 0;
`;

export const TabContainer = styled.div`
  position: relative;
  border: none;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  gap: 36px;
`;

export const TabLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background-color: #007bff;
  transition: transform 0.3s ease-in-out;
  transform: translateX(
    ${({ activeTab }: TabProps) =>
      activeTab === 0 ? "0%" : activeTab === 1 ? "100%" : "200%"}
  );
`;

export const TabButton = styled.button`
  //   width: 100%;
  //   flex: 1;
  padding: 10px 20px;
  border: none;
  color: ${({ active }: TabProps) => (active ? "#007AFB" : "#A0AABA")};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  font-family: Outfit;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.1px;
  background-color: transparent;
  border-bottom: 2px solid
    ${({ active }: TabProps) => (active ? "#007AFB" : "transparent")};
  padding-left: 0;
  padding-right: 0;

  &:hover {
    cursor: pointer;
    // background-color: ${({ active }) => (active ? "#007bff" : "#f1f1f1")};
  }
`;

export const TabContent = styled.div`
  padding: 20px;
  width: 100%;
`;
