import { useState } from 'react';
import { useContext } from 'react';
import TerritoriesContext from '../../contexts/TerritoriesContext';
import * as C from './styles';
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import Title from '../Title';
import TerritoryItem from '../TerritoryItem';

function ContainerTerritories() {
  const { territories, setTerritories } = useContext(TerritoriesContext);
  const [territoryName, setTerritoryName] = useState('');
  const [territoryContinent, setTerritoryContinent] = useState('Africa');

  const [addTerritoryWindow, setAddTerritoryWindow] = useState(false);
  const [showAddAlert, setShowAddAlert] = useState(false);
  const [showInputAlert, setShowInputAlert] = useState(false);

  const [deleteItemActive, setDeleteItemActive] = useState(false);

  const checkTerritoryDuplicate = (territoryName) => {
    for (let i = 0; i < territories.length; i++) {
      if (territories[i][1] === territoryName) return true;
    }
  };

  const [inputAlertText, setInputAlertText] = useState('');
  const inputAlert = (text) => {
    setInputAlertText(text);
    // Exibe alerta de erro
    setShowInputAlert(true);
    // Depois de um tempo, esconde o alerta novamente
    setTimeout(() => setShowInputAlert(false), 5000);
  };

  const handleAddTerritory = () => {
    // Se não digitar um nome para o território
    if (!territoryName) {
      inputAlert('You must type a name for the territory.');
    } else {
      if (checkTerritoryDuplicate(territoryName)) {
        inputAlert('There is already a territory with this name.');
      } else {
        // Caso insira dados válidos
        // Exibe confirmação de que o território foi adicionado
        setShowAddAlert(true);
        // Depois de um tempo, esconde o alerta novamente
        setTimeout(() => setShowAddAlert(false), 3000);
        // Adiciona o território à lista de territórios
        setTerritories((territories) => [
          ...territories,
          [territoryContinent, territoryName],
        ]);
        // Limpar o input de território
        setTerritoryName('');
        // Esconde o erro de nome inválido p/ o território, caso ainda esteja ativo
        setShowInputAlert(false);
      }
    }
  };

  const deleteItem = (e) => {
    if (deleteItemActive) {
      const territoryDeleted = e.target.innerText.split('\n')[1];
      const filteredTerritories = territories.filter(
        (item) => item[1] !== territoryDeleted
      );
      setTerritories(filteredTerritories);
      console.log(filteredTerritories);
    }
  };

  return (
    <C.ContainerTerritories>
      <C.TerritoriesContent>
        <C.AddAlert showAddAlert={showAddAlert}>Territory Added!</C.AddAlert>
        <C.TerritoriesTitle>
          <Title
            text={`Territories count: ${territories.length}`}
            titleWidth={'100%'}
          />
          <Title text={'Continent'} />
          <Title text={'| Territory'} />
        </C.TerritoriesTitle>
        <C.TerritoriesItems>
          {territories.map((item, index) => (
            <TerritoryItem
              key={index}
              continent={item[0]}
              territory={item[1]}
              onClick={(e) => deleteItem(e)}
              deleteItemActive={deleteItemActive}
            />
          ))}
        </C.TerritoriesItems>
        <C.TerritoriesAddWindow addTerritoryWindow={addTerritoryWindow}>
          <C.InputAlert showInputAlert={showInputAlert}>
            {inputAlertText}
          </C.InputAlert>
          <Input
            label={'labelAddTerritoryName'}
            text={"Territory's Name"}
            placeholder={'Ex.: Canada'}
            value={territoryName}
            onChange={(e) => setTerritoryName(e.target.value)}
          />
          <Select
            label={'labelAddTerritoryContinent'}
            text={'Continent'}
            options={[
              ['Africa', 'africa'],
              ['Asia', 'asia'],
              ['Europe', 'europe'],
              ['North America', 'northAmerica'],
              ['Oceania', 'oceania'],
              ['South America', 'southAmerica'],
            ]}
            onChange={(e) =>
              setTerritoryContinent(
                e.target.options[e.target.selectedIndex].text
              )
            }
          />
          <Button
            text={'Add'}
            buttonBgColor={'#228be6'}
            buttonWidth={'100%'}
            buttonHeight={'1.6rem'}
            onClick={() => handleAddTerritory()}
          />
        </C.TerritoriesAddWindow>
      </C.TerritoriesContent>
      <C.TerritoriesButtons>
        <Button
          text={addTerritoryWindow ? 'Finish' : 'Add Territory'}
          buttonBgColor={'#2e8b2e'}
          buttonWidth={'100%'}
          disabled={deleteItemActive}
          onClick={() => setAddTerritoryWindow(!addTerritoryWindow)}
        />
        <Button
          text={deleteItemActive ? 'Cancel' : 'Delete Item'}
          buttonBgColor={'#ca1e1e'}
          buttonWidth={'100%'}
          disabled={addTerritoryWindow}
          onClick={() => setDeleteItemActive(!deleteItemActive)}
        />
      </C.TerritoriesButtons>
    </C.ContainerTerritories>
  );
}

export default ContainerTerritories;
