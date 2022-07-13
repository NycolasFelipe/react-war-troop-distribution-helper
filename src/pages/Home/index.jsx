import { useMemo, useState } from 'react';
import TerritoriesContext from '../../contexts/TerritoriesContext';
import * as C from './styles';
import ContainerTerritories from '../../components/ContainerTerritories';
import ContainerSettings from '../../components/ContainerSettings';
import ContainerTurns from '../../components/ContainerTurns';

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
  const territoriesValue = useMemo(
    () => ({ territories, setTerritories }),
    [territories.sort()]
  );
  //#endregion

  return (
    <C.Container>
      <TerritoriesContext.Provider value={territoriesValue}>
        <C.ContainerGameSettings>
          <ContainerTerritories />
          <ContainerSettings />
          <ContainerTurns />
        </C.ContainerGameSettings>
      </TerritoriesContext.Provider>
    </C.Container>
  );
}
export default Home;
