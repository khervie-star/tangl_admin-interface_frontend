import Router from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { individualFowardRoute } from "../../../store/actions";

const VerifyUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(individualFowardRoute(5));
      Router.replace("/Investor/Individual/Onboarding");
    } catch (error: any) {}
  }, []);
  return (
    <Loader>
      <h1>Please Wait...</h1>
    </Loader>
  );
};

export default VerifyUser;

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  h1 {
    font-family: "Outfit";
    font-size: 32px;
    font-weight: 600;
  }
`;
