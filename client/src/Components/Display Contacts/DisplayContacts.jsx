import React from 'react'
import ContactCard from './ContactCard'
const DisplayContacts = (props) => {
 const deleteContact=(id)=>{
  props.getContactId(id)

 }
  const displayContacts=props.contact.map((contact)=>{
    return(
          <ContactCard contact={contact} clickHandler={deleteContact} key={contact.id}></ContactCard>
    )
  })
  return (
    <div className='ui celled list'>
      {displayContacts}
    </div>
  )
}

export default DisplayContacts
