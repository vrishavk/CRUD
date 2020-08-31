import React , {useState} from 'react';
import './App.css';
import UserTable from './tables/UserTable';
import Form from './form/Form';
import EditUserForm from './form/EditUserForm'


function App() {
  const usersData =  [
    {id:1 ,
    name:"Vrishav",
    username:'bob',},
    {id:2 ,
    name:"Durgesh",
    username:'Murgi',},
    {id:3 ,
    name:"Santosh",
    username:'thypache',},
    {id:4 ,
    name:"Majare",
    username:'Jiraee'}
]



const [users, setUsers] = useState(usersData);
const addUser = (user) => {
  user.id = user.length+1 
  setUsers([...users , user])
}
const deleteUser = (id) => {
  setUsers(users.filter(user => user.id !== id));
}
const [editing , setEditing]  = useState(false);
const initialFormState = {
  id:null, 
  name:'',
  username:''
}
const [currentUser ,setCurrentUser]= useState(initialFormState)
const edit = (user) => {
  setEditing(true)
  setCurrentUser ({id:user.id , name:user.name, username:user.username})
}
const updateUser =(id, updatedUser) => {
  setEditing(false)
  setUsers(users.map((user)=> (user.id == id ? updatedUser : user)))
}

  return(
    <div className="container">
      <h1>Crud Using React </h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing ? (
              <div>
                <h2>Edit User</h2>
                <EditUserForm 
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
                />
                </div>
            )
            : (
              <div>
                 <h2>Add User</h2>
          <Form addUser ={addUser} />
              </div>
            )

          }
         
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable edit={edit} users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App;
