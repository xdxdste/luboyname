import { useState } from 'react';
import './App.css';
import BackGround from './components/BackGround/BackGround.jsx';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);

  return (
    <>
      <BackGround />
    </>
  );
}

export default App;
