import { Route, Routes } from 'react-router-dom';

import Layout from '../components/_shared/Layout/Layout';
import Home from './Home/Home';
import QuestionProgress from './QuestionProgress/QuestionProgress';
import QuestionFinish from './QuestionFinish/QuestionFinish';
import IncorrectNote from './IncorrectNote/IncorrectNote';
import CompareChart from './CompareChart/CompareChart';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/questionProgress' element={<QuestionProgress />} />
        <Route path='/questionFinish' element={<QuestionFinish />} />
        <Route path='/incorrectNote' element={<IncorrectNote />} />
        <Route path='/compareChart' element={<CompareChart />} />
      </Route>
    </Routes>
  );
};

export default App;
