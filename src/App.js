import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Card from './card';
import Search from './search-bar';

function App() {
  const [arrOfData, setArrOfData] =useState([]);
  const [searchText, setSearchText] = useState('');



  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users').then(data =>{
      return data.json();
    }).then(result=>{
      setArrOfData(result);
      // console.log(arrOfData);
    }).catch(err => console.log(err));
  }, [])

  
  const handleTextInput = (e) =>{
    setSearchText(e.target.value);
  }
  console.log(searchText);
  return (
    <div className='overall-div'>
      <h1 className="monster">MonStERS RolodEX</h1>
      <Search textCheck={handleTextInput} />
      <div className='card-grid'>
      {arrOfData.map((cur, index)=> <Card key={index} cur ={cur}/>)}
      </div>
    </div>
  );
}

export default App;
