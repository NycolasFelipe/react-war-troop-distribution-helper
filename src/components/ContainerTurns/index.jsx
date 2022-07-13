import { useState } from 'react';
import * as C from './styles';
import Button from '../Button';
import CheckBox from '../CheckBox';

function ContainerTurns() {
  const [tradeCardsActive, setTradeCardsActive] = useState(false);
  const [currentTurn, setCurrentTurn] = useState(0);
  const [cardsTraded, setCardsTraded] = useState(0);
  const [currentTrade, setCurrentTrade] = useState(0);
  const [nextTrade, setNextTrade] = useState(4);

  const tradeSetting = [
    [0, 4],
    [4, 6],
    [6, 8],
    [8, 10],
    [10, 12],
    [12, 15],
    [15, 20],
    [20, 25],
  ];

  const setTrade = (action) => {
    let tradeSettingIndex;
    switch (action) {
      case 'add':
        tradeSettingIndex = cardsTraded + 1;
        break;
      case 'remove':
        tradeSettingIndex = cardsTraded - 1;
        break;
    }

    if (cardsTraded < 7) {
      setCurrentTrade(tradeSetting[tradeSettingIndex][0]);
      setNextTrade(tradeSetting[tradeSettingIndex][1]);
    } else if (action === 'add') {
      setCurrentTrade(currentTrade + 5);
      setNextTrade(nextTrade + 5);
    } else if (action === 'remove') {
      setCurrentTrade(currentTrade - 5);
      setNextTrade(nextTrade - 5);
    }
  };

  const tradeCards = (type) => {
    if (type === 'add') {
      setCardsTraded(cardsTraded + 1);
      setTrade('add');
    } else if (type === 'remove' && cardsTraded > 0) {
      setCardsTraded(cardsTraded - 1);
      setTrade('remove');
    }
  };

  const tradeCardItem = (title, value) => {
    if (title === 'Cards traded') {
      return (
        <C.TradeCardsContentItem>
          <C.TradeContentTitle>{title}</C.TradeContentTitle>
          <C.DottedLine />
          <C.TradeContentValue>{value}</C.TradeContentValue>
        </C.TradeCardsContentItem>
      );
    } else {
      return (
        <C.TradeCardsContentItem>
          <C.TradeContentTitle>{title}</C.TradeContentTitle>
          <C.DottedLine />
          <C.TradeContentValue>+{value}</C.TradeContentValue>
        </C.TradeCardsContentItem>
      );
    }
  };

  const setTurn = (action) => {
    if (action === 'add') {
      setCurrentTurn(currentTurn + 1);
    } else if (action === 'remove' && currentTurn > 0) {
      setCurrentTurn(currentTurn - 1);
    }
  };

  return (
    <C.ContainerTurns>
      <C.TurnsContent>
        <C.CurrentTurn>
          <C.CurrentTurnHeader>
            <C.Title>Current Turn</C.Title>
            <C.DottedLine />
            <C.CurrentTurnValue>{currentTurn}</C.CurrentTurnValue>
          </C.CurrentTurnHeader>
          <C.CurrentTurnButton>
            <Button
              text={'End Turn'}
              buttonBgColor={'#228be6'}
              onClick={() => setTurn('add')}
            />
            <Button
              text={'-'}
              buttonWidth={'20%'}
              buttonBgColor={'#ca1e1e'}
              onClick={() => setTurn('remove')}
            />
          </C.CurrentTurnButton>
        </C.CurrentTurn>

        <C.TradeCards>
          <C.TradeCardsHeader>
            <C.Title>Trade Cards</C.Title>
            <CheckBox
              checked={false}
              onClick={() => setTradeCardsActive(!tradeCardsActive)}
            />
          </C.TradeCardsHeader>
          <C.TradeCardsContent tradeCardsActive={tradeCardsActive}>
            {tradeCardItem('Cards traded', cardsTraded)}
            {tradeCardItem('Current card trade', currentTrade)}
            {tradeCardItem('Next card trade', nextTrade)}
          </C.TradeCardsContent>
          <C.TradeCardsButton tradeCardsActive={tradeCardsActive}>
            <C.TradeCardsButtonHeader>
              <C.Title>Trade Card</C.Title>
            </C.TradeCardsButtonHeader>
            <C.TradeCardsButtonButtons>
              <Button
                text={'+'}
                buttonBgColor={'#2e8b2e'}
                buttonWidth={'80%'}
                buttonHeight={'25px'}
                onClick={() => tradeCards('add')}
              />
              <Button
                text={'-'}
                buttonBgColor={'#ca1e1e'}
                buttonWidth={'20%'}
                buttonHeight={'25px'}
                onClick={() => tradeCards('remove')}
              />
            </C.TradeCardsButtonButtons>
          </C.TradeCardsButton>
        </C.TradeCards>
      </C.TurnsContent>
    </C.ContainerTurns>
  );
}

export default ContainerTurns;
