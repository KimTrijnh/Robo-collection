import React from 'react'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import Candidate from './Candidate'
import Notfound from './Notfound'

 const Routes = () => {
    return (
        <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path='./main/candidate/:id' component={Candidate} />
            <Route component={Notfound} />
        </Switch>  
        </Router>
    )
}

export default Routes;