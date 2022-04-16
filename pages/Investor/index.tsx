import InvestorSelect from "../../components/Investors";
import { BackButton } from "../../components/Investors/Assets/Buttons.tsx";
import OnBoardNavBar from "../../components/Investors/OnboardNav";
import PageBar from "../../components/Investors/PageBar";
import { InvestorContainer, LoginWrapper } from "./styles";
import Link from "next/link";
import { Display, Pad } from "../../components/Investors/Assets/common";

const Investors = () => {
  return (
    <InvestorContainer>
      <OnBoardNavBar />
      <Display>
        <div>
          <BackButton />
        </div>
        <Pad>
          <LoginWrapper>
          <PageBar page={1} />
          <Link href="/"><a>Login instead</a></Link>
          </LoginWrapper>
          <InvestorSelect />
        </Pad>
      </Display>
    </InvestorContainer>
  );
};

export default Investors;
