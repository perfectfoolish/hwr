import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import App from './pages/App';
import List from './pages/List';
import Detail from './pages/Detail';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render(
  <Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={ App }>
      <IndexRoute component={List}/>
      <Route path="detail/:repo" component={ Detail } />
    </Route>
  </Router>,
  document.getElementById('app')
);
