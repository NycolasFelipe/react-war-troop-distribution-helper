import { useState } from 'react';
import { useContext } from 'react';
import TerritoriesContext from '../../contexts/TerritoriesContext';
import * as C from './styles';
import CheckBox from '../CheckBox';
import Title from '../Title';
import Input from '../Input';
import ButtonInfo from '../ButtonInfo';
import TerritoryItem from '../TerritoryItem';

function ContainerSettings() {
  const { territories, setTerritories } = useContext(TerritoriesContext);
  const filteredTerritories = (continent) => {
    return territories.filter((item) => item[0] === continent).length;
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
          borderRadius={'0'}
          text={text}
          lockValue={lockValue}
        />
      );
    } else {
      return (
        <Input
          defaultValue={array[value][bonus]}
          alignCenter={true}
          borderRadius={'0'}
          text={text}
        />
      );
    }
  };

  const territoryItem = (continent) => {
    return (
      <TerritoryItem
        divHeight={'auto'}
        hideTerritory={true}
        continent={continent}
      />
    );
  };

  const [playerItem1, setPlayerItem1] = useState(true);
  const [playerItem2, setPlayerItem2] = useState(true);
  const [playerItem3, setPlayerItem3] = useState(true);
  const [playerItem4, setPlayerItem4] = useState(false);
  const [playerItem5, setPlayerItem5] = useState(false);
  const [playerItem6, setPlayerItem6] = useState(false);

  const playerItem = (player, defaultColor) => {
    const playerItems = [
      ['playerItem1', playerItem1, setPlayerItem1],
      ['playerItem2', playerItem2, setPlayerItem2],
      ['playerItem3', playerItem3, setPlayerItem3],
      ['playerItem4', playerItem4, setPlayerItem4],
      ['playerItem5', playerItem5, setPlayerItem5],
      ['playerItem6', playerItem6, setPlayerItem6],
    ];
    const filteredPlayer = playerItems.filter((item) => item[0] === player);

    const handleCheckedPlayer = (action) => {
      if (action === 'set') {
        filteredPlayer[0][2](!filteredPlayer[0][1]);
      } else if (action === 'get') {
        return filteredPlayer[0][1];
      }
    };

    return (
      <C.PlayerItem>
        <C.PlayerItemColor defaultChecked={handleCheckedPlayer('get')}>
          <Input defaultValue={defaultColor} borderRadius='0' />
        </C.PlayerItemColor>
        <C.PlayerItemName defaultChecked={handleCheckedPlayer('get')}>
          <Input borderRadius='0' />
        </C.PlayerItemName>
        <C.PlayerDottedLine />
        <C.PlayerCheckBox>
          <CheckBox
            checked={handleCheckedPlayer('get')}
            onClick={() => handleCheckedPlayer('set')}
          />
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
        <C.PlayerItems>
          {playerItem('playerItem1', 'Black')}
          {playerItem('playerItem2', 'Blue')}
          {playerItem('playerItem3', 'Green')}
          {playerItem('playerItem4', 'Red')}
          {playerItem('playerItem5', 'White')}
          {playerItem('playerItem6', 'Yellow')}
        </C.PlayerItems>
      </C.PlayerSettings>
    </C.ContainerSettings>
  );
}

export default ContainerSettings;
