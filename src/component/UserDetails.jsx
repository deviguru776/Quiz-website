import  { useState } from 'react'

export const UserDetails = () => {
  
   const [user, setUser] = useState({name: "Sivu", age: "25 "})

    const UpdateUserName = () => {
      setUser({...user, name: "Guru"});
    };
    const UpdateUserAge = () => {
      setUser({...user, age: "22"});
    }; 

  return (
    <div className='update'>
        <h2>UserDetails</h2>
        <h3>{user.name}</h3>
        <h3>{user.age}</h3>
        <button onClick={UpdateUserName}>Update User Name</button>
        <button onClick={UpdateUserAge}>Update User Age</button>
    </div>
  )
}
