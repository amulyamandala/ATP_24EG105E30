import { useState } from "react";
import Users from "./components/User";
import UserCount from "./components/UserCount";

function App() {
  const [count,setCount]=useState(0);

  const incrementUser=()=>{
    setCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-3xl font-bold mb-4">App</h1>
      <UserCount count={count} />
      <Users incrementUser={incrementUser} />
    </div>
  );
}

export default App;