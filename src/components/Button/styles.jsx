import styled from 'styled-components';

export const Button = styled.button`
  width: ${(props) => props.buttonWidth};
  height: ${(props) => props.buttonHeight};
  border: 1px solid ${(props) => props.buttonBorderColor};
  background: transparent;
  border-radius: 5px;
  color: ${(props) => props.color};
  cursor: pointer;
  pointer-events: ${(props) => props.pointerEvents};

  &:hover {
    background: ${(props) => props.buttonBgColor};
    border: 1px solid ${(props) => props.buttonBgColor};
    transition: background 0.2s ease;
  }

  &:active {
    transform: scale(1.01);
  }
`;
