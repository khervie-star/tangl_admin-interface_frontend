import { LandingTitle } from "../Common";
import FooterFlow from "../FooterFlow";
import {
  FooterNavContainer,
  TermFLex,
  TermText,
  TermTitle,
  TermWrapper,
} from "../Terms/styles";

const AMLContent = () => {
  return (
    <FooterNavContainer>
      <LandingTitle>Legal Documents</LandingTitle>
      <TermWrapper>
        <TermFLex flexPercentage="70%" padding="0rem 2.5rem 0rem 0rem">
          <TermTitle>TANGL Capital Partners Ltd AML /STF Policy</TermTitle>
          <TermText>
            Money laundering is defined as the process where the identity of the
            proceeds of crime are so disguised that it gives the appearance of
            legitimate income. Criminals specifically target financial services
            firms through which they attempt to launder criminal proceeds
            without the firm's knowledge or suspicions.
            <br />
            <br /> In response to the scale and effect of money laundering the
            United Kingdom, in common with many other countries, has passed
            legislation designed to prevent money laundering and to combat
            terrorism. This legislation, together with regulations, rules and
            industry guidance, forms the cornerstone of AML/CTF obligations for
            UK firms and outline the offences and penalties for failing to
            comply.
          </TermText>
        </TermFLex>
        <TermFLex flexPercentage="30%" padding="0rem 0rem 0rem 2.5rem">
          <FooterFlow />
        </TermFLex>
      </TermWrapper>
    </FooterNavContainer>
  );
};

export default AMLContent;
