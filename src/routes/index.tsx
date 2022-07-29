import { Route, Routes } from 'react-router-dom';

import Layout from './_shared/Layout/Layout';
import Home from './Home/Home';
import Progress from './Progress/Progress';
import Completion from './Completion/Completion';
import IncorrectNote from './IncorrectNote/IncorrectNote';
import Chart from './Chart/Chart';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/progress' element={<Progress />} />
        <Route path='/completion' element={<Completion />} />
        <Route path='/incorrectNote' element={<IncorrectNote />} />
        <Route path='/chart' element={<Chart />} />
      </Route>
    </Routes>
  );
};

export default App;
