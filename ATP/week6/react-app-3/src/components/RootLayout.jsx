import Header from "./Header"

import { Outlet } from "react-router"

function RootLayout() {
  return (
    <div>
        <Header />
        {/*this the root layout placeholder*/}
        <div className="min-h-screen mx-16 bg-blue-50 p-20">
         <Outlet />
        </div>
    </div>
  )
}

export default RootLayout