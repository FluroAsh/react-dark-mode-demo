import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  all: unset; // resets all styling
  padding: 4px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  transition: 100ms ease-in-out;
  background-color: ${(props) => props.theme.btnColor};
  color: #ffee00; // changed based on state (light -> dark)
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.btnColorHover};
  }

  &:active {
    transform: translateY(2px);
    background: ${(props) => props.theme.btnColor};
  }
`;
