import './App.css';

import Header from './components/Header'
import User from './components/User'

const name = 'Ali';
const surname = 'Argun';
const isLoggedIn = true;

function App() {
  return (
    <div>
      <h1>Hello React World</h1>

      <Header/>
      <User name="Argun" 
      surname="Argun" 
      isLoggedIn={true} 
      age ={30} 
      friends={["ahmet","mehmet","veli","taha","can"]}
      address={{title:"Ankara",
      zip:6006
    }}
      />
      

    </div>
  )
}

export default App;