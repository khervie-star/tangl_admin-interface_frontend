import React from "react";
import { countryListAllIsoData } from "../../../constants";
import {
  Flex,
  WaitlistContainer,
  WaitlistDescription,
  WaitlistDescriptionHeader,
  WaitlistDescriptionText,
  WaitlistForm,
  JoinWaitlist,
  Select,
  RadioContainer,
  WaitlistFlex,
  Terminate,
  WaitlistBar,
} from "./styles";
import { FlexWrap, Image, List } from "../Home/Assets/Common";
import { DeleteIcon } from "./Icons";
import { useRouter } from "next/router";

const WaitlistContent = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <>
      <WaitlistContainer>
        <WaitlistBar>
          <Terminate onClick={handleBack}>
            <DeleteIcon />
          </Terminate>
        </WaitlistBar>

        <WaitlistFlex>
          <FlexWrap display="both" flexPercentage="50%">
            <WaitlistDescription>
              <WaitlistDescriptionHeader>
                Join our waiting list
              </WaitlistDescriptionHeader>
              <WaitlistDescriptionText>
                We would love to have you as one of our first users. We&apos;ll
                keep you up to date regarding the Launch of our private beta.
              </WaitlistDescriptionText>
            </WaitlistDescription>
          </FlexWrap>
          <FlexWrap
            display="both"
            flexPercentage="50%"
            padding="0rem 0rem 0rem 5rem"
          >
            <WaitlistForm>
              <h1>Be one of the first to use our product.</h1>
              <div>
                <div>
                  <label>Your Name</label>
                </div>
                <input
                  type="text"
                  placeholder="Type or paste here"
                  name="name"
                  autoComplete="true"
                />
              </div>
              <div>
                <div>
                  <label>Your Email</label>
                </div>
                <input
                  type="text"
                  placeholder="Type or paste here"
                  autoComplete="true"
                  name="email"
                />
              </div>
              <div>
                <div>
                  <label>Country of Residence</label>
                </div>
                <Select>
                  <option value="none" selected disabled hidden>
                    Choose
                  </option>
                  {countryListAllIsoData.map((country, i) => (
                    <option value={country.name} key={i}>
                      {country.name}
                    </option>
                  ))}
                </Select>
              </div>
              <RadioContainer>
                <input type="radio" name="Terms and Condition" value="true" />
                <label>
                  I hereby agree to receive electronic newsletters, updates,
                  promotions and related messages regarding Tangl products.
                </label>
              </RadioContainer>
              <JoinWaitlist type="submit" value="Join Waitlist" />
            </WaitlistForm>
          </FlexWrap>
        </WaitlistFlex>
      </WaitlistContainer>
    </>
  );
};

export default WaitlistContent;
