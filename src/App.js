import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

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
      {arrOfData.map((cur, index)=> <p key={index}>{cur.name}</p>)}
    </div>
  );
}

export default App;
