import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { observer } from 'mobx-react';
import { AuthModes } from './constants';
import { AuthDescriptionPart } from './components/auth-description-part';
import { AuthFormPart } from './components/auth-form-part';

const LoginPage = observer(() => {
  const [authMode, setAuthMode] = React.useState(AuthModes.signIn);
  const handleToggleMode = React.useCallback(
    () =>
      void setAuthMode((mode) =>
        mode === AuthModes.signIn ? AuthModes.signUp : AuthModes.signIn
      ),
    []
  );

  return (
    <StyledAuthPage className={cn({ switched: authMode === AuthModes.signUp })}>
      <AuthDescriptionPart onToggleAuthMode={handleToggleMode} />
      <AuthFormPart authMode={authMode} />
    </StyledAuthPage>
  );
});

export const StyledAuthPage = styled.div`
  --primary-auth-color: #3369fb;
  --contrast-primary-auth-color: #fff;

  height: 100vh;
  position: relative;
  overflow: hidden;
  text-align: center;
`;

export { LoginPage };
