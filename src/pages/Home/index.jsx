import { useMemo, useState } from 'react';
import TerritoriesContext from '../../contexts/TerritoriesContext';
import * as C from './styles';
import ContainerTerritories from '../../components/ContainerTerritories';

function Home() {
  const [territories, setTerritories] = useState([
    ['Europe', 'Iceland'],
    ['Europe', 'Sweden'],
    ['Europe', 'Moscow'],
    ['Europe', 'Poland'],
    ['Europe', 'Germany'],
    ['Europe', 'France'],
    ['Europe', 'England'],
    ['Asia', 'Middle East'],
    ['Asia', 'India'],
    ['Asia', 'Vietnam'],
    ['Asia', 'China'],
    ['Asia', 'Japan'],
    ['Asia', 'Siberia'],
    ['Asia', 'Vladivostok'],
    ['Asia', 'Dudinka'],
    ['Asia', 'Mongolia'],
    ['Asia', 'Omsk'],
    ['Asia', 'Aral'],
    ['Asia', 'Tchita'],
    ['Oceania', 'Australia'],
    ['Oceania', 'New Guinea'],
    ['Oceania', 'Sumatra'],
    ['Oceania', 'Borneo'],
    ['North America', 'Greenland'],
    ['North America', 'Alaska'],
    ['North America', 'Mackenzie'],
    ['North America', 'Vancouver'],
    ['North America', 'California'],
    ['North America', 'Ottawa'],
    ['North America', 'Labrador'],
    ['North America', 'New York'],
    ['North America', 'Mexico'],
    ['South America', 'Brazil'],
    ['South America', 'Peru'],
    ['South America', 'Argentina'],
    ['South America', 'Venezuela'],
    ['Africa', 'Algeria'],
    ['Africa', 'Egypt'],
    ['Africa', 'Sudan'],
    ['Africa', 'Congo'],
    ['Africa', 'South Africa'],
    ['Africa', 'Madagascar'],
  ]);
  const territoriesValue = useMemo(
    () => ({ territories, setTerritories }),
    [territories]
  );

  return (
    <C.Container>
      <C.ContainerGameSettings>
        <TerritoriesContext.Provider value={territoriesValue}>
          <ContainerTerritories />
        </TerritoriesContext.Provider>
      </C.ContainerGameSettings>
    </C.Container>
  );
}
export default Home;
