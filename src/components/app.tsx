import React from 'react';
import { Switch, Route } from "react-router-dom";
import Splash from './splash/splash';
import '../styles/index.scss';

const App : React.FC = () => {
  return (
    <div className="main-content">
        <Switch>
            <Route exact path='/' component={Splash} />
        </Switch>
    </div>
  );
}

export default App;
