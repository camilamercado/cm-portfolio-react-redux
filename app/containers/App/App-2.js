/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import './style.scss';

const App = () => (
  <section className="full-bleed-wrapper">
    <div className="app-wrapper">
      <Helmet
        titleTemplate="Camila Mercado"
        defaultTitle="Camila Mercado"
      >
        <meta name="description" content="Camila Mercado Portfolio" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/work" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </div>
  </section>
);

export default App;
