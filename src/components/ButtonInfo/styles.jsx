import styled from 'styled-components';

export const Container = styled.div``;

export const ButtonInfo = styled.p`
  color: #aaa;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #fff;
  }
`;

export const InfoWindow = styled.div`
  background: #181818;
  height: 0;
  width: 100%;
  position: absolute;
  right: 0;
  top: 25px;
  overflow: hidden;
  color: transparent;
  font-size: 0.8rem;
  padding: 0 3px;
  border-radius: 5px;
  transition: height 0.3s ease;

  ${(props) => {
    if (props.showInfo) {
      return `
        height: 280%;
        color: #fff;
      `;
    }
  }}
`;
