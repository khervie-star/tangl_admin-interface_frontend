import InvestorSelect from "../../components/Investors";
import { BackButton } from "../../components/Investors/Assets/Buttons";
import OnBoardNavBar from "../../components/Investors/OnboardNav";
import PageBar from "../../components/Investors/PageBar";
import { Display, Pad, Grid } from "../../components/Investors/Assets/common";
import Router from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { device } from "../../Global";

const Investors = () => {
  const handleBack = () => {
    Router.push("/");
  };
  return (
    <InvestorContainer>
      <OnBoardNavBar />
      <Display>
        <div>
          <BackButton onClick={handleBack} />
        </div>
        <Pad>
          <LoginWrapper>
            <div>
              <PageBar page={1} />
            </div>
            <Login>
              <Link href="/">
                <a>Login instead</a>
              </Link>
            </Login>
          </LoginWrapper>
          <InvestorSelect />
        </Pad>
      </Display>
    </InvestorContainer>
  );
};

export default Investors;


export const InvestorContainer = styled.div`
  background: #ffffff;
  ${Grid} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${Display} {
    margin: 4.7rem 15.5rem 8.2rem 5rem !important;
    @media ${device.tablet} {
      margin: 4.7rem 2.5rem 8.2rem 2.5rem !important;
    }
    @media ${device.mobileL} {
      margin: 4.7rem 1.5rem 8.2rem 1.5rem !important;
    }
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
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

export const Login = styled.div`
  @media ${device.mobileL} {
    flex: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: right;
  }
`;