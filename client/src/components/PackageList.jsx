import  { useState, useEffect } from "react";

function PackageList() {
  const [packages, setPackages] = useState([]);

//   useEffect(() => {
//     // Fetch packages from API or mock data
//     getPackages().then(data => setPackages(data));
//   }, []);

//   const handleDeletePackage = async (packageId) => {
//     await deletePackage(packageId);
//     setPackages(packages.filter(pkg => pkg.id !== packageId));
//   };

  return (
    <div className="flex-1 p-6">
      <h2 className="text-2xl font-semibold mb-6">Manage Packages</h2>
      <button className="bg-green-600 text-white py-2 px-4 rounded mb-6">Add Package</button>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Package Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {packages.map(pkg => (
            <tr key={pkg.id}>
              <td className="px-4 py-2">{pkg.name}</td>
              <td className="px-4 py-2">{pkg.price}</td>
              <td className="px-4 py-2">
                <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={() => handleDeletePackage(pkg.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PackageList;
