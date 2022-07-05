import { useState } from 'react';

import * as C from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import TerritoryItem from '../../components/TerritoryItem';

function Home() {
  const [initialTerritories, setInitialTerritories] = useState([
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

  const [showTerritoryWindow, setShowTerritoryWindow] = useState('none');

  const addTerritoryWindow = () => {
    showTerritoryWindow === 'block'
      ? setShowTerritoryWindow('none')
      : setShowTerritoryWindow('block');
  };

  return (
    <C.Container>
      <C.ContainerGameSettings>
        <C.ContainerTerritories>
          <C.TerritoriesContent>
            <C.TerritoriesTitle>
              <Title text={'Continent'} />
              <Title text={'| Territory'} />
            </C.TerritoriesTitle>
            <C.TerritoriesItems>
              {initialTerritories.map((item, index) => (
                <TerritoryItem
                  key={index}
                  continent={item[0]}
                  territory={item[1]}
                />
              ))}
            </C.TerritoriesItems>
            <C.TerritoriesAddWindow
              showTerritoryWindow={showTerritoryWindow}
            ></C.TerritoriesAddWindow>
          </C.TerritoriesContent>
          <C.TerritoriesButtons>
            <Button
              onClick={() => addTerritoryWindow()}
              text={
                showTerritoryWindow === 'block' ? 'Finish' : 'Add Territory'
              }
              buttonBgColor={'#2e8b2e'}
            />
            <Button
              text={'Delete Item'}
              buttonBgColor={'#ca1e1e'}
              showTerritoryWindow={showTerritoryWindow}
            />
          </C.TerritoriesButtons>
        </C.ContainerTerritories>
      </C.ContainerGameSettings>
    </C.Container>
  );
}
export default Home;
