import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [current, setCurrent] = useState({name: "", number: ""})
  const [contactList, setContactList] = useState({});

  const saveContact = ()=> {
    setContactList({...contactList, current})
  }

  return (
    <div className="App">
    <div>
   <input type="text"
   value={current.name}
   onChange={(e)=>setCurrent({...current, name: e.target.value})}
   placeholder="enter name" />
   <input type="text"
   value={current.number}
   onChange={(e)=>setCurrent({...current, number: e.target.value})}
   placeholder="enter number" />
   <button onClick={saveContact}>save</button>
   </div>
   <div>

   {/*for checking current object is working or not*/}
   <p>name is {current.name} and number is {current.number}</p>
   <p>current is {Object.keys(current).map(key=><h3>{key}: {current[key]}</h3>)}</p> 

   {/*for checking contactList is working or not  (not working)
     <p>contactlist is {contactList}</p>*/}

   <table>
   <thead><tr><th>Contact List</th></tr></thead> {/*this is not working*/}
   {contactList ? (Object.entries(contactList).map((contact, index)=>
      <tbody key={index}>
     <tr><td>{contact.name}</td>
     <td>{contact.number}</td></tr></tbody>
   )) : null}
   </table>


   </div>
    </div>
  );
}

export default App;
