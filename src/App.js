import {Switch, Route} from 'react-router-dom'

import './App.css'

import HomePage from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/team-matches/:id" component={TeamMatches} />
    <NotFound />
  </Switch>
)

export default App
