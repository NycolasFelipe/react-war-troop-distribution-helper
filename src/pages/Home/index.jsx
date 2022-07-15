import { useMemo, useState } from 'react';
import DataContext from '../../contexts/DataContext';
import * as C from './styles';
import ContainerTerritories from '../../components/ContainerTerritories';
import ContainerSettings from '../../components/ContainerSettings';
import ContainerTurns from '../../components/ContainerTurns';
import ContainerPlayers from '../../components/ContainerPlayers';

function Home() {
  //#region Territories List
  const [territories, setTerritories] = useState([
    ['Africa', 'Algeria'],
    ['Africa', 'Congo'],
    ['Africa', 'Egypt'],
    ['Africa', 'Madagascar'],
    ['Africa', 'South Africa'],
    ['Africa', 'Sudan'],
    ['Asia', 'Aral'],
    ['Asia', 'China'],
    ['Asia', 'Dudinka'],
    ['Asia', 'India'],
    ['Asia', 'Japan'],
    ['Asia', 'Middle East'],
    ['Asia', 'Mongolia'],
    ['Asia', 'Omsk'],
    ['Asia', 'Siberia'],
    ['Asia', 'Tchita'],
    ['Asia', 'Vietnam'],
    ['Asia', 'Vladivostok'],
    ['Europe', 'England'],
    ['Europe', 'France'],
    ['Europe', 'Germany'],
    ['Europe', 'Iceland'],
    ['Europe', 'Moscow'],
    ['Europe', 'Poland'],
    ['Europe', 'Sweden'],
    ['North America', 'Alaska'],
    ['North America', 'California'],
    ['North America', 'Greenland'],
    ['North America', 'Labrador'],
    ['North America', 'Mackenzie'],
    ['North America', 'Mexico'],
    ['North America', 'New York'],
    ['North America', 'Ottawa'],
    ['North America', 'Vancouver'],
    ['Oceania', 'Australia'],
    ['Oceania', 'Borneo'],
    ['Oceania', 'New Guinea'],
    ['Oceania', 'Sumatra'],
    ['South America', 'Argentina'],
    ['South America', 'Brazil'],
    ['South America', 'Peru'],
    ['South America', 'Venezuela'],
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

  const providerValue = useMemo(
    () => ({
      territories,
      setTerritories,
      players,
      setPlayers,
    }),
    [territories.sort(), players]
  );

  return (
    <C.Container>
      <DataContext.Provider value={providerValue}>
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
