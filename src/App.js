import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Card from './card';
import Search_bar from './search-bar';

function App() {
  const [arrOfData, setArrOfData] =useState([]);
  const [searchText, setSearchText] = useState('');



  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users').then(data =>{
      return data.json();
    }).then(result=>{
      setArrOfData(result);
      console.log(arrOfData);
    }).catch(err => console.log(err));
  }, [])

  
  const handleTextInput = (e) =>{
    setSearchText(e.target.value);
  }

  return (
    <div>
      <Search_bar onChange={handleTextInput} />
      <div className='card-grid'>
      {arrOfData.map((cur, index)=> <Card key={index} cur ={cur}/>)}
      </div>
    </div>
  );
}

export default App;
