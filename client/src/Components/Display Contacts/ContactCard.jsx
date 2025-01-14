import React from 'react'

const ContactCard = (props) => {
    console.log(props)
    const{id,name,email}=props.contact
  return (
    <div className='item'>
    <div className='content'>
  
      <div className='header'>{name}</div>
      <div>{email}</div>
    </div>
    <i className='trash alternate outline icon'
    onClick={()=>props.clickHandler(id)}
    style={{marginTop:"7px",color:"red" }}></i>
  </div>
  )
}

export default ContactCard
