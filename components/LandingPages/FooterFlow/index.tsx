import { useRouter } from "next/router";
import {
  Current,
  FooterFlowContainer,
  FooterFlowText,
  FooterFlowTextContent,
} from "./styles";

const FooterFlow = () => {
  const Router = useRouter();
  return (
    <FooterFlowContainer>
      <FooterFlowText>
        <FooterFlowTextContent
          onClick={() => Router.push("/terms")}
          active={Router.pathname === "/terms" && true}
        >
          Terms and Conditions
        </FooterFlowTextContent>
        <Current active={Router.pathname === "/terms" && true}>Current</Current>
      </FooterFlowText>
      <FooterFlowText>
        <FooterFlowTextContent
          onClick={() => Router.push("/privacy")}
          active={Router.pathname === "/privacy" && true}
        >
          Privacy Notice
        </FooterFlowTextContent>
        <Current active={Router.pathname === "/privacy" && true}>
          Current
        </Current>
      </FooterFlowText>
      <FooterFlowText>
        <FooterFlowTextContent
          onClick={() => Router.push("/risk")}
          active={Router.pathname === "/risk" && true}
        >
          Risk Warning
        </FooterFlowTextContent>
        <Current active={Router.pathname === "/risk" && true}>Current</Current>
      </FooterFlowText>
      <FooterFlowText>
        <FooterFlowTextContent
          onClick={() => Router.push("/aml")}
          active={Router.pathname === "/aml" && true}
        >
          AML and Sanctions Policy
        </FooterFlowTextContent>
        <Current active={Router.pathname === "/aml" && true}>Current</Current>
      </FooterFlowText>
    </FooterFlowContainer>
  );
};

export default FooterFlow;
