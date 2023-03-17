import React, { useState } from "react";
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
  AccountTypeWrapper,
  AccountTypeRadioContainer,
  WaitlistBackground,
} from "./styles";
import { FlexWrap, Image, List } from "../Home/Assets/Common";
import { DeleteIcon } from "./Icons";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setWaitlist } from "../../../store/actions/waitlist";
import { RootState } from "../../../store";
import { joinWaitinglist } from "../../../services/requests";
import Swal from "sweetalert2";
import { DotLoader } from "react-spinners";

const WaitlistContent = () => {
  const [sending, setSending] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [waitlistDetails, setWaitlistDetails] = useState<any>({
    fullname: "",
    email: "",
    country: "",
    update_status: null,
  });

  const goBack = () => {
    router.back();
  };

  // Get waitlist data from root state
  const { data } = useAppSelector((store: RootState) => ({
    data: store.waitlist,
  }));

  const handleChange =
    (prop: string) => (event: { target: { value: string } }) => {
      dispatch(setWaitlist({ ...data, [prop]: event?.target.value }));
    };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setSending(true);

    try {
      const api_response = await joinWaitinglist(data);

      api_response.data.status
        ? Swal.fire({
            title: "Success",
            text: api_response.data.message,
            showConfirmButton: true,
            showCancelButton: false,
            confirmButtonText: "Close",
            confirmButtonColor: "#324a64",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              goBack();
            }
          })
        : Swal.fire({
            title: "Duplicate details     ",
            text: api_response.data.message,
            showConfirmButton: true,
            showCancelButton: false,
            confirmButtonText: "Close",
            confirmButtonColor: "#324a64",
            icon: "warning",
          }).then((result) => {
            if (result.isConfirmed) {
              goBack();
            }
          });

      setSending(false);
    } catch (err: any) {
      console.log(err);
      setSending(false);
      Swal.fire({
        title: "Error",
        text: err.message,
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: "Close",
        cancelButtonColor: "#324a64",
        icon: "error",
      });
    }
  };

  return (
    <>
      <WaitlistBackground>
        <WaitlistContainer>
          <WaitlistBar>
            <Terminate onClick={goBack}>
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
                  We would love to have you as one of our first users.
                  We&apos;ll keep you up to date regarding the Launch of our
                  private beta.
                </WaitlistDescriptionText>
              </WaitlistDescription>
            </FlexWrap>
            <FlexWrap
              display="both"
              flexPercentage="50%"
              padding="0rem 0rem 0rem 5rem">
              <WaitlistForm onSubmit={handleSubmit}>
                <h1>Be one of the first to use our product.</h1>
                <div>
                  <div>
                    <label>Your Name</label>
                  </div>
                  <input
                    type="text"
                    placeholder="Type or paste here"
                    name="fullname"
                    onChange={handleChange("fullname")}
                  />
                </div>
                <div>
                  <div>
                    <label>Your Email</label>
                  </div>
                  <input
                    type="text"
                    placeholder="Type or paste here"
                    name="email"
                    onChange={handleChange("email")}
                  />
                </div>
                <div>
                  <div>
                    <label>Select Account Type</label>
                  </div>
                  <AccountTypeWrapper>
                    <AccountTypeRadioContainer>
                      <input
                        type="radio"
                        name="Account Type"
                        value="investor"
                        required
                        onChange={handleChange("account_type")}
                      />
                      <label>Investor Account</label>
                    </AccountTypeRadioContainer>
                    <AccountTypeRadioContainer>
                      <input
                        type="radio"
                        name="Account Type"
                        value="admin"
                        required
                        onChange={handleChange("account_type")}
                      />
                      <label>Admin Account</label>
                    </AccountTypeRadioContainer>
                  </AccountTypeWrapper>
                </div>

                <div>
                  <div>
                    <label>Country of Residence</label>
                  </div>
                  <Select onChange={handleChange("country")}>
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
                  <input
                    type="radio"
                    name="Terms and Condition"
                    value={1}
                    required
                    onChange={handleChange("update_status")}
                  />
                  <label>
                    I hereby agree to receive electronic newsletters, updates,
                    promotions and related messages regarding Tangl products.
                  </label>
                </RadioContainer>
                <JoinWaitlist type="submit">
                  {!sending && "Join Waitlist"}
                  {sending && <DotLoader color="#fff" size={20} />}
                </JoinWaitlist>
              </WaitlistForm>
            </FlexWrap>
          </WaitlistFlex>
        </WaitlistContainer>
      </WaitlistBackground>
    </>
  );
};

export default WaitlistContent;
