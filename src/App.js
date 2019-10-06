import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import Search from './components/Navigation/Search';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/search" exact component={Search} />
          <Route path="/" exact component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
