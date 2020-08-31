import React from 'react'
import "./UserTable.css"
const UserTable = ({users , edit , deleteUser}) => {
    
    return (
       <table className="table">
               <tr>
                   <th>Name</th>
                   <th>UserName</th>
                   <th>Action</th>
               </tr>
                   {users.length > 0 ? (
                       users.map((user) => (
                           <tr key = {user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <button onClick={() => edit(user)} className="button button-edit">Edit</button>
                            <button className="button button-delete" onClick={() => deleteUser(user.id)}>Delete</button>
                        </td>
                        </tr>
                       ))
                   ) : (
                       <div>
                           <div>No users</div>
                       </div>
                   )}
       </table>
    )
}

export default UserTable
