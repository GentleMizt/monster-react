import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Card from './card';
import Search_bar from './search-bar';

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
      <Search_bar></Search_bar>
      <div className='card-grid'>
      {arrOfData.map((cur, index)=> <Card key={index} cur ={cur}/>)}
      </div>
    </div>
  );
}

export default App;
