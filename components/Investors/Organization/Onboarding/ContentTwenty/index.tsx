import { useDispatch } from "react-redux";
import { organizationFowardRoute } from "../../../../../store/actions";
import { ContinueButton } from "../../../Assets/Buttons";
import {
  CardLabel,
  Date,
  FormContainer,
  Input,
  Label,
  LabelComment,
  LabelFlex,
  RadioContainer,
  Row,
  SelectRadio,
  Card,
  TextBody,
  TextTitle,
} from "../../../Assets/common";
import { FundraisingFormTitle, PoundsInputContainer, Prefix } from "./styles";
import { PageBarTypes } from "../../../types";
import { useAppDispatch } from "../../../../../hooks";

const financialStageCard = [
  {
    key: 1,
    content: "Seed",
    cardType: "SEED",
  },
  {
    key: 2,
    content: "Pre-seed",
    cardType: "PRESEED",
  },
  {
    key: 3,
    content: "Series A+",
    cardType: "SERIESA",
  },
];

const ContentSix = ({ page }: PageBarTypes) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (page) dispatch(organizationFowardRoute(page));
  };

  return (
    <>
      <TextTitle>Fundraising Questionnaire</TextTitle>
      <TextBody>Kindly fill in your personal information below.</TextBody>
      <FundraisingFormTitle>Section D - Startup Finances</FundraisingFormTitle>
      <SelectRadio>
        <CardLabel>What stage are you at?</CardLabel>
        <Row flexWrap="nowrap">
          {financialStageCard.map((card) => {
            return (
              <LabelFlex
                flexPercentage="30%"
                padding="0rem 1rem 0rem 0rem"
                key={card.key}
              >
                <RadioContainer key={card.key}>
                  <input type="radio" name="select" value={card.cardType} />
                  <label>{card.content}</label>
                </RadioContainer>
              </LabelFlex>
            );
          })}
        </Row>
      </SelectRadio>

      <FormContainer>
        <CardLabel>How much funding are you planning to raise? (£)</CardLabel>
        <PoundsInputContainer justify="flex-start" width="30%">
          <Prefix>
            <span>£</span>
          </Prefix>
          <input type="number" name="funds to be raised" placeholder="0" />
        </PoundsInputContainer>
      </FormContainer>

      <FormContainer>
        <Row>
          <LabelFlex flexPercentage="50%" padding="0rem 1rem 0rem 0rem">
            <CardLabel>Equity Offered (%) *</CardLabel>
            <PoundsInputContainer>
              <input type="number" name="funds to be raised" placeholder="0" />
              <Prefix>
                <span>%</span>
              </Prefix>
            </PoundsInputContainer>
          </LabelFlex>

          <LabelFlex flexPercentage="50%" padding="0rem 1rem 0rem 0rem">
            <CardLabel>Pre-money Valuation (EUR) *</CardLabel>
            <PoundsInputContainer>
              <Prefix>
                <span>EUR</span>
              </Prefix>
              <input type="number" name="funds to be raised" placeholder="0" />
            </PoundsInputContainer>
          </LabelFlex>
        </Row>
      </FormContainer>

      <FormContainer>
        <CardLabel>
          What % of the business do the founders currently own? *
        </CardLabel>
        <PoundsInputContainer justify="space-between" width="30%">
          <input type="number" name="funds to be raised" placeholder="0" />
          <Prefix>
            <span>%</span>
          </Prefix>
        </PoundsInputContainer>
      </FormContainer>
      <ContinueButton onClick={handleClick}>Continue</ContinueButton>
    </>
  );
};

export default ContentSix;
