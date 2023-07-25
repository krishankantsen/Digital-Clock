import { useState } from 'react';
import './App.css';

const time = new Date().toLocaleTimeString();
const date = new Date().toLocaleDateString();

const App = () => {
  
  const [ctime, utime] = useState(time);
  const [cdate, udate] = useState(date);

  const UpdateTime = () => {
    const time = new Date().toLocaleTimeString();
    utime(time);
  };

  const UpdateDate = () => {
    const date = new Date().toLocaleDateString();
    udate(date);
  };

  

  setInterval(UpdateTime, 1000);
  setInterval(UpdateDate, 1000);

  return (
    <>

       <h1 className='myhead'>Digital Clock</h1>
        <h1 className='myh'>Time: {ctime}</h1>
        <h2>Date: {cdate}</h2>
      
    </>
  );
};

export default App;
