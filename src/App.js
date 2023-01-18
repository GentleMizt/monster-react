import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [arrOfData, setArrOfData] =useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users').then(data =>{
      return data.json();
    }).then(result=>{
      console.log(result);
      setArrOfData(result);
    }).catch(err => console.log(err));
  }, [])


  return (
  <p>Hello</p>
  );
}

export default App;
