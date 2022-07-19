import styled from 'styled-components';

export const ContainerAddTerritory = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: transparent;
  height: 0;
  width: 0;
  position: fixed;
  transform: translateX(50%);
  right: 50%;
  top: 10%;
  border-radius: 5px;
  padding: 0 10px;
  overflow: hidden;
  z-index: 2;

  ${(props) => {
    if (props.active) {
      return `  
      background: #111111;
      height: 80vh;
      width: 40vw;
      min-width: 540px;
      transition: background 0.1s ease;
      `;
    }
  }}
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 5%;
  width: 100%;
  padding-top: 8px;

  & > button {
    padding-bottom: 3px;
  }
`;

export const Title = styled.div`
  display: flex;
  color: #fff;
  font-size: 0.9rem;
  padding-bottom: 3px;
  pointer-events: none;
`;

export const TitleSpan = styled.div`
  color: #38a2ff;
  margin-left: 4px;
`;

export const Territories = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 80%;
`;

export const TerritoriesTitle = styled.div`
  color: #fff;
  font-size: 0.8rem;
  padding: 5px 10px;
  pointer-events: none;
`;

export const TerritoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
  margin: 0 auto;
  width: 95%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid #424242;
  overflow-y: auto;
  overflow-x: hidden;
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
  & > div:hover {
    cursor: pointer;
  }
`;

export const TerritoriesPlaceholder = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  pointer-events: none;
`;

export const AvailableTerritories = styled.div`
  width: 47%;
  height: 90%;
`;

export const PlayerTerritories = styled.div`
  width: 47%;
  height: 90%;
`;

export const TerritoriesButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 6%;
  height: 90%;
  padding-top: 30px;

  & > button {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 8%;

  & > button {
    width: 40%;
  }
`;
