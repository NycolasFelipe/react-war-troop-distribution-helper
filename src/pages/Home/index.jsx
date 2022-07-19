import { useMemo, useState } from 'react';
import DataContext from '../../contexts/DataContext';
import * as C from './styles';
import ContainerAddTerritory from '../../components/ContainerAddTerritory';
import ContainerTerritories from '../../components/ContainerTerritories';
import ContainerSettings from '../../components/ContainerSettings';
import ContainerTurns from '../../components/ContainerTurns';
import ContainerPlayers from '../../components/ContainerPlayers';

function Home() {
  //#region Territories List
  const [territories, setTerritories] = useState([
    {
      index: 0,
      selected: false,
      continent: 'Africa',
      territory: 'Algeria',
    },
    {
      index: 1,
      selected: false,
      continent: 'Africa',
      territory: 'Congo',
    },
    {
      index: 2,
      selected: false,
      continent: 'Africa',
      territory: 'Egypt',
    },
    {
      index: 3,
      selected: false,
      continent: 'Africa',
      territory: 'Madagascar',
    },
    {
      index: 4,
      selected: false,
      continent: 'Africa',
      territory: 'South Africa',
    },
    {
      index: 5,
      selected: false,
      continent: 'Africa',
      territory: 'Sudan',
    },

    {
      index: 6,
      selected: false,
      continent: 'Asia',
      territory: 'Aral',
    },
    {
      index: 7,
      selected: false,
      continent: 'Asia',
      territory: 'China',
    },
    {
      index: 8,
      selected: false,
      continent: 'Asia',
      territory: 'Dudinka',
    },
    {
      index: 9,
      selected: false,
      continent: 'Asia',
      territory: 'India',
    },
    {
      index: 10,
      selected: false,
      continent: 'Asia',
      territory: 'Japan',
    },
    {
      index: 11,
      selected: false,
      continent: 'Asia',
      territory: 'Middle East',
    },
    {
      index: 12,
      selected: false,
      continent: 'Asia',
      territory: 'Mongolia',
    },
    {
      index: 13,
      selected: false,
      continent: 'Asia',
      territory: 'Omsk',
    },
    {
      index: 14,
      selected: false,
      continent: 'Asia',
      territory: 'Siberia',
    },
    {
      index: 15,
      selected: false,
      continent: 'Asia',
      territory: 'Tchita',
    },
    {
      index: 16,
      selected: false,
      continent: 'Asia',
      territory: 'Vietnam',
    },
    {
      index: 17,
      selected: false,
      continent: 'Asia',
      territory: 'Vladivostok',
    },
    {
      index: 18,
      selected: false,
      continent: 'Europe',
      territory: 'England',
    },
    {
      index: 19,
      selected: false,
      continent: 'Europe',
      territory: 'France',
    },
    {
      index: 20,
      selected: false,
      continent: 'Europe',
      territory: 'Germany',
    },
    {
      index: 21,
      selected: false,
      continent: 'Europe',
      territory: 'Iceland',
    },
    {
      index: 22,
      selected: false,
      continent: 'Europe',
      territory: 'Moscow',
    },
    {
      index: 23,
      selected: false,
      continent: 'Europe',
      territory: 'Poland',
    },
    {
      index: 24,
      selected: false,
      continent: 'Europe',
      territory: 'Sweden',
    },
    {
      index: 25,
      selected: false,
      continent: 'North America',
      territory: 'Alaska',
    },
    {
      index: 26,
      selected: false,
      continent: 'North America',
      territory: 'California',
    },
    {
      index: 27,
      selected: false,
      continent: 'North America',
      territory: 'Greenland',
    },
    {
      index: 28,
      selected: false,
      continent: 'North America',
      territory: 'Labrador',
    },
    {
      index: 29,
      selected: false,
      continent: 'North America',
      territory: 'Mackenzie',
    },
    {
      index: 30,
      selected: false,
      continent: 'North America',
      territory: 'Mexico',
    },
    {
      index: 31,
      selected: false,
      continent: 'North America',
      territory: 'New York',
    },
    {
      index: 32,
      selected: false,
      continent: 'North America',
      territory: 'Ottawa',
    },
    {
      index: 33,
      selected: false,
      continent: 'North America',
      territory: 'Vancouver',
    },
    {
      index: 34,
      selected: false,
      continent: 'Oceania',
      territory: 'Australia',
    },
    {
      index: 35,
      selected: false,
      continent: 'Oceania',
      territory: 'Borneo',
    },
    {
      index: 36,
      selected: false,
      continent: 'Oceania',
      territory: 'New Guinea',
    },
    {
      index: 37,
      selected: false,
      continent: 'Oceania',
      territory: 'Sumatra',
    },
    {
      index: 38,
      selected: false,
      continent: 'South America',
      territory: 'Argentina',
    },
    {
      index: 39,
      selected: false,
      continent: 'South America',
      territory: 'Brazil',
    },
    {
      index: 40,
      selected: false,
      continent: 'South America',
      territory: 'Peru',
    },
    {
      index: 41,
      selected: false,
      continent: 'South America',
      territory: 'Venezuela',
    },
  ]);
  //#endregion

  //#region Players
  const [players, setPlayers] = useState([
    {
      playerIndex: 0,
      playerColor: 'Black',
      playerName: 'Player 1',
      playerActive: true,
    },
    {
      playerIndex: 1,
      playerColor: 'Blue',
      playerName: 'Player 2',
      playerActive: true,
    },
    {
      playerIndex: 2,
      playerColor: 'Green',
      playerName: 'Player 3',
      playerActive: true,
    },
    {
      playerIndex: 3,
      playerColor: 'Red',
      playerName: 'Player 4',
      playerActive: false,
    },
    {
      playerIndex: 4,
      playerColor: 'White',
      playerName: 'Player 5',
      playerActive: false,
    },
    {
      playerIndex: 5,
      playerColor: 'Yellow',
      playerName: 'Player 6',
      playerActive: false,
    },
  ]);
  //#endregion

  //#region Window Add Territory
  const [addTerritoryWindow, setAddTerritoryWindow] = useState({
    active: true,
    playerIndex: 0,
  });
  //#endregion

  //#region Sort Territorie Rule
  const compareTerritories = (a, b) => {
    if (a.territory > b.territory) {
      return 1;
    }
    if (a.territory < b.territory) {
      return -1;
    }
    return 0;
  };

  //#region Provider Value
  const providerValue = useMemo(
    () => ({
      territories,
      setTerritories,
      players,
      setPlayers,
      addTerritoryWindow,
      setAddTerritoryWindow,
    }),
    [territories.sort(compareTerritories), players, addTerritoryWindow]
  );
  //#endregion

  return (
    <C.Container>
      <DataContext.Provider value={providerValue}>
        <ContainerAddTerritory />
        <C.ContainerGameSettings>
          <ContainerTerritories />
          <ContainerSettings />
          <ContainerTurns />
          <ContainerPlayers />
        </C.ContainerGameSettings>
      </DataContext.Provider>
    </C.Container>
  );
}
export default Home;
