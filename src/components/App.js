import React from 'react'
import NavBar from './NavBar'
import About from './About'
import Login from './Login'
import Home from './Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App(){
    return (
        <BrowserRouter>
            <NavBar /> 
            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App