import styled from 'styled-components';

export const ContainerSettings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 50%;
  height: 100%;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px 10px;
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

export const BonusTitle = styled.div`
  color: #fff;
  font-size: 0.8rem;
  pointer-events: none;
  width: 75%;
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
