import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 98%;
  background: ${(props) => props.backgroundColor};
  border-radius: 5px;
  padding: 3px 5px;
  font-size: 0.8rem;
`;

export const Continent = styled.div`
  color: #fff;
  width: 55%;
  pointer-events: none;
`;

export const Territory = styled.div`
  color: #fff;
  width: 45%;
  pointer-events: none;
`;
