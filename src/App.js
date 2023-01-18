import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Card from './card';

function App() {
  const [arrOfData, setArrOfData] =useState([]);
  


  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users').then(data =>{
      return data.json();
    }).then(result=>{
      // console.log(result);
      setArrOfData(result);
      console.log(arrOfData);
    }).catch(err => console.log(err));
  }, [])


  return (
    <div>
      {arrOfData.map((cur, index)=> <Card />)}
    </div>
  );
}

export default App;
