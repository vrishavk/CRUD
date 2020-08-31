import React, {useState} from "react";
import "./Form.css"
const Form = (props) => {
    const [user, setUser] = useState ( {
        id:null,
        name:'',
        username:''
    })
    const handelInputChange =(e) => {
        const {name , value} = e.target 
        setUser({...user , [name]: value})
    }
    const submit =(e) => {
        e.preventDefault();
        if(!user.name || !user.username)
             return 
            props.addUser(user)
            setUser({
                id:null,
        name:'',
        username:''
            })
    }
  return (
    <form onSubmit={submit}>
      <label>Name</label>
      <input required type="text" name="name" value={user.name} onChange={handelInputChange} />
      <label>UserName</label>
      <input required type="text" name="username" value={user.username} onChange={handelInputChange} />
      <button>Add a new user</button>
    </form>
  );
};

export default Form;
