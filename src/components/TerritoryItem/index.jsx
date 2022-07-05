import * as C from './styles';

function TerritoryItem({ continent, territory }) {
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
    <C.Container backgroundColor={backgroundColor}>
      <C.Continent>{continent}</C.Continent>
      <C.Territory>{territory}</C.Territory>
    </C.Container>
  );
}

export default TerritoryItem;