import * as C from './styles';
import ContainerPlayer from '../ContainerPlayer';
import { useContext } from 'react';
import DataContext from '../../contexts/DataContext';

function ContainerPlayers() {
  const { players } = useContext(DataContext);

  const containerPlayer = (playerIndex, territories) => {
    return (
      <ContainerPlayer
        title={players[playerIndex].playerColor}
        playerName={` @ ${players[playerIndex].playerName}`}
        territories={territories}
        playerActive={players[playerIndex].playerActive}
      />
    );
  };

  return (
    <C.ContainerPlayers>
      {containerPlayer(0, 5)}
      {containerPlayer(1, 5)}
      {containerPlayer(2, 5)}
      {containerPlayer(3, 5)}
      {containerPlayer(4, 5)}
      {containerPlayer(5, 5)}

      <C.ContainerPlayerPlaceholder />
      <C.ContainerPlayerPlaceholder />
      <C.ContainerPlayerPlaceholder />
      <C.ContainerPlayerPlaceholder />
    </C.ContainerPlayers>
  );
}

export default ContainerPlayers;
