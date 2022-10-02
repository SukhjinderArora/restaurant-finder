import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import Search from './components/Search';
import Location from './components/Location';
import Restaurants from './components/restaurants/Restaurants';
import Restaurant from './components/restaurants/restaurant/Restaurant';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="location" element={<Location />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="restaurant/:name/:id" element={<Restaurant />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
