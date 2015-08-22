import React from 'react';
import Router, { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Inbox from './components/inbox';
import Calendar from './components/calendar';
import Dashboard from './components/dashboard';


class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li className="active"><Link to="app">Dashboard</Link></li>
              <li><Link to="inbox">Inbox</Link></li>
              <li><Link to="calendar">Calendar</Link></li>
            </ul>
          </nav>
        </header>
        <RouteHandler/>
      </div>
    );
  }
}

let routes = (
  <Route name="app" path="/" handler={App}>  
    <Route name="inbox"  handler={Inbox} />
    <Route name="calendar" handler={Calendar} />
    <DefaultRoute handler={Dashboard} />
  </Route>
);

Router.run(routes, (Handler) =>
    React.render(<Handler />, document.body));
