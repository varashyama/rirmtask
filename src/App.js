import './App.css';
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Inbox from './components/inbox/inbox';
import Sent from './components/sent/sent';
import { seedData } from './services/seed';
import Signin from './components/signin';
import React, { useState,useMemo} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


seedData();
export const storageContext = React.createContext({
  forcererender: '',setForcererender :() => {}
});

export const userContext = React.createContext({
  user: '',
  setUser: () => {},
});

function App() {
  const [user,setUser] = useState('');
  const [rerenderOnStorageUpdate,setRerenderOnStorageUpdate] = useState(0);
  const value = useMemo(
    () => ({ user, setUser }), 
    [user]
  );

  const storageContextValue = useMemo(
    () => ([ rerenderOnStorageUpdate, setRerenderOnStorageUpdate ]), 
    [rerenderOnStorageUpdate]
  );

  return (
    <userContext.Provider value={value}>
      <storageContext.Provider value={storageContextValue}>
      <div className="h-100">
        <Router>
          <Routes>
            <Route path='/' exact element={<Signin />}></Route>
            <Route path="/inbox" element={<Inbox />}></Route>
            <Route path="/sent" element={<Sent />}></Route>
            <Route path="*" exact element={<Navigate to="/" />}></Route>
          </Routes>
        </Router>

      </div>
      </storageContext.Provider>
      
    </userContext.Provider>

  )
}

export default App;

