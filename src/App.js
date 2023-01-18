import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users').then(data =>{
      return data.json();
    }).then(result=>{
      console.log(result);
    }).catch(err=>{
      console.log(err);
    })
  }, [])


  return (
  <p>Hello</p>
  );
}

export default App;
