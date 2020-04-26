import React from 'react';
import { AuthModes } from '../../constants';
import { StyledAuthTitle, StyledAuthButton } from '../shared';
import {
  StyledAuthFormPart,
  StyledFormContainer,
  StyledAuthFormTitleLayout,
  StyledInput,
  StyledForgotYourPassword,
} from './styled';

interface IAuthFormPartProps {
  authMode: AuthModes;
}

const AuthFormPart: React.FC<IAuthFormPartProps> = React.memo(
  function AuthFormPart(props) {
    const [isSignInMode, setIsSignInMode] = React.useState(false);

    React.useEffect(() => {
      const timeoutId = setTimeout(() => {
        setIsSignInMode(props.authMode === AuthModes.signIn);
      }, 500);

      return () => clearTimeout(timeoutId);
    }, [props.authMode]);

    return (
      <StyledAuthFormPart>
        {isSignInMode ? (
          <StyledFormContainer>
            <StyledAuthFormTitleLayout>
              <StyledAuthTitle className="form-mode">Sign in</StyledAuthTitle>
            </StyledAuthFormTitleLayout>
            <StyledInput placeholder="Email" />
            <StyledInput placeholder="Password" />
            <StyledForgotYourPassword href="#">
              Forgot your password?
            </StyledForgotYourPassword>
            <StyledAuthButton onClick={window.console.log}>
              SIGN IN
            </StyledAuthButton>
          </StyledFormContainer>
        ) : (
          <StyledFormContainer>
            <StyledAuthFormTitleLayout>
              <StyledAuthTitle className="form-mode">
                Create account
              </StyledAuthTitle>
            </StyledAuthFormTitleLayout>
            <StyledInput placeholder="Name" />
            <StyledInput placeholder="Email" />
            <StyledInput placeholder="Password" />
            <StyledAuthButton onClick={window.console.log}>
              SIGN UP
            </StyledAuthButton>
          </StyledFormContainer>
        )}
      </StyledAuthFormPart>
    );
  }
);

export { AuthFormPart };
