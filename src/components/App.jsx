import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';

import HomePage from './HomePage/HomePage';
import ExchangePage from './ExchangePage/ExchangePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/exchange" element={<ExchangePage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
