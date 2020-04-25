import styled from 'styled-components';

export const StyledAuthDescriptionPart = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  z-index: 1;
  background-color: var(--primary-auth-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: description-part-switch-off 1s;
  animation-fill-mode: forwards;

  .switched & {
    animation: description-part-switch-on 1s;
    animation-fill-mode: forwards;
  }

  @keyframes description-part-switch-on {
    40% {
      width: 70%;
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
      width: 50%;
    }
  }

  @keyframes description-part-switch-off {
    0% {
      transform: translateX(100%);
      width: 50%;
    }
    40% {
      width: 70%;
      transform: translateX(30%);
    }
    100% {
      width: 50%;
      transform: translateX(0%);
    }
  }
`;

export const StyledAuthDescription = styled.span`
  color: var(--contrast-primary-auth-color);
  font-size: 16px;
  text-align: center;
`;
