import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';
import PrivateRoute from './context/PrivateRoute';
import MyBooking from './pages/Dashboard/User/MyBooking/MyBooking'
import AddService from './pages/Dashboard/Admin/AddService/AddService';
import BookingList from './pages/Dashboard/User/BookingList/BookingList';
import MakeAdmin from './pages/Dashboard/Admin/MakeAdmin/MakeAdmin';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>

          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <PrivateRoute exact path="/placeorder/:serviceId">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>

          <PrivateRoute exact path="/myBooking">
            <MyBooking></MyBooking>
          </PrivateRoute>

          <PrivateRoute exact path="/addService">
            <AddService></AddService>
          </PrivateRoute>

          <PrivateRoute exact path="/bookingList">
            <BookingList></BookingList>
          </PrivateRoute>

          <PrivateRoute exact path="/admin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>

          <Route exact path="/login">
            <Login></Login>
          </Route>

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
