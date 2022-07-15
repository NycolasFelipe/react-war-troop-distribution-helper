import * as C from './styles';
import Button from '../Button';
import TerritoryItem from '../TerritoryItem';

function ContainerPlayer({ title, playerName, territories, playerActive }) {
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
