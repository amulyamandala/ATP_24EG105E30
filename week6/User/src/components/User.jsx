import { useEffect, useState } from "react";

function Users({incrementUser}) {
  const [users,setUsers]=useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=>res.json())
      .then(data=>setUsers(data.slice(0, 8)))
      .catch(err=>console.log(err));
  },[]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {users.map(user=>(
        <div key={user.id} className="bg-white rounded-2xl shadow-md p-4 border-2 border-gray-950">
          <h3 className="text-lg font-bold mb-2">{user.name}</h3>
          <p className="text-gray-600 mb-4">{user.email}</p>

          <button onClick={incrementUser} className="w-full bg-blue-500 text-white py-2 rounded-xl border-2 border-gray-950">
            Add User
          </button>
        </div>
      ))}
    </div>
  );
}

export default Users;