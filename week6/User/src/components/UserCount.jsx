function UserCount({count}) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold">
        User Count: <span className="text-pink-600">{count}</span>
      </h2>
    </div>
  );
}

export default UserCount;