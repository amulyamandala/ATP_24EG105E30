function UserCard({ user }) {
  return (
    <div className="border rounded-xl p-4 text-center shadow-md">
      <img
        src={user.image}
        alt="user"
        className="w-20 h-20 mx-auto rounded-full mb-2"
      />

      <p className="font-semibold">{user.name}</p>
      <p className="text-sm text-gray-500">{user.email}</p>

      <button className="mt-2 px-3 py-1 border rounded">
        Profile
      </button>
    </div>
  );
}

export default UserCard;