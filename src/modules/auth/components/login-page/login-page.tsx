import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { useAuthStore } from '../../store/use-auth-store';

const LoginPage = observer(() => {
  const authStore = useAuthStore();

  return (
    <div>
      <StyledTitle>Login Page</StyledTitle>
      <StyledLoginButton onClick={authStore.login}>Login</StyledLoginButton>
    </div>
  );
});

const StyledTitle = styled.div`
  color: rebeccapurple;
`;

const StyledLoginButton = styled.button`
  background-color: #99f;
  color: #fff;

  &:hover {
    background-color: #779;
  }
`;

export { LoginPage };
