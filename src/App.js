import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ManageAll from './components/ManageAll/ManageAll';
import Admin from './components/Admin/Dashboard';
import ExploreProducts from './components/Home/ExploreProducts/ExploreProducts';
import AddReviews from './components/UserDashboard/AddReviews/AddReviews';
import Payment from './components/UserDashboard/Payment/Payment';
import AddProducts from './components/AddProducts/AddProducts';
import MyOrders from './components/MyOrders/MyOrders';
import OrderForm from './components/OrderForm/OrderForm';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/explore">
              <ExploreProducts></ExploreProducts>
            </Route>
            <PrivateRoute exact path="/addReviews">
              <AddReviews></AddReviews>
            </PrivateRoute>
            <PrivateRoute exact path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute exact path="/addproducts">
              <AddProducts></AddProducts>
            </PrivateRoute>
            <PrivateRoute exact path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/manageall">
                <ManageAll></ManageAll>
            </PrivateRoute>
            <PrivateRoute exact path="/orderform/:orderId">
              <OrderForm></OrderForm>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
