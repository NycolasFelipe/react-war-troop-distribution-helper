import * as C from './styles';

function Input({
  text,
  label,
  value,
  defaultValue,
  placeholder,
  alignCenter,
  onChange,
  borderRadius,
  lockValue,
}) {
  return (
    <C.Label htmlFor={label}>
      {text}
      <C.Input
        id={label}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        alignCenter={alignCenter}
        onChange={onChange}
        borderRadius={borderRadius}
        lockValue={lockValue}
      />
    </C.Label>
  );
}

export default Input;
