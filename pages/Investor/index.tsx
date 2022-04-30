import InvestorSelect from "../../components/Investors";
import { BackButton } from "../../components/Investors/Assets/Buttons";
import OnBoardNavBar from "../../components/Investors/OnboardNav";
import PageBar from "../../components/Investors/PageBar";
import { InvestorContainer, Login, LoginWrapper } from "./styles";
import { Display, Pad } from "../../components/Investors/Assets/common";
import Router from "next/router";
import Link from "next/link";

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
