import React from 'react';
import { useTransition } from 'react-spring';
import { StyledAuthTitle, StyledAuthButton } from '../shared';
import {
  StyledAuthDescriptionPart,
  StyledAuthDescription,
  StyledAnimatedDescriptionBox,
} from './styled';
import { AuthModes } from '../../constants';

interface IAuthDescriptionPartProps {
  authMode: AuthModes;
  onToggleAuthMode: () => void;
}

const AuthDescriptionPart: React.FC<IAuthDescriptionPartProps> = React.memo(
  function AuthDescriptionPart(props) {
    const transition = useTransition(props.authMode, null, {
      from: {
        transform:
          props.authMode === AuthModes.signIn
            ? 'translateX(-100%)'
            : 'translateX(100%)',
        opacity: 0,
      },
      enter: {
        transform: 'translateX(0%)',
        opacity: 1,
      },
      leave: {
        transform:
          props.authMode === AuthModes.signIn
            ? 'translateX(50%)'
            : 'translateX(-50%)',
        opacity: 0,
      },
      config: {
        duration: 800,
      },
    });

    return (
      <StyledAuthDescriptionPart>
        {transition.map(({ item, props, key }) =>
          item ? (
            <StyledAnimatedDescriptionBox key={key} style={props}>
              <StyledAuthTitle>Hello, Friend!</StyledAuthTitle>
              <StyledAuthDescription>
                Enter your personal details and start journey with us
              </StyledAuthDescription>
            </StyledAnimatedDescriptionBox>
          ) : (
            <StyledAnimatedDescriptionBox key={key} style={props}>
              <StyledAuthTitle>Welcome Back!</StyledAuthTitle>
              <StyledAuthDescription>
                To keep connected with us please login with your personal info
              </StyledAuthDescription>
            </StyledAnimatedDescriptionBox>
          )
        )}
        <StyledAuthButton className="switch" onClick={props.onToggleAuthMode}>
          SIGN UP
        </StyledAuthButton>
      </StyledAuthDescriptionPart>
    );
  }
);

export { AuthDescriptionPart };
