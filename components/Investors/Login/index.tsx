import { useState } from "react";
import {
  CheckedIcon,
  CreateAnAcount,
  ForgotPassword,
  LoginButton,
  LoginContainer,
  LoginFooter,
  LoginFooterWrapper,
  LoginFormContainer,
  LoginFormFooter,
  RememberMe,
  UnCheckedIcon,
  UserCheckIcon,
} from "./styles";

const LoginContent = () => {
  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
    !checked ? setChecked(true) : setChecked(false);
  };
  return (
    <LoginContainer>
      <LoginFormContainer>
        <h1>Login</h1>
        <div>
          <div>
            <label>Enter your email</label>
          </div>
          <input type="text" placeholder="blessing@gmail.com" />
        </div>
        <div>
          <div>
            <label>Enter Password</label>
          </div>
          <input type="text" placeholder="••••••" />
        </div>
        <LoginFormFooter>
          <RememberMe checked={checked}>
            {checked ? (
              <CheckedIcon onClick={handleCheck} />
            ) : (
              <UnCheckedIcon onClick={handleCheck} />
            )}
            <span>Remember me?</span>
          </RememberMe>
          <ForgotPassword>Forgot Password?</ForgotPassword>
        </LoginFormFooter>
        <LoginButton>
          <button>Continue</button>
        </LoginButton>
        <LoginFooter>
          <LoginFooterWrapper>
            <span>New User?</span>
            <CreateAnAcount>
              <UserCheckIcon />
              <span>Create Account</span>
            </CreateAnAcount>
          </LoginFooterWrapper>
        </LoginFooter>
      </LoginFormContainer>
    </LoginContainer>
  );
};

export default LoginContent;
