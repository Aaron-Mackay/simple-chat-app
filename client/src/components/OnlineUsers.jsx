import React, from 'react'

const OLineUrsers = (props) => {


    const   {onlineUsers} = [props]

    return (
    
    <ul className="containerList Users">{onlineUsers.map((user)=>{

        <li>{user}</li>
    })}
    </ul>    
      
    )
}