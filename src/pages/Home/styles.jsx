import styled from 'styled-components';
import worldMap from '../../images/world-map.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: 95vh;
  background-image: url(${worldMap});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
  margin-top: 5vh;
`;

export const ContainerGameSettings = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  height: 70%;
`;

export const ContainerTerritories = styled.div`
  width: 280px;
  height: 100%;
`;

export const TerritoriesContent = styled.div`
  border: 1px solid #fff;
  height: 80%;
  width: 95%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 5px 10px;
  border-radius: 5px;
  position: relative;
`;

export const TerritoriesTitle = styled.div`
  display: flex;
`;

export const TerritoriesItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 8px;
  overflow-y: auto;
  height: 90%;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    --webkit-box-shadow: inset 0 0 6px #0000004d;
    background-color: #202020;
  }
`;

export const TerritoriesAddWindow = styled.div`
  display: ${(props) => props.showTerritoryWindow};
  width: 96%;
  height: 100px;
  bottom: 5px;
  left: 5px;
  background: #1f1f1f;
  position: absolute;
  border-radius: 5px;
  transition: all 1s ease;
`;

export const TerritoriesButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  padding: 10px 0;
  height: 20%;
`;
