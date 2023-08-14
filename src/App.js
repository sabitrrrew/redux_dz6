import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import CalculatePage from './pages/calculatePage/CalculatePage';
import MainPage from './pages/mainPage/MainPage';
import UsersPage from './pages/usersPage/UsersPage';



function App() {
  return (
      <div className='App'>
        <CalculatePage/>
        <MainPage/>
        {/* <UsersPage/> */}
      </div>
  );
}
export default App;