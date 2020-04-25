import React from 'react';
import { useTransition } from 'react-spring';
import { AuthModes } from '../../constants';
import { StyledAuthTitle, StyledAuthButton } from '../shared';
import {
  StyledAuthFormPart,
  StyledFormAnimatedSwitchContainer,
  StyledAuthFormTitleLayout,
  StyledInput,
  StyledForgotYourPassword,
} from './styled';

interface IAuthFormPartProps {
  authMode: AuthModes;
}

const AuthFormPart: React.FC<IAuthFormPartProps> = React.memo(
  function AuthFormPart(props) {
    const isSignIn = props.authMode === AuthModes.signIn;
    const transition = useTransition(props.authMode, null, {
      from: {
        opacity: 0,
        transform: `translateX(${isSignIn ? -100 : 100}%)`,
      },
      enter: { opacity: 1, transform: 'translateX(0%)' },
      leave: {
        opacity: 0,
        transform: `translateX(${isSignIn ? 100 : -100}%)`,
      },
      config: {
        duration: 1000,
      },
    });

    return (
      <StyledAuthFormPart>
        {transition.map(({ item, props: animation, key }) => {
          return item ? (
            <StyledFormAnimatedSwitchContainer key={key} style={animation}>
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
            </StyledFormAnimatedSwitchContainer>
          ) : (
            <StyledFormAnimatedSwitchContainer key={key} style={animation}>
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
            </StyledFormAnimatedSwitchContainer>
          );
        })}
      </StyledAuthFormPart>
    );
  }
);

export { AuthFormPart };
