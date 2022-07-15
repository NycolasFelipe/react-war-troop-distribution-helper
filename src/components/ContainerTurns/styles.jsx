import styled from 'styled-components';

export const ContainerTurns = styled.div`
  width: 18%;
  height: 100%;

  @media (max-width: 1050px) {
    width: 100%;
    height: 65%;
  }
`;

export const TurnsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  border: none;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
`;

export const CurrentTurn = styled.div`
  height: 20%;
  margin-bottom: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #424242;
  min-height: 80px;
`;

export const CurrentTurnHeader = styled.div`
  display: flex;
  align-content: stretch;
  padding: 5px 10px;
`;

export const Title = styled.div`
  color: #fff;
  font-size: 1rem;
  pointer-events: none;
`;

export const DottedLine = styled.div`
  height: 1.2rem;
  flex: 1;
  margin: -2px 10px;
  border-bottom: 2px dotted #424242;
`;

export const CurrentTurnValue = styled.p`
  color: #fff;
  pointer-events: none;
`;

export const CurrentTurnButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 5px;
  padding: 0 10px;
  height: 50%;
  width: 100%;
`;

export const TradeCards = styled.div`
  height: 77%;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #424242;
  min-height: 190px;
  * {
    transition: all 0.2s ease;
  }
  @media (max-width: 1050px) {
    height: 45%;
  }
`;

export const TradeCardsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
`;

export const TradeCardsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 5px 10px;
  transition: all 0.2s ease;

  ${(props) => {
    if (!props.tradeCardsActive) {
      return `
        pointer-events: none;
        * {
          color: #505050
        }
      `;
    }
  }}
`;

export const TradeCardsContentItem = styled.div`
  display: flex;
  color: #fff;
  font-size: 0.8rem;
  width: 100%;
`;

export const TradeContentTitle = styled.div`
  line-height: 2;
`;

export const TradeContentValue = styled.div`
  line-height: 2;
`;

export const TradeCardsButton = styled.div`
  padding: 5px 10px;
  transition: all 0.2s ease;
  ${(props) => {
    if (!props.tradeCardsActive) {
      return `
        pointer-events: none;
        * {
          color: #505050;
        }
          
      `;
    }
  }}
`;

export const TradeCardsButtonHeader = styled.div``;
export const TradeCardsButtonButtons = styled.div`
  padding: 5px 0;
  display: flex;
  gap: 5px;
`;
