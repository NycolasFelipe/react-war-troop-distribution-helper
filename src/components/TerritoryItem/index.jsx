import * as C from './styles';

function TerritoryItem({
  continent,
  territory,
  divHeight,
  onClick,
  deleteItemActive,
  hideTerritory,
}) {
  let backgroundColor = '';
  switch (continent) {
    case 'Europe':
      backgroundColor = '#228be6';
      break;
    case 'Asia':
      backgroundColor = '#fab005';
      break;
    case 'Oceania':
      backgroundColor = '#f02020';
      break;
    case 'North America':
      backgroundColor = '#fd7e14';
      break;
    case 'South America':
      backgroundColor = '#40c057';
      break;
    case 'Africa':
      backgroundColor = '#be4bdb';
      break;
  }

  return (
    <C.Container
      divHeight={divHeight}
      onClick={onClick}
      deleteItemActive={deleteItemActive}
      backgroundColor={backgroundColor}
    >
      <C.Continent hideTerritory={hideTerritory}>{continent}</C.Continent>
      <C.Territory hideTerritory={hideTerritory}>{territory}</C.Territory>
    </C.Container>
  );
}

export default TerritoryItem;
