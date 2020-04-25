import styled from 'styled-components';

export const StyledAuthTitle = styled.h1`
  font-size: 2rem;
  margin: 0 0 0.25em;
  color: var(--contrast-primary-auth-color);

  &.form-mode {
    color: var(--primary-auth-color);
  }
`;

export const StyledAuthButton = styled.button`
  font-size: 1.5rem;
  border-radius: 1em;
  padding: 0.5em 2em;
  display: block;
  margin: 0 auto;
  margin-top: 2em;
  color: var(--contrast-primary-auth-color);
  background-color: var(--primary-auth-color);
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0px 3px 1px -2px rgba(0, 0, 0, 0.2);
  }

  &:active {
    box-shadow: inset 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      inset 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      inset 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }

  &.switch {
    width: 60%;
    background-color: transparent;
    border: 1px solid var(--contrast-primary-auth-color);
  }
`;
