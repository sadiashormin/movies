import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Home} from './home';
import {Movie} from './movie/movie';
import {ShowAll} from './showAll';
import './index.css';
import './movie/video-react.css'; 
class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
        <Route path={'/movies/:all'} component={ShowAll} />
          <Route path={'/movie/:id'} component={Movie} />
          <Route path={'/'} component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
