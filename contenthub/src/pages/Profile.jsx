export default function Profile() {
  // Later we’ll fetch actual user data, for now static
  const user = {
    name: "John Doe",
    email: "john@example.com",
    bio: "Student blogger & vlogger.",
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>
      <div className="bg-white shadow rounded-2xl p-6">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Bio:</strong> {user.bio}</p>
      </div>
    </div>
  );
}
