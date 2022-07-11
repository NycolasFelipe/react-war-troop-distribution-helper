import { useState } from 'react';
import * as C from './styles';

function ButtonInfo({ text }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <C.Container>
      <C.InfoWindow showInfo={showInfo}>{text}</C.InfoWindow>
      <C.ButtonInfo
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
      >
        ?
      </C.ButtonInfo>
    </C.Container>
  );
}

export default ButtonInfo;
