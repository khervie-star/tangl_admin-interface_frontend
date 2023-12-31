import Router from "next/router";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../../../../hooks";
import {
  individualBackwardRoute,
  individualFowardRoute,
} from "../../../../../store/actions";
import { ContinueButton, DarkContinueButton } from "../../../Assets/Buttons";
import { TextBody, TextTitle } from "../../../Assets/common";
import { EditIcon, ReloadIcon } from "../../../Assets/Icons";
import { PageBarTypes } from "../../../types";
import { ButtonWrap, MailContainer, ResendLink } from "./styles";

const ContentFour = ({ page }: PageBarTypes) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (page) dispatch(individualBackwardRoute(page));
  };

  const handleRoute = () => {
    Router.replace("/");
  };

  return (
    <>
      <TextTitle>Check your email</TextTitle>
      <TextBody>
        A verifiction link has been sent to your email. Click on the link to
        verify your account.
      </TextBody>
      <MailContainer>
        <h1>blessing@gmail.com</h1>
        <span>
          <p>Email not confirmed yet</p>
          <EditIcon />
        </span>
      </MailContainer>
      <ResendLink>
        <h1>Didn&apos;t receive a link?</h1>
        <span>
          <ReloadIcon />
          <p>Send again</p>
        </span>
      </ResendLink>
    </>
  );
};

export default ContentFour;
