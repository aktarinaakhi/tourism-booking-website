import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
