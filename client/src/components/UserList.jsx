import React, { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

//   useEffect(() => {
//     getUsers().then(data => setUsers(data));
//   }, []);

//   const handleRoleChange = async (userId, newRole) => {
//     await updateRole(userId, newRole);
//     setUsers(users.map(user => user.id === userId ? { ...user, role: newRole } : user));
//   };

  return (
    <div className="flex-1 p-6">
      <h2 className="text-2xl font-semibold mb-6">User Management</h2>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">User Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.role}</td>
              <td className="px-4 py-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => handleRoleChange(user.id, user.role === "admin" ? "user" : "admin")}>
                  Change Role
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
