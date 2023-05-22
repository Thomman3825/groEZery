import logo from './logo.svg';
import './App.css';
import Registration from './Registration/Registration';
import AdminUser from './AdminUser/AdminUser';
import VendorUser from './VendorUser/VendorUser';
import { ReactDOM } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Login/Login';


function App() {
  return (
    <BrowserRouter>
    <div className='Container'>
     <Routes>
      <Route path="/" element={<Login></Login>}></Route>
      <Route path='registration' element={<Registration></Registration>}></Route>
      <Route path='Admin' element={<AdminUser></AdminUser>}></Route>
      <Route path='Vendor' element={<VendorUser></VendorUser>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
