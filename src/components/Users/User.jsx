import React from 'react'

function User({Utilisateur}) {

    const {id,avatar_url,login,repos_url,html_url}=Utilisateur;
    return (
        <div className='col-4 justify-content-around'>
            
                <div key={id} class="card  ">
                    <img class="card-img-top" src={avatar_url} alt={login} />
                    <div class="card-body">
                        <h4 class="card-title">{login}</h4>
                        <a href={"users/"+login} className="btn btn-primary">show more</a> <a href={repos_url} className="btn btn-primary">view repositery</a>
                    </div>
                </div>
            
           

        </div>
    )
}

export default User
