import {useState,useEffect } from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from "axios";  // Import axios for API requests
import { logouts } from  "../../redux/authslice";

export default function Admindash() {

  const [activeTab, setActiveTab] = useState("User List");
  const navigate = useNavigate();
    const dispatch = useDispatch();
  const [users,setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const token = useSelector((state) => state.auth.token);
  console.log("token ok :",token);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchData = async () => {
    const url = "http://localhost:3000/api/admindash/find";
    const response = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${token.payload}`, // Add token to Authorization header
        },
    });
    setUsers(response.data);
}

useEffect(()=>{
    fetchData();
},[]);

const filteredUsers = users.filter((user) =>
  user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
  user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) 
);

const handleLogout = () => {
	//localStorage.removeItem("token");
    dispatch(logouts());
    navigate('/');
};

const handleViewClick = (user) => {
  setSelectedUser(user); // Set the selected user data
  setIsModalOpen(true); // Open the modal
};

const handleCloseModal = () => {
  setIsModalOpen(false); // Close the modal
  setSelectedUser(null); // Clear selected user data
};

const handleInputChange = (e) => {
  const { name, value } = e.target; // Get the name and value of the input field
  setSelectedUser((prevUser) => ({
    ...prevUser,
    [name]: value, // Update the specific field in the selected user object
  }));
};

const handleSaveChanges = async () => {
  if (!selectedUser || !selectedUser._id) {
    console.error("No user selected to save changes");
    return;
  }

  try {
    const response = await axios.put(
      `http://localhost:3000/api/users/${selectedUser._id}`, 
      selectedUser, 
      {
        headers: {
          Authorization: `Bearer ${token.payload}`, // Pass token if required
        },
      }
    );

    // Update the local user list with the updated user data
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user._id === selectedUser._id ? response.data : user
      )
    );

    // Close the modal
    setIsModalOpen(false);
    setSelectedUser(null);
    alert("User updated successfully");
  } catch (error) {
    console.error("Error updating user:", error);
    alert("Failed to update user");
  }
};

  return (
    <div className="min-h-screen flex">
    {/* Sidebar */}
    <div className="bg-blue-900 text-white w-64 p-5 flex flex-col">
      <div className="text-2xl font-bold mb-10">Virton+</div>
      <nav className="flex flex-col space-y-4">
        <button
          onClick={() => setActiveTab("User List")}
          className={`hover:bg-blue-800 p-2 rounded text-start ${
            activeTab === "User List" ? "bg-blue-700" : ""
          }`}
        >
          User List
        </button>
        <button
          onClick={() => setActiveTab("Transaction List")}
          className={`hover:bg-blue-800 p-2 rounded text-start ${
            activeTab === "Transaction List" ? "bg-blue-700" : ""
          }`}
        >
          Transaction List
        </button>
        <button
          onClick={() => setActiveTab("Video Management")}
          className={`hover:bg-blue-800 p-2 rounded text-start ${
            activeTab === "Video Management" ? "bg-blue-700" : ""
          }`}
        >
          Video Management
        </button>
        <button
          onClick={() => setActiveTab("Top Receivers List")}
          className={`hover:bg-blue-800 p-2 rounded text-start ${
            activeTab === "Top Receivers List" ? "bg-blue-700" : ""
          }`}
        >
          Top Receivers List
        </button>
      </nav>
      <div className="mt-auto">
        <button className="hover:bg-blue-800 p-2 rounded flex items-center font-bold text-lg" onClick={handleLogout}>
        Logout
        </button>
      </div>
    </div>

    {/* Main Content */}
    <div className="flex-1 bg-gray-100 p-8">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="text-gray-500">01 - 25 March, 2020</p>
      </header>
      <div className="bg-white rounded-lg shadow p-4 mt-6">
          <div className="h-32 bg-blue-100 rounded-md"></div>
        </div>
      {/* Conditionally Render Based on Active Tab */}
      {activeTab === "User List" && (
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <div className="">
            <h2 className="text-2xl font-bold mb-4 ml-4">User List</h2>
            <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  className="w-full md:w-80 ml-4 px-4 py-3 pl-10 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9 h-5 text-gray-400 absolute top-1/2 left-4 transform -translate-y-1/2 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1015 9.5a7.5 7.5 0 001.65 6.15z"
                  />
                </svg>
              </div>
          </div>

          <table className="w-full table-auto border-collapse mt-6">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Phone</th>
                <th className="p-2">Status</th>
                <th className="p-2">View</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">{user.firstName + " "+user.lastName}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.contactNo}</td>
                  <td className="p-2 text-green-600">{user.status}</td>
                  <td className="p-2">
                    <button className="bg-blue-600 text-white px-4 py-1 rounded" onClick={() => handleViewClick(user)}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>


    {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-2/3">
            <h2 className="text-xl font-bold mb-8 text-center">View & Edit List</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* User Details */}
              <div>
                <label className="block text-sm font-medium">FirstName</label>
                <input
                  type="text"
                  name='firstName'
                  value={selectedUser?.firstName || ""}
                  onChange={handleInputChange}
                  className="border rounded w-full p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">LastName</label>
                <input
                  type="text"
                  name='lastName'
                  value={selectedUser?.lastName || ""}
                  onChange={handleInputChange}
                  className="border rounded w-full p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">ContactNo.</label>
                <input
                  type="number"
                  name='contactNo'
                  value={selectedUser?.contactNo || ""}
                  onChange={handleInputChange}
                  className="border rounded w-full p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Referrel Code</label>
                <input
                  type="text"
                  name='referralCode'
                  value={selectedUser?.referralCode || ""}
                  onChange={handleInputChange}
                  className="border rounded w-full p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Whatsapp No.
                </label>
                <input
                  type="number"
                  name='whatsappNo'
                  value={selectedUser?.whatsappNo || ""}
                  onChange={handleInputChange}
                  className="border rounded w-full p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Email ID
                </label>
                <input
                  type="email"
                  name='email'
                  value={selectedUser?.email || ""}
                  onChange={handleInputChange}
                  className="border rounded w-full p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">State</label>
                <input
                  type="text"
                  name='state'
                  value={selectedUser?.state || ""}
                  onChange={handleInputChange}
                  className="border rounded w-full p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Status</label>
                <select
                  name="status"
                  value={selectedUser?.status || ""}
                  onChange={handleInputChange}
                  className="border rounded w-full p-2"
                >
                  <option value="active">Active</option>
                  <option value="block">Block</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={handleCloseModal}
              >
                Close
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSaveChanges}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    
        </div>
      )}

      {/* Placeholder for Other Tabs */}
      {activeTab !== "User List" && (
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <h2 className="text-xl font-bold">{activeTab}</h2>
          <p className="text-gray-600">Content for {activeTab} will be displayed here.</p>
        </div>
      )}
    </div>
  </div>
  )
}
