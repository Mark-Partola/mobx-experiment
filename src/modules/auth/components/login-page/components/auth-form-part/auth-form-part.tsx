import React from 'react';
import { StyledAuthTitle, StyledAuthButton } from '../shared';
import {
  StyledAuthFormPart,
  StyledAuthFormTitleLayout,
  StyledInput,
  StyledForgotYourPassword,
} from './styled';

const AuthFormPart: React.FC = React.memo(function AuthFormPart() {
  return (
    <StyledAuthFormPart>
      <StyledAuthFormTitleLayout>
        <StyledAuthTitle className="form-mode">Sign in</StyledAuthTitle>
      </StyledAuthFormTitleLayout>
      <StyledInput placeholder="Email" />
      <StyledInput placeholder="Password" />
      <StyledForgotYourPassword href="#">
        Forgot your password?
      </StyledForgotYourPassword>
      <StyledAuthButton onClick={window.console.log}>SIGN IN</StyledAuthButton>
    </StyledAuthFormPart>
  );
});

export { AuthFormPart };
