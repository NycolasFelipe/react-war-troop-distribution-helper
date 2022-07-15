import styled from 'styled-components';

export const ContainerPlayers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  height: 300px;

  @media (max-width: 1280px) {
    height: 620px;
  }
  @media (max-width: 1050px) {
    padding-top: 5px;
  }
  @media (max-width: 660px) {
    height: 920px;
  }
`;

export const ContainerPlayerPlaceholder = styled.div`
  flex-grow: 1;
  flex-basis: 180px;
  height: 300px;
`;
