import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

function RoutesApp() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesApp;
