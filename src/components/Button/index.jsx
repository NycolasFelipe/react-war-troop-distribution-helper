import * as C from './styles';

function Button({
  text,
  onClick,
  buttonWidth = '95%',
  buttonHeight = '2rem',
  buttonBgColor = '#808080',
  buttonBorderColor = '#808080',
  color = '#fff',
  pointerEvents = 'default',
  showTerritoryWindow,
}) {
  if (showTerritoryWindow === 'block') {
    buttonBorderColor = '#424242';
    buttonBgColor = 'transparent';
    color = '#424242';
    pointerEvents = 'none';
  }

  return (
    <C.Button
      type='button'
      onClick={onClick}
      buttonWidth={buttonWidth}
      buttonHeight={buttonHeight}
      buttonBgColor={buttonBgColor}
      buttonBorderColor={buttonBorderColor}
      color={color}
      pointerEvents={pointerEvents}
    >
      {text}
    </C.Button>
  );
}

export default Button;
