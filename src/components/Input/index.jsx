import * as C from './styles';

function Input({ text, label, value, placeholder, onChange }) {
  return (
    <C.Label htmlFor={label}>
      {text}
      <C.Input
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </C.Label>
  );
}

export default Input;
