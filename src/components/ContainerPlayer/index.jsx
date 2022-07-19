import * as C from './styles';
import Button from '../Button';
import TerritoryItem from '../TerritoryItem';
import DataContext from '../../contexts/DataContext';
import { useContext } from 'react';

function ContainerPlayer({
  title,
  playerName,
  playerActive,
  playerIndex,
  territories,
}) {
  const { setAddTerritoryWindow } = useContext(DataContext);

  const showAddTerritoryWindow = (bool) => {
    setAddTerritoryWindow({
      active: bool,
      playerIndex: playerIndex,
    });
  };

  return (
    <C.ContainerPlayer playerActive={playerActive}>
      <C.PlayerHeader>
        <C.PlayerTitle>
          {title}
          {playerName}
        </C.PlayerTitle>
        <Button
          text={'x'}
          buttonWidth={'20px'}
          buttonHeight={'15px'}
          buttonBgColor={'#ca1e1e'}
          onClick={() => alert()}
        />
        <C.Territories>
          {'Territories'} <C.DottedLine /> {territories}
        </C.Territories>
      </C.PlayerHeader>
      <C.PlayerTerritories></C.PlayerTerritories>
      <C.PlayerButtons>
        <Button
          text={'Add Territory'}
          buttonHeight={'1.4rem'}
          buttonWidth={'100%'}
          buttonBgColor={'#2e8b2e'}
          fontSize={'0.7rem'}
          onClick={() => showAddTerritoryWindow(true)}
        />
        <Button
          text={'Delete Item'}
          buttonHeight={'1.2rem'}
          buttonWidth={'100%'}
          buttonBgColor={'#ca1e1e'}
          fontSize={'0.7rem'}
        />
      </C.PlayerButtons>
    </C.ContainerPlayer>
  );
}

export default ContainerPlayer;
