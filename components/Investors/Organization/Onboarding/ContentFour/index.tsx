import { useDispatch, useSelector } from "react-redux";
import { organizationFowardRoute } from "../../../../../store/actions";
import { DarkContinueButton } from "../../../Assets/Buttons";
import {
  ErrorMessage,
  FormContainer,
  Input,
  Label,
  TextBody,
  TextTitle,
} from "../../../Assets/common";
import { VerifiedIcon } from "../../../Assets/Icons";
import { PageBarTypes } from "../../../types";
import { TelVerified } from "./styles";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import { RootState } from "../../../../../store/reducers";
import { useState } from "react";
import { investmentCompanySignup } from "../../../../../services/requests";
import adminSignupSchema from "../../../../../Schema/adminSignUpSchema";
import { adminType } from "../../../../../constants";
import _ from "lodash";
import toast from "react-hot-toast";
import { setAdminRegister } from "../../../../../store/actions/register";

const ContentFour = ({ page }: PageBarTypes) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);

  // Get Admin type and phone number saved prevously in state
  const { OrgType } = useSelector((store: RootState) => ({
    OrgType: store.OrganizationType.selectedType,
  }));

  // Match organization type with name
  const getAdminType = () => {
    return _.find(adminType, ["cardType", OrgType]).content;
  };

  // Get register data from root state
  const { data } = useSelector((store: RootState) => ({
    data: store.register,
  }));

  console.log(data);

  // Handle admin/ Organization signup
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const register_data = {
      ...data,
      adminType: getAdminType(),
      walletPassphrase: "access",
    };
    try {
      setError("");
      setLoading(true);
      // const signupResponse = await investmentCompanySignup(register_data);
      // console.log(signupResponse);
      if (page) dispatch(organizationFowardRoute(page));
      // toast.success(signupResponse.data.message);
      setLoading(false);
      setError("");
    } catch (err: any) {
      console.log(err);
      setError(err.response.data.message || err.message);
      setLoading(false);
    }
  };

  // Get saved phone number from store for confirmation
  const { phone } = useSelector((store: RootState) => ({
    phone: store.register.phone,
  }));

  // handle Email and password change
  const handleChange =
    (prop: string) => (event: { target: { value: string } }) => {
      dispatch(setAdminRegister({ ...data, [prop]: event?.target.value }));
    };

  return (
    <form onSubmit={handleSubmit}>
      <TextTitle>2-Factor Authentication</TextTitle>
      <TextBody>
        Fill in the registration data. It will take a couple of minutes. You
        only need your phone number and e-mail.
      </TextBody>
      <TelVerified>
        <h1>{formatPhoneNumberIntl(phone)}</h1>
        <span>
          <VerifiedIcon />
          <p>verified</p>
        </span>
      </TelVerified>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <FormContainer>
        <Label>Email</Label>
        <Input type="text" onChange={handleChange("email")} />
        <Label>Password</Label>
        <Input type="password" onChange={handleChange("password")} />
      </FormContainer>
      <DarkContinueButton disabled={loading}>
        {loading && "Creating Account"}
        {!loading && "Continue"}
      </DarkContinueButton>
    </form>
  );
};

export default ContentFour;
