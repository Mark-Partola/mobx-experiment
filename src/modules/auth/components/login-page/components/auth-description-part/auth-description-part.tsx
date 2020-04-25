import React from 'react';
import { StyledAuthTitle, StyledAuthButton } from '../shared';
import { StyledAuthDescriptionPart, StyledAuthDescription } from './styled';

interface IAuthDescriptionPartProps {
  onToggleAuthMode: () => void;
}

const AuthDescriptionPart: React.FC<IAuthDescriptionPartProps> = React.memo(
  function AuthDescriptionPart(props) {
    return (
      <StyledAuthDescriptionPart>
        <StyledAuthTitle>Hello, Friend!</StyledAuthTitle>
        <StyledAuthDescription>
          Enter your personal details and start journey with us
        </StyledAuthDescription>
        <StyledAuthButton className="switch" onClick={props.onToggleAuthMode}>
          SIGN UP
        </StyledAuthButton>
      </StyledAuthDescriptionPart>
    );
  }
);

export { AuthDescriptionPart };
