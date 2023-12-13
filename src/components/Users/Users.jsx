import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from './User'
import RechercheUsers from './RechercheUsers'

function Users() {

    const [Users, setUsers] = useState([])


    useEffect(() => {
        axios.get('https://api.github.com/users')
            .then(user => { setUsers(user.data) })

    }, [])


    const SearchUsersFromGit = (datas) => {
        if (datas != "") {
            axios.get(`https://api.github.com/search/users?q=${datas}`)
            .then(response => {
                setUsers(response.data.items)
            })
        }

    }

    return (
        <div>
            <div className='my-2'>

                <RechercheUsers getUsersSearch={SearchUsersFromGit} />
            </div>

            <div className='container m-2 row'>
            { Users.map((Utilisateur) => (
                
                <User Utilisateur={Utilisateur} />
            ))
            }

                


            </div>
        </div>

    )
}

export default Users
