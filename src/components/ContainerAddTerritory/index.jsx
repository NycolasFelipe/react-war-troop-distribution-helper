import * as C from './styles';
import Button from '../Button';
import TerritoryItem from '../TerritoryItem';
import DataContext from '../../contexts/DataContext';
import { useContext, useState, useEffect } from 'react';

function ContainerAddTerritory() {
  const { addTerritoryWindow, setAddTerritoryWindow } = useContext(DataContext);
  const { territories, setTerritories } = useContext(DataContext);
  const { players } = useContext(DataContext);

  const showAddTerritoryWindow = (bool) => {
    setAddTerritoryWindow({
      active: bool,
      playerIndex: 0,
    });
    resetChanges();
  };

  const handleTitle = () => {
    let text = 'Add Territory to';
    let playerIndex = addTerritoryWindow.playerIndex;
    let playerColor = players[playerIndex].playerColor;
    let playerName = players[playerIndex].playerName;

    return (
      <>
        {text}
        <C.TitleSpan>{`${playerColor} @ ${playerName}`}</C.TitleSpan>
      </>
    );
  };

  const setSelected = (e) => {
    const territorySelected = e.target.innerText.split('\n')[1];
    const filteredTerritory = territoriesList.filter(
      (item) => item.territory === territorySelected
    )[0];

    territoriesList.map((item) => {
      if (item.index === filteredTerritory.index) {
        item.selected = !item.selected;
      }
      return item;
    });

    showAddTerritoryWindow(true);
  };

  const resetChanges = () => {
    // setTerritoriesList(
    //   territoriesList.map((item) => {
    //     item.selected = false;
    //     return item;
    //   })
    // );
    setPlayerTerritoriesList([]);
  };

  const compareAvailableTerritories = (a, b) => {
    if (a.selected > b.selected) {
      return -1;
    }
    if ((a.selected && b.selected) || (!a.selected && !b.selected)) {
      if (a.index > b.index) {
        return 1;
      }
      if (a.index < b.index) {
        return -1;
      }
    }
    return 0;
  };

  const comparePlayerTerritories = (a, b) => {
    if (a.index > b.index) {
      return 1;
    }
    if (a.index < b.index) {
      return -1;
    }
    return 0;
  };

  const territoriesList = territories;

  const availableTerritories = () => {
    territoriesList.sort(compareAvailableTerritories);
    return territoriesList.map((item, index) => (
      <TerritoryItem
        key={index}
        continent={item.continent}
        territory={item.territory}
        selected={item.selected}
        addTerritory={true}
        onClick={(e) => setSelected(e)}
      />
    ));
  };

  const [playerTerritoriesList, setPlayerTerritoriesList] = useState([]);

  const playerTerritories = () => {
    if (playerTerritoriesList.length > 0) {
      playerTerritoriesList.sort(comparePlayerTerritories);
      return playerTerritoriesList.map((item, index) => (
        <TerritoryItem
          key={index}
          continent={item.continent}
          territory={item.territory}
          selected={false}
          addTerritory={true}
        />
      ));
    }
  };

  const addPlayerTerritories = () => {
    const territoriesListFiltered = territoriesList.filter(
      (item) => item.selected
    );
    setPlayerTerritoriesList(
      territoriesListFiltered.map((item) => {
        return item;
      })
    );
  };

  const territorioesPlaceholderCount = () => {
    if (playerTerritoriesList.length > 0) {
      return `${100 - playerTerritoriesList.length * 7}%`;
    } else {
      return '100%';
    }
  };

  return (
    <C.ContainerAddTerritory active={addTerritoryWindow.active}>
      <C.Header>
        <C.Title>{handleTitle()}</C.Title>
        <Button
          text={'x'}
          buttonWidth='20px'
          buttonHeight='20px'
          buttonBgColor={'#ca1e1e'}
          onClick={() => showAddTerritoryWindow(false)}
        />
      </C.Header>
      <C.Territories>
        <C.AvailableTerritories>
          <C.TerritoriesTitle>Available Territories</C.TerritoriesTitle>
          <C.TerritoriesContainer>
            {availableTerritories()}
          </C.TerritoriesContainer>
        </C.AvailableTerritories>
        <C.TerritoriesButtons>
          <Button
            text={'>'}
            buttonBgColor={'#2e8b2e'}
            onClick={() => addPlayerTerritories()}
          />
          <Button text={'<'} buttonBgColor={'#ca1e1e'} />
        </C.TerritoriesButtons>
        <C.PlayerTerritories>
          <C.TerritoriesTitle>Player Territories</C.TerritoriesTitle>
          <C.TerritoriesContainer>
            {playerTerritories()}
            <C.TerritoriesPlaceholder height={territorioesPlaceholderCount()} />
          </C.TerritoriesContainer>
        </C.PlayerTerritories>
      </C.Territories>
      <C.Buttons>
        <Button
          text={'Save Changes'}
          buttonBgColor={'#2e8b2e'}
          onClick={() => showAddTerritoryWindow(false)}
        />
        <Button
          text={'Cancel'}
          buttonBgColor={'#ca1e1e'}
          onClick={() => showAddTerritoryWindow(false)}
        />
      </C.Buttons>
    </C.ContainerAddTerritory>
  );
}

export default ContainerAddTerritory;
