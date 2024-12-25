import { Trash2, UserCog, Pencil, Check } from "lucide-react";
import useAuthStore from "../../store/store";
import { useState, useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
function UserManagementTable() {
  const { alluser, getAllUser } = useAuthStore();
  
  useEffect(() => {
    getAllUser();
  }, []);
  console.log(alluser)
  return (
    <div className="w-full overflow-x-auto rounded-lg shadow">
      <table className="w-full table-auto">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {
          alluser?( alluser.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {user.name}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{user.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                  ${
                    user.role === "Admin"
                      ? "bg-purple-100 text-purple-800"
                      : user.role === "Editor"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {user.role}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex space-x-3">
                  <>
                    <button
                      className="text-gray-600 hover:text-gray-900"
                      aria-label={`Edit ${user.name}`}
                    >
                      <Pencil className="h-5 w-5" />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      aria-label={`Delete ${user.name}`}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </>
                </div>
              </td>
            </tr>
          ))):
          <LoadingSpinner/>
         }
        </tbody>
      </table>
    </div>
  );
}

export default UserManagementTable;
