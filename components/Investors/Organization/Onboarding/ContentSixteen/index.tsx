import { useState } from "react";
import { MdSentimentDissatisfied } from "react-icons/md";
import { useDispatch } from "react-redux";
import { organizationFowardRoute } from "../../../../../store/actions";
import { DarkContinueButton } from "../../../Assets/Buttons";
import { TextTitle } from "../../../Assets/common";
import { PageBarTypes } from "../../../types";
import { SectionContentTitle, SectionContentText } from "./styles";

const ContentTwo = ({ page }: PageBarTypes) => {
  const [countryDialCode, setCountryDialCode] = useState("+1");
  const dispatch = useDispatch();

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(countryDialCode + " " + e.target.value);
  };

  const handleDialCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setCountryDialCode(e.target.value);
  };

  const handleSubmit = () => {
    if (page) dispatch(organizationFowardRoute(page));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextTitle>Fundraising Application</TextTitle>
      <SectionContentText>
        We look to place capital with startups who have a great founding team,
        who have a well-defined product road map, go-to-market strategy and are
        uniquely positioned to capture a large total addressable market and
        solve problems at scale. The experience of our team allows us to best
        support startups in their growth stages.
      </SectionContentText>

      <SectionContentTitle>
        Venture Capital Firm investment criteria:
      </SectionContentTitle>
      <SectionContentText>
        <li>Technology enabled</li>
        <li>Early stage & Mid stage startups</li>
        <li> Raising between £500k - £25M in a funding round </li>
        <li>High Total addressable market</li>
        <li>
          Well defined Go-to-market strategy and are close to achieving product
          market fit
        </li>
        <li>
          Based in the EMEA regions or looking to penetrate these regions.
        </li>
      </SectionContentText>

      <SectionContentTitle>Process</SectionContentTitle>
      <SectionContentText>
        Once you have applied for funding via the following questionnaire, the
        team shall be in touch within 2-3 working days to discuss the next steps
        of the process.
      </SectionContentText>

      <SectionContentTitle>Fee structure</SectionContentTitle>
      <SectionContentText>
        We charge a success fee which is split between cash and equity. Taking
        equity keeps us accountable to our funding partners and TANGL’s mandate
        to Place capital with disruptive and innovative companies at phases of
        their growth lifecycle.
      </SectionContentText>
      <DarkContinueButton>Start Fundraising Questionnaire</DarkContinueButton>
    </form>
  );
};

export default ContentTwo;
