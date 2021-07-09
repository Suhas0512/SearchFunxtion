import './App.css';
import { useState } from 'react';
import Users from "./MOCK_DATA.json"
function App() {
  const [input, setInput] = useState("")
  return (
    <div className="App">
      <input type="text" placeholder="Search based on name or email.." onChange={e => setInput(e.target.value)}></input>
      {Users.filter(ele => {
        if (
          ele.first_name.toLowerCase().includes(input.toLowerCase())
          || ele.last_name.toLowerCase().includes(input.toLowerCase())
          || ele.email.toLowerCase().includes(input.toLowerCase())
          || ele.id === parseInt(input)
        ) {
          return ele
        }
      }).map(ele => {
        return <div className="user" key={ele.id}><p>id:{ele.id},First Name:{ele.first_name}
        ,Last Name:{ele.last_name},Email:{ele.email}</p></div>
      })}
    </div>
  );
}

export default App;
