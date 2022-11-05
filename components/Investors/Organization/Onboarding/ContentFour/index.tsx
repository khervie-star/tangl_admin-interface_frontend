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
import { TelVerified, PasswordContainer } from "./styles";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import { RootState } from "../../../../../store/reducers";
import { useState } from "react";
import { investmentCompanySignup } from "../../../../../services/requests";
// import adminSignupSchema from "../../../../../Schema/adminSignupSchema";
import { adminType } from "../../../../../constants";
import _ from "lodash";
import toast from "react-hot-toast";
import { setAdminRegister } from "../../../../../store/actions/register";
import { useAppDispatch } from "../../../../../hooks";
import PasswordValidation from "./PasswordValidation";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";

const ContentFour = ({ page }: PageBarTypes) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);

  // Validation states
  const [lowerValidated, setLowerValidated] = useState(false);
  const [upperValidated, setUpperValidated] = useState(false);
  const [numberValidated, setNumberValidated] = useState(false);
  const [specialValidated, setSpecialValidated] = useState(false);
  const [lengthValidated, setLengthValidated] = useState(false);
  const [nameValidated, setNameValidated] = useState(false);

  // View password
  const [type, setType] = useState("password");

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

  const handlePasswordChange = (e: { target: { value: string } }) => {
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*])");
    const length = new RegExp("(?=.{8,})");
    if (lower.test(e.target.value)) {
      setLowerValidated(true);
    } else {
      setLowerValidated(false);
    }
    if (upper.test(e.target.value)) {
      setUpperValidated(true);
    } else {
      setUpperValidated(false);
    }
    if (number.test(e.target.value)) {
      setNumberValidated(true);
    } else {
      setNumberValidated(false);
    }
    if (special.test(e.target.value)) {
      setSpecialValidated(true);
    } else {
      setSpecialValidated(false);
    }
    if (length.test(e.target.value)) {
      setLengthValidated(true);
    } else {
      setLengthValidated(false);
    }
    if (e.target.value.includes("blessing")) {
      setNameValidated(false);
    } else {
      setNameValidated(true);
    }
  };

  const handleViewPassword = () => {
    if (type == "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextTitle>Create Password</TextTitle>
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

        <Input type="text" name="email" onChange={handleChange("email")} />

        <Label>Password</Label>
        <PasswordContainer>
          <Input type={type} onChange={handlePasswordChange} />

          <span onClick={handleViewPassword}>
            {type == "password" ? <RiEyeCloseFill /> : <RiEyeFill />}
          </span>
        </PasswordContainer>

        <PasswordValidation
          lowerValidated={lowerValidated}
          upperValidated={upperValidated}
          numberValidated={numberValidated}
          specialValidated={specialValidated}
          lengthValidated={lengthValidated}
          nameValidated={nameValidated}
        />
      </FormContainer>
      <DarkContinueButton disabled={loading}>
        {loading && "Creating Account"}
        {!loading && "Continue"}
      </DarkContinueButton>
    </form>
  );
};

export default ContentFour;
