import styled from 'styled-components';

export const ContainerSettings = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 5px;
  width: 50%;
  min-width: 360px;
  height: 100%;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px 10px;
`;

export const Title = styled.div`
  color: #fff;
  font-size: 0.8rem;
  pointer-events: none;
  width: 75%;
`;

export const BonusSettings = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  width: 100%;
  height: 45%;
`;

export const BonusHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 15%;
  padding-right: 3px;
  position: relative;
`;

export const BonusContinent = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  height: 100%;
`;

export const TerritoryItems = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  gap: 3px;
  height: 100%;
`;

export const BonusMin = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 33%;
  height: 100%;
  * {
    transition: all 0.2s ease;
  }
`;

export const BonusMinLeft = styled.div`
  margin-top: -10px;
  width: 40%;
  ${(props) => {
    if (!props.minBonusActive) {
      return `
        * {
          color: #505050;
          pointer-events: none;
        }
      `;
    }
  }}
`;

export const BonusMinRight = styled.div`
  margin-top: -10px;
  width: 40%;
  ${(props) => {
    if (!props.minBonusActive) {
      return `
        * {
          color: #505050;
          pointer-events: none;
        }
      `;
    }
  }}
`;

export const BonusTotal = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 33%;
  height: 100%;
`;

export const BonusTotalLeft = styled.div`
  margin-top: -10px;
  width: 40%;
`;

export const BonusTotalRight = styled.div`
  margin-top: -10px;
  width: 40%;
`;

export const PlayerSettings = styled.div`
  width: 100%;
  height: 45%;
`;

export const PlayerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 15%;
  padding-left: 10px;
  position: relative;
`;

export const PlayerItemsHeader = styled.div`
  display: flex;
  padding-left: 10px;
  & > div {
    width: 27%;
  }
`;

export const PlayerItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-right: 10px;
  padding-left: 10px;
  height: 70%;
`;

export const PlayerItem = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
`;

export const PlayerItemColor = styled.div`
  width: 30%;
  * {
    transition: all 0.2s ease;
  }

  ${(props) => {
    if (!props.defaultChecked) {
      return `
        * {
          color: #505050;
          pointer-events: none;
        }
      `;
    }
  }}
`;
export const PlayerItemName = styled.div`
  width: 30%;
  * {
    transition: all 0.2s ease;
  }

  ${(props) => {
    if (!props.defaultChecked) {
      return `
        * {
          color: #505050;
          pointer-events: none;
        }
      `;
    }
  }}
`;
export const PlayerCheckBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-left: 5px;
  padding-bottom: 3px;
`;
export const PlayerDottedLine = styled.div`
  width: 45%;
  height: 1.2rem;
  border-bottom: 2px dotted #424242;
`;
