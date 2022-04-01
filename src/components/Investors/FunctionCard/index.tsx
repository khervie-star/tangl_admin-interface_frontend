import { TickIcon } from "../Assets/Icons";
import { PageBarTypes } from "../types";
import {
  CardWrap,
  Current,
  DropList,
  Function,
  HeadWrap,
  Text,
} from "./styles";

const FunctionCard = ({ page }: PageBarTypes) => {
  return (
    <CardWrap>
      <Function>
        <HeadWrap active={page && page > 5 ? true : false}>
          <span>Registration</span>
          <Current active={page && page > 5 ? false : true}>Current</Current>
          <TickIcon
            active={page && page > 5 ? true : false}
            display={page && page > 5 ? true : false}
          />
        </HeadWrap>
        <DropList active={page && page > 5 ? false : true}>
          <Text>Choose registration type</Text>
          <Text active={page === 2 ? true : false}>Add phone number</Text>
          <Text active={page === 3 ? true : false}>Confirm phone number</Text>
          <Text active={page === 4 ? true : false}>
            2-Factor Authentication
          </Text>
        </DropList>
      </Function>
      <Function>
        <HeadWrap active={page && page > 10 ? true : false}>
          <span>KYC</span>
          <Current active={page && page > 5 && page < 11 ? true : false}>
            Current
          </Current>
          <TickIcon
            display={page && page > 5 && page < 11 ? false : true}
            active={page && page > 10 ? true : false}
          />
        </HeadWrap>
        <DropList active={page && page > 5 && page < 11 ? true : false}>
          <Text active={page === 6 ? true : false}>Personal Information</Text>
          <Text active={page === 7 || page === 8 ? true : false}>
            Upload Government ID
          </Text>
          <Text active={page === 9 || page === 10 ? true : false}>
            Upload proof of address
          </Text>
        </DropList>
      </Function>
      <Function>
        <HeadWrap active={page && page > 11 ? true : false}>
          <span>Security</span>
          <Current active={page && page > 10 && page < 12 ? true : false}>Current</Current>
          <TickIcon
            display={page && page === 11 ? false : true}
            active={page && page > 11 ? true : false}
          />
        </HeadWrap>
        <DropList active={page && page > 10  && page < 12 ? true : false}>
          <Text active={page === 11 ? true : false}>
            3rd party authentication
          </Text>
        </DropList>
      </Function>
    </CardWrap>
  );
};

export default FunctionCard;
