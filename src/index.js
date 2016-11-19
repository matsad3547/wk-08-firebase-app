

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// import App from './modules/App'
// import About from './modules/About'
// import Repos from './modules/Repos'
// import Repo from './modules/Repo'
// import Home from './modules/Home'
import Routes from './modules/Routes'

// module.export.FbApp = FbApp.database();

render(<Router routes={Routes} history={browserHistory}/>, document.getElementById('app'));
