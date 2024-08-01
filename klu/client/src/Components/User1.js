import React from 'react'

const User1 = (props) => { // can also be written as ({name, type})
  return (
    <div>
       <h3>Name of the user: {props.name} logged in as {props.type}</h3> 
           </div>
  )
}

export default User1;