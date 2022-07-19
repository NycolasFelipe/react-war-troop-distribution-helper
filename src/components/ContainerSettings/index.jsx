import { useState } from 'react';
import { useContext } from 'react';
import DataContext from '../../contexts/DataContext';
import * as C from './styles';
import CheckBox from '../CheckBox';
import Title from '../Title';
import Input from '../Input';
import ButtonInfo from '../ButtonInfo';
import TerritoryItem from '../TerritoryItem';

function ContainerSettings() {
  const { territories } = useContext(DataContext);
  const filteredTerritories = (continent) => {
    return territories.filter((item) => item.continent === continent).length;
  };

  const minBonus = [
    ['Africa', 4, 2],
    ['Asia', 7, 4],
    ['Europe', 4, 2],
    ['North America', 5, 3],
    ['Oceania', 2, 1],
    ['South America', 2, 1],
  ];
  const totalBonus = [
    ['Africa', filteredTerritories('Africa'), 3],
    ['Asia', filteredTerritories('Asia'), 7],
    ['Europe', filteredTerritories('Europe'), 5],
    ['North America', filteredTerritories('North America'), 5],
    ['Oceania', filteredTerritories('Oceania'), 2],
    ['South America', filteredTerritories('South America'), 2],
  ];
  const [minBonusActive, setMinBonusActive] = useState(false);

  const inputItem = (type, value, bonus, text, lockValue) => {
    let array;
    switch (type) {
      case 'minBonus':
        array = minBonus;
        break;
      case 'totalBonus':
        array = totalBonus;
        break;
    }
    if (lockValue) {
      return (
        <Input
          value={filteredTerritories(array[value][0])}
          readOnly={true}
          alignCenter={true}
          text={text}
          lockValue={lockValue}
        />
      );
    } else {
      return (
        <Input
          defaultValue={array[value][bonus]}
          alignCenter={true}
          text={text}
        />
      );
    }
  };

  const territoryItem = (continent) => {
    return (
      <TerritoryItem
        borderRadius={'5px'}
        divHeight={'19px'}
        hideTerritory={true}
        continent={continent}
      />
    );
  };

  const { players, setPlayers } = useContext(DataContext);

  const playerItem1 = useState(players[0]);
  const playerItem2 = useState(players[1]);
  const playerItem3 = useState(players[2]);
  const playerItem4 = useState(players[3]);
  const playerItem5 = useState(players[4]);
  const playerItem6 = useState(players[5]);

  const playerItem = (player) => {
    let playerIndex = player[0].playerIndex;
    let playerColor = player[0].playerColor;
    let playerName = player[0].playerName;
    let playerActive = player[0].playerActive;

    const setPlayerActive = () => {
      setPlayers(
        players.map((item) => {
          if (item.playerIndex === playerIndex) {
            item.playerActive = !item.playerActive;
          }
          return item;
        })
      );
    };

    const handleValueChange = (e, type) => {
      let value = e.target.value;
      if (value !== '') {
        setPlayers(
          players.map((item) => {
            if (item.playerIndex === playerIndex) {
              if (type === 'playerColor') {
                item.playerColor = value;
              } else if (type === 'playerName') {
                item.playerName = value;
              }
            }
            return item;
          })
        );
      }
    };

    return (
      <C.PlayerItem>
        <C.PlayerItemColor defaultChecked={playerActive}>
          <Input
            defaultValue={playerColor}
            onChange={(e) => handleValueChange(e, 'playerColor')}
          />
        </C.PlayerItemColor>
        <C.PlayerItemName defaultChecked={playerActive}>
          <Input
            defaultValue={playerName}
            onChange={(e) => handleValueChange(e, 'playerName')}
          />
        </C.PlayerItemName>
        <C.PlayerDottedLine />
        <C.PlayerCheckBox>
          <CheckBox checked={playerActive} onClick={() => setPlayerActive()} />
        </C.PlayerCheckBox>
      </C.PlayerItem>
    );
  };

  return (
    <C.ContainerSettings>
      <Title text={'Game Settings'} fontSize={'1rem'} />
      <C.BonusSettings>
        <C.BonusContinent>
          <C.BonusHeader>
            <C.Title>Continent</C.Title>
          </C.BonusHeader>
          <C.TerritoryItems>
            {territoryItem('Africa')}
            {territoryItem('Asia')}
            {territoryItem('Europe')}
            {territoryItem('North America')}
            {territoryItem('Oceania')}
            {territoryItem('South America')}
          </C.TerritoryItems>
        </C.BonusContinent>
        <C.BonusMin>
          <C.BonusHeader>
            <C.Title>Min. Bonus</C.Title>
            <CheckBox onClick={() => setMinBonusActive(!minBonusActive)} />
            <ButtonInfo
              text={
                'Minimum of territories on a continent to receive additional troops.'
              }
            />
          </C.BonusHeader>
          <C.BonusMinLeft minBonusActive={minBonusActive}>
            {inputItem('minBonus', 0, 1, 'Min.')}
            {inputItem('minBonus', 1, 1)}
            {inputItem('minBonus', 2, 1)}
            {inputItem('minBonus', 3, 1)}
            {inputItem('minBonus', 4, 1)}
            {inputItem('minBonus', 5, 1)}
          </C.BonusMinLeft>
          <C.BonusMinRight minBonusActive={minBonusActive}>
            {inputItem('minBonus', 0, 2, 'Bonus')}
            {inputItem('minBonus', 1, 2)}
            {inputItem('minBonus', 2, 2)}
            {inputItem('minBonus', 3, 2)}
            {inputItem('minBonus', 4, 2)}
            {inputItem('minBonus', 5, 2)}
          </C.BonusMinRight>
        </C.BonusMin>
        <C.BonusTotal>
          <C.BonusHeader>
            <C.Title>Total Bonus</C.Title>
            <ButtonInfo
              text={
                'Number of additional troops received when there is total dominance of a continent.'
              }
            />
          </C.BonusHeader>
          <C.BonusTotalLeft>
            {inputItem('totalBonus', 0, 1, 'Total', true)}
            {inputItem('totalBonus', 1, 1, '', true)}
            {inputItem('totalBonus', 2, 1, '', true)}
            {inputItem('totalBonus', 3, 1, '', true)}
            {inputItem('totalBonus', 4, 1, '', true)}
            {inputItem('totalBonus', 5, 1, '', true)}
          </C.BonusTotalLeft>
          <C.BonusTotalRight>
            {inputItem('totalBonus', 0, 2, 'Bonus')}
            {inputItem('totalBonus', 1, 2)}
            {inputItem('totalBonus', 2, 2)}
            {inputItem('totalBonus', 3, 2)}
            {inputItem('totalBonus', 4, 2)}
            {inputItem('totalBonus', 5, 2)}
          </C.BonusTotalRight>
        </C.BonusTotal>
      </C.BonusSettings>
      <C.PlayerSettings>
        <C.PlayerHeader>
          <C.Title>Players</C.Title>
        </C.PlayerHeader>
        <C.PlayerItemsHeader>
          <C.Title>Color</C.Title>
          <C.Title>Player Name</C.Title>
        </C.PlayerItemsHeader>
        <C.PlayerItems>{playerItem(playerItem1)}</C.PlayerItems>
        <C.PlayerItems>{playerItem(playerItem2)}</C.PlayerItems>
        <C.PlayerItems>{playerItem(playerItem3)}</C.PlayerItems>
        <C.PlayerItems>{playerItem(playerItem4)}</C.PlayerItems>
        <C.PlayerItems>{playerItem(playerItem5)}</C.PlayerItems>
        <C.PlayerItems>{playerItem(playerItem6)}</C.PlayerItems>
      </C.PlayerSettings>
    </C.ContainerSettings>
  );
}

export default ContainerSettings;
