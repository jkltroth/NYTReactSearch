import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from "./pages/Home";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
    <MuiThemeProvider>
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} /> */}
                </Switch>
            </div>
        </Router>
    </MuiThemeProvider>

export default App;
