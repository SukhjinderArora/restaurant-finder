import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
