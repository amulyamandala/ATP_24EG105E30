function NavBar() {
  return (
    <div className="flex justify-between items-center border p-4 mb-6">
      <h2 className="font-bold">LOGO</h2>

      <div className="flex gap-6">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Signup</p>
        <p className="cursor-pointer">Login</p>
      </div>
    </div>
  );
}

export default NavBar;