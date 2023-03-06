import { LandingTitle } from "../Common";
import FooterFlow from "../FooterFlow";
import {
  FooterNavContainer,
  TermFLex,
  TermSubtitle,
  TermText,
  TermTitle,
  TermWrapper,
} from "../Terms/styles";

const RiskContent = () => {
  return (
    <FooterNavContainer>
      <LandingTitle>Legal Documents</LandingTitle>
      <TermWrapper>
        <TermFLex flexPercentage="70%" padding="0rem 2.5rem 0rem 0rem">
          <TermTitle>Risk Warning</TermTitle>
          <TermSubtitle>1. Loss of Capital</TermSubtitle>
          <TermText>
            If you invest in a company, it is possible that you will lose all of
            your invested capital. Your investment is not guaranteed by TANGL
            Capital Partners or by the companies themselves, and you should not
            invest more money than you can afford to lose without altering your
            standard of living. Potential investors should note that an
            investment through TANGL Capital Partners is subject to market
            fluctuations and there can be no assurance that any appreciation in
            value will occur.
          </TermText>
          <TermSubtitle>2. Illiquidity</TermSubtitle>
          <TermText>
            Any investment you make through TANGL Capital Partners will be
            highly illiquid. There is no active secondary market for the shares
            of the investee company. This means that you are unlikely to be able
            to sell your shares until and unless (a) the company floats on a
            stock exchange, or (b) is acquired by another company or (c) the
            investee company buys back the securities you purchased. The
            securities you purchase through TANGL Capital Partners are not
            listed on any exchange.
          </TermText>
          <TermSubtitle>3. Rarity of Dividends</TermSubtitle>
          <TermText>
            The businesses presented to investors rarely pay dividends. This
            means that if you invest in shares through TANGL Capital Partners,
            you are unlikely to receive any dividend pay-outs or to realise any
            return on your capital until you are able to sell your shares in the
            investee company. Even for a successful business, this is unlikely
            to occur for a number of years from the time you make your
            investment.
          </TermText>
          <TermSubtitle>4. Diversification</TermSubtitle>
          <TermText>
            Investing in startups should only be done as part of a diversified
            portfolio. This means that you should invest relatively small
            amounts in multiple businesses rather than a lot in one or two
            businesses. It also means that you should invest only a small
            proportion of your investable capital in startups as an asset class,
            with the majority of your investable capital invested in safer, more
            liquid assets.
          </TermText>
          <TermSubtitle>5. Tax</TermSubtitle>
          <TermText>
            Each time you invest, you must satisfy yourself prior to making any
            commitment that you understand and accept the tax consequences to
            you of making that particular investment, including the UK and
            foreign tax treatment of dividends, interest payments and capital
            gains or losses. The UK government provides certain types of tax
            relief for investments in small businesses by UK tax resident
            individuals. Tax reliefs are not guaranteed and depend on the
            entities invested in maintaining their qualifying status, and may be
            withdrawn at any time by HM Revenue & Customs. Tax treatment is
            dependent on the individual circumstances of each client and may be
            subject to change in the future. 
          </TermText>
          <TermSubtitle>6. Advice</TermSubtitle>
          <TermText>
            TANGL Capital Partners does not give investment advice or provide
            analysis or recommendations regarding investment opportunities.
            Investments can only be made by members of TANGL Capital Partners
            investors club on the basis of information provided. TANGL Capital
            Partners takes no responsibility for this information or for any
            recommendations, opinions or predictions.
          </TermText>
          <TermSubtitle>7. Past Performance</TermSubtitle>
          <TermText>
            Past performance is not a reliable indicator of future results. You
            should not rely on any past performance as a guarantee of future
            investment performance.
          </TermText>
          <TermSubtitle>8. Future performance</TermSubtitle>
          <TermText>
            Investee companies may provide forward-looking statements with
            respect to future results. Forward-looking statement are not
            guarantees of future results or performance and many different
            factors could cause actual results to be different from those that
            may be expressed or implied by such forward-looking statements. As
            such, forecasts are not a reliable indicator of future performance.
          </TermText>
          <TermSubtitle>10. Dilution</TermSubtitle>
          <TermText>
            Any equity investment you make through TANGL Capital Partners may be
            subject to dilution. Dilution occurs when the company in which you
            invest issues more shares after you invest (for example in follow-on
            equity fundraising or in connection with employee options) so that
            your share of ownership of the company declines. These new shares
            may also have certain preferential rights to dividends, sale
            proceeds and other matters, and the exercise of these rights may
            work to your disadvantage.
          </TermText>
          <TermSubtitle>11. Dependence on the Directors</TermSubtitle>
          <TermText>
            The success of many investee companies presented to investors will
            depend in part upon the ability of their directors to develop and
            maintain a strategy that achieves the company&apos;s investment
            objectives.
          </TermText>
          <TermSubtitle>12. Lack of Operating History</TermSubtitle>
          <TermText>
            Many investee companies presented by TANGL Capital Partners are
            Early-stage companies, recently formed entities and have no
            substantive operating history upon which prospective investors can
            evaluate likely performance.
          </TermText>
          <TermSubtitle>13. Client Classification</TermSubtitle>
          <TermText>
            Before being allowed to invest, you will need to be classified as an
            investor type. You will need to provide the relevant information to
            us, which you warrant to be truthful and accurate, in order that we
            can classify you. Please follow the steps when signing up to
            complete this process. If you no longer fall into at least one of
            the categories of investor available, you will give immediate
            written notice to TANGL Capital Partners and you will not access, or
            try to access the service unless and until you fall into one or more
            of these categories again.
          </TermText>
          <TermSubtitle>14. Jurisdiction</TermSubtitle>
          <TermText>
            The information and services provided on the Site are not provided
            to, and may not be used by, any person or entity in any jurisdiction
            where the provision or use thereof would be contrary to applicable
            laws, rules or regulations of any governmental authority or where
            TANGL Capital Partners is not authorised to provide such information
            or services. Some products and services described in the Site may
            not be available in all jurisdictions or to all clients. This list
            of risk factors does not necessarily outline all possible risks
            involved. Prospective investors should read the relevant investee
            companies’ pitch documents provided by TANGL Capital Partners before
            deciding whether to invest. If you are unsure about any aspect of
            the information provided by the company, you should seek advice from
            an independent financial adviser.
          </TermText>
        </TermFLex>
        <TermFLex flexPercentage="30%" padding="0rem 0rem 0rem 2.5rem">
          <FooterFlow />
        </TermFLex>
      </TermWrapper>
    </FooterNavContainer>
  );
};

export default RiskContent;
