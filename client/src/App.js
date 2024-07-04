import Header from './Components/Header/Header'
import uuid  from 'uuid4'
import DisplayContacts from './Components/Display Contacts/DisplayContacts'
import AddContacts from './Components/Add Contacts/AddContacts'
import { useState ,useEffect} from 'react';
import './App.css'
function App() {
  const LOCAL_KEY='contacts';
const[contacts ,setContacts]=useState(JSON.parse(localStorage.getItem(LOCAL_KEY))??[])

const addContactHandler=(contact)=>{
  console.log(contact)
  setContacts([...contacts,{id: uuid(),...contact}])
}

const removeContact=(id)=>{
  const newContactList=contacts.filter((contact)=>{
    return contact.id!= id
  })
setContacts(newContactList)
}
useEffect(()=>{
localStorage.setItem(LOCAL_KEY,JSON.stringify(contacts));
},[contacts]);

  return (
    <div className='ui container'>
      <Header/>
      <AddContacts addContactHandler={addContactHandler}/>
      <DisplayContacts contact={contacts} getContactId={removeContact}/>
    </div>
  );
}

export default App;
