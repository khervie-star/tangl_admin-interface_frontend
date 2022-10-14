import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  CheckmarkIcon,
  CrossmarkIcon,
} from "../../../components/Investors/Assets/Icons";
import OnBoardNavBar from "../../../components/Investors/OnboardNav";
import { verifyEmail } from "../../../services/requests";
import {
  individualFowardRoute,
  organizationFowardRoute,
} from "../../../store/actions";
import {
  Loader,
  Column,
  VerificationResultTitle,
  VerificationResultDescription,
} from "./styles";

const VerifyUser = () => {
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const { query } = useRouter();
  const { token, role } = query;
  console.log(role);

  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const data = {
      token: token,
    };
    try {
      const verify = verifyEmail(data);

      Router.replace("/Investor/Organization/Onboarding");
      dispatch(organizationFowardRoute(5));
      // : (Router.replace("/Investor/Organization/Onboarding"),
      //   dispatch(individualFowardRoute(6)));
    } catch (error: any) {
      console.log(error);
      setError(error.response.data?.message || error.message);
    }
  }, []);
  return (
    <>
      <OnBoardNavBar />
      {!verified && !error && (
        <Column>
          <Loader />
          <h1>Please Wait...</h1>
        </Column>
      )}
      {verified && !error && (
        <Column>
          <CheckmarkIcon />
          <VerificationResultTitle color="success">
            Email verified successfully
          </VerificationResultTitle>
        </Column>
      )}
      {!verified && error && (
        <Column>
          <CrossmarkIcon />
          <VerificationResultTitle color="error">
            Verification Error
          </VerificationResultTitle>
          <VerificationResultDescription>{error}</VerificationResultDescription>
        </Column>
      )}
    </>
  );
};

export default VerifyUser;

// const Loader = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   h1 {
//     font-family: "Outfit";
//     font-size: 32px;
//     font-weight: 600;
//   }
// `;
