import * as C from './styles';

function Title({ text, titleWidth }) {
  return <C.Title titleWidth={titleWidth}>{text}</C.Title>;
}

export default Title;
