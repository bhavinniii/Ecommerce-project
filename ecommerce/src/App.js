import AdminPage from "./components/AdminPage";
import Home from "./components/Home";
import Login from "./components/Login";
import MyOrders from "./components/MyOrders";
import Order from "./components/Order";
import Product from "./components/Product";
import Products from "./components/Products";
import Signup from "./components/Signup";
import Navbar from "./Layout/Navbar";
import {Routes,Route} from 'react-router-dom';
import PrivateRoute from "./routing/PrivateRoute";


  
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path ='/' element= {<Home/>} />
        <Route path ='/login' element={<Login />} />
        <Route path ='/signup' element= {<Signup/>} />
        <Route path ='/products' element= {<Products/>} />
        <Route path ='/admin' element= {<AdminPage/>} />

      </Routes>
      </div>
    

  );
}

export default App;
