import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 98%;
  background: ${(props) => props.backgroundColor};
  padding: 3px 5px;
  font-size: 0.8rem;

  transition: width 0.1s ease;

  ${(props) => {
    if (props.deleteItemActive) {
      return `
        &:hover {
          cursor: pointer;
          background: red;
          width: 96%;
          margin: 0 auto;
        }
        &:active {
          transform: scale(1.01);
        }
      `;
    }
    if (props.divHeight) {
      return `
        height: ${props.divHeight};
        line-height: 1;
      `;
    }
  }}
`;

export const Continent = styled.div`
  color: #fff;
  width: 55%;
  pointer-events: none;
`;

export const Territory = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  color: #fff;
  width: 45%;
  pointer-events: none;
`;
