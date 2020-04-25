import styled from 'styled-components';

export const StyledAuthFormPart = styled.div`
  position: absolute;
  left: 50%;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 1s;

  .switched & {
    transform: translateX(-100%);
  }
`;

export const StyledAuthFormTitleLayout = styled.div`
  margin-bottom: 30px;
`;

export const StyledInput = styled.input`
  display: block;
  width: 70%;
  font-weight: (--thinFont);
  padding: 10px;
  border: none;
  margin: 0 auto;
  margin-bottom: 10px;
  background-color: #f3f3f3;
  color: #999;

  &::placeholder {
    color: #afaeb3;
  }
`;

export const StyledForgotYourPassword = styled.a`
  align-self: center;
  color: #666;
  font-weight: var(--boldFont);
  text-decoration: none;
  margin-top: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #999;

  &:hover {
    color: #444;
  }
`;
