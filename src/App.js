import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Browser, Route, Switch, } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Gallery1 from './pages/Gallery1'
import Gallery2 from './pages/Gallery2'


export default function App() {
  return (
    <Browser>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/gallery1' exact component={Gallery1}/>
        <Route path='/gallery2' exact component={Gallery2}/>

      </Switch>
    </Browser>
  )
}
