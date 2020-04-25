import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { observer } from 'mobx-react';
import { AuthDescriptionPart } from './components/auth-description-part';
import { AuthFormPart } from './components/auth-form-part';

const LoginPage = observer(() => {
  const [switched, setSwitching] = React.useState(false);
  const handleToggleMode = React.useCallback(
    () => void setSwitching((it) => !it),
    []
  );

  return (
    <StyledAuthPage className={cn({ switched })}>
      <AuthDescriptionPart onToggleAuthMode={handleToggleMode} />
      <AuthFormPart />
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
