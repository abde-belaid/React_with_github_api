import React, { useState } from 'react'
function RechercheUsers({getUsersSearch}) {


    const [inputValue, SetinputValue] = useState('')


    const HandleForm = (e) => {
        SetinputValue(e.target.value)

    }


    const SearchUsers = (e) => {
        e.preventDefault()
        getUsersSearch(inputValue)
        // SearchUsersFromGit(inputValue);

    }
  

    return (
        <div>
            <form onSubmit={SearchUsers} className="d-flex my-2 my-lg-0 ">
                <input onChange={HandleForm} className="form-control me-sm-2  border-2 border-warning" type="text" placeholder="Search ...." />
                <button className="btn btn-outline-success btn-block my-2 my-sm-0"  >Search</button>
            </form>
        </div>
    )
}

export default RechercheUsers
