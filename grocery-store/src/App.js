import logo from './logo.svg';
import './App.css';
import Registration from './Registration/Registration';
import AdminUser from './AdminUser/AdminUser';

function App() {
  return (
    <div className='Container'>
      <div><Registration></Registration></div>
      <div><AdminUser></AdminUser></div>
      
    </div>
  );
}

export default App;
