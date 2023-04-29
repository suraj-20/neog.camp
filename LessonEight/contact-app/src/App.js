import React, { useState, useEffect } from "react";
import {v4 as uuid} from "uuid"; 
import './App.css'
import Header from "./Components/Header";
import Addcontact from "./Components/Addcontact";
import ContactList from "./Components/ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, {id: uuid(), ...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) =>{
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
    console.log(retriveContacts);
  }, [])

  return (
    <div className="ui container">
      <Header />
      <Addcontact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId = {removeContactHandler} />
    </div>
  );
}

export default App;
