import * as C from './styles';

function Button({
  text,
  onClick,
  buttonWidth = '95%',
  buttonHeight = '2rem',
  buttonBgColor = '#808080',
  buttonBorderColor = '#808080',
  color = '#fff',
  disabled,
}) {
  return (
    <C.Button
      onClick={onClick}
      type='button'
      buttonWidth={buttonWidth}
      buttonHeight={buttonHeight}
      buttonBgColor={buttonBgColor}
      buttonBorderColor={buttonBorderColor}
      color={color}
      disabled={disabled}
    >
      {text}
    </C.Button>
  );
}

export default Button;
