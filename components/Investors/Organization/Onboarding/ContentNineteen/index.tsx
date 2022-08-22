import { useDispatch } from "react-redux";
import { organizationFowardRoute } from "../../../../../store/actions";
import { ContinueButton } from "../../../Assets/Buttons";
import {
  CardLabel,
  CheckboxContainer,
  Date,
  FormContainer,
  Input,
  Label,
  LabelComment,
  LabelFlex,
  Row,
  Select,
  TextBody,
  TextTitle,
} from "../../../Assets/common";
import { PageBarTypes } from "../../../types";
import { FundraisingFormTitle, SelectFundraiserCategory } from "./styles";

const startUpCategoryCard = [
  {
    key: 1,
    content: "Consumer/B2C",
    cardType: "CNSMRB2C",
  },
  {
    key: 2,
    content: "Education",
    cardType: "EDUCATN",
  },
  {
    key: 3,
    content: "Data (or Big Data)",
    cardType: "DATA",
  },
  {
    key: 4,
    content: "Enterprise/B2B",
    cardType: "ENTRPRSB2B",
  },
  {
    key: 5,
    content: "Technology",
    cardType: "TECH",
  },
  {
    key: 6,
    content: "Funds",
    cardType: "FUNDS",
  },
  {
    key: 7,
    content: "Energy",
    cardType: "ENERGY",
  },
  {
    key: 8,
    content: "Hardware",
    cardType: "HARDWARE",
  },
  {
    key: 9,
    content: "Insurance",
    cardType: "INSURANCE",
  },
  {
    key: 10,
    content: "Fin tech",
    cardType: "FINTECH",
  },
  {
    key: 11,
    content: "Software",
    cardType: "SOFTWARE",
  },
  {
    key: 12,
    content: "Gaming",
    cardType: "GAMING",
  },
  {
    key: 13,
    content: "Impact",
    cardType: "IMPACT",
  },
  {
    key: 14,
    content: "Crypto/Blockchain",
    cardType: "CRYPTO",
  },
  {
    key: 15,
    content: "Media & Entertainment",
    cardType: "MEDIA",
  },
  {
    key: 16,
    content: "Market Places",
    cardType: "MRKTPLCES",
  },
  {
    key: 17,
    content: "Real Estate",
    cardType: "RLESTATE",
  },
  {
    key: 18,
    content: "Cyber Security",
    cardType: "CYSEC",
  },
  {
    key: 19,
    content: "Healthcare",
    cardType: "HEALTHCARE",
  },
];

const ContentNineteen = ({ page }: PageBarTypes) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (page) dispatch(organizationFowardRoute(page));
  };

  return (
    <>
      <TextTitle>Fundraising Questionnaire</TextTitle>
      <FundraisingFormTitle>Section C - Startup Category</FundraisingFormTitle>
      <SelectFundraiserCategory>
        <CardLabel>Which category does your startup fall into?</CardLabel>
        <Row flexWrap="nowrap">
          {startUpCategoryCard.map((card) => {
            return (
              <LabelFlex
                flexPercentage="30%"
                padding="0rem 1rem 0rem 0rem"
                key={card.key}
              >
                <CheckboxContainer key={card.key}>
                  <input type="checkbox" name="select" value={card.cardType} />
                  <label>{card.content}</label>
                </CheckboxContainer>
              </LabelFlex>
            );
          })}
        </Row>
      </SelectFundraiserCategory>
      <ContinueButton onClick={handleClick}>Continue</ContinueButton>
    </>
  );
};

export default ContentNineteen;
