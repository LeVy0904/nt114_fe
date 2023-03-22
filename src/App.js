import logo from './logo.svg';
import './App.css';

import TopHeader from './components/top_header/TopHeader';
import SideBar from './components/side_bar/SideBar';
import Calendar from  './components/calendar/Calendar'
import Notification from './components/notification/Notification';

function App() {
  return (
   
    <div className='app_js'>
      <div className='Header'>
        <TopHeader/>
      </div>
      <div className='Body'> 
        <div className='SideBar'>
          <SideBar/>
        </div>
        <div className='Main-Content'>

        </div>
        <div className='Right-Cont'>
          <Calendar/>
          <Notification/>
        </div>
      </div>
      
    
    </div>
    
    

  );
}

export default App;
