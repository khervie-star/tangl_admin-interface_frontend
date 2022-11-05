import React, { useState } from "react";
import { VerifiedIcon } from "../../Icons";
import { HelperText } from "./styles";
import { VscUnverified } from "react-icons/vsc";
import { contentTypes } from "../../../types";

const PasswordValidation = ({
  lowerValidated,
  upperValidated,
  numberValidated,
  specialValidated,
  lengthValidated,
  nameValidated,
}: contentTypes) => {
  return (
    <div>
      <HelperText validated={lengthValidated}>
        {lengthValidated ? (
          <VerifiedIcon />
        ) : (
          <span>
            <VscUnverified />
          </span>
        )}
        Must have at least 7 characters
      </HelperText>

      <HelperText validated={upperValidated && lowerValidated}>
        {upperValidated && lowerValidated ? (
          <VerifiedIcon />
        ) : (
          <span>
            <VscUnverified />
          </span>
        )}
        Must have at least an UPPERCASE and a lowercase letter
      </HelperText>

      <HelperText validated={nameValidated}>
        {nameValidated ? (
          <VerifiedIcon />
        ) : (
          <span>
            <VscUnverified />
          </span>
        )}
        Must not be similar to your name or email
      </HelperText>

      <HelperText validated={specialValidated}>
        {specialValidated ? (
          <VerifiedIcon />
        ) : (
          <span>
            <VscUnverified />
          </span>
        )}
        Must have at least an alphanumeric symbol e.g !@#$
      </HelperText>
    </div>
  );
};

export default PasswordValidation;
