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

  return (
    <C.ContainerSettings>
      <Title text={'Game Settings'} fontSize={'1rem'} />
      <C.BonusSettings>
        <C.BonusContinent>
          <C.BonusHeader>
            <C.BonusTitle>Continent</C.BonusTitle>
          </C.BonusHeader>
          <C.TerritoryItems>
            <TerritoryItem divHeight={'auto'} continent={'Africa'} />
            <TerritoryItem divHeight={'auto'} continent={'Asia'} />
            <TerritoryItem divHeight={'auto'} continent={'Europe'} />
            <TerritoryItem divHeight={'auto'} continent={'North America'} />
            <TerritoryItem divHeight={'auto'} continent={'Oceania'} />
            <TerritoryItem divHeight={'auto'} continent={'South America'} />
          </C.TerritoryItems>
        </C.BonusContinent>
        <C.BonusMin>
          <C.BonusHeader>
            <C.BonusTitle>Min. Bonus</C.BonusTitle>
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
            <C.BonusTitle>Total Bonus</C.BonusTitle>
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
    </C.ContainerSettings>
  );
}

export default ContainerSettings;
