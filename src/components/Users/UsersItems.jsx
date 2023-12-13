import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import User from './User'

function UsersItems() {
const [infos,setinfo]=useState({})

    const {login}=useParams()
    axios.get(`https://api.github.com/users/${login}`)
    .then(info=>{setinfo(info.data)})
  return (
    <div>
     <User Utilisateur={infos} />
    </div>
  )
}

export default UsersItems
