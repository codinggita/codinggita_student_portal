import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AddTaskForm from './AddTaskForm';




const TutorDashboard = () => {

    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    const [expandedGroupId, setExpandedGroupId] = useState(null);

    const [selectedGroupID, setSelectedGroupID] = useState('');

    const handleGroupChange = (e) => {
        setSelectedGroupID(e.target.value); // Update the selected group ID
    };

    const toggleGroup = (groupId) => {
        if (expandedGroupId === groupId) {
            setExpandedGroupId(null); // Collapse the group if it's already expanded
        } else {
            setExpandedGroupId(groupId); // Expand the clicked group
        }
    };


    const fetchAllGroups = async () => {
        try {
            // Make a GET request to the backend API endpoint
            const response = await axios.get('http://localhost:8080/group/all', {
                // headers: {
                //     Authorization: `Bearer ${localStorage.getItem('token')}`,
                // },
            });

            // Check if the response is successful
            if (response.status === 200) {
                // Return the fetched groups
                return response.data.Groups;
            } else {
                // Handle unexpected response status
                throw new Error(`Unexpected response status: ${response.status}`);
            }
        } catch (error) {
            // Handle errors
            console.error("Error fetching groups:", error);
            throw error; // Re-throw the error for further handling
        }
    };


    useEffect(() => {
        const loadGroups = async () => {
            try {
                const data = await fetchAllGroups();
                console.log(data)
                setGroups(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadGroups();
    }, []);

    if (loading) {
        return <div>Loading groups...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='ml-24 flex'>
            <h1>Groups</h1>
            <ul>

                <div className="p-6 bg-gray-100 min-h-screen">
                    {groups.map((group) => (
                        <div key={group._id} className="bg-white p-6 rounded-lg shadow-md mb-6">
                            {/* Group Header (Clickable to toggle collapse) */}
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleGroup(group._id)}
                            >
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {group.group_name}
                                </h2>
                                <span className="text-gray-500">
                                    {expandedGroupId === group._id ? '▼' : '▲'}
                                </span>
                            </div>

                            {/* Group Details (Collapsible) */}
                            {expandedGroupId === group._id && (
                                <div className="mt-4">
                                    {/* Group Description */}
                                    <p className="text-gray-600 mb-4">{group.description}</p>

                                    {/* Users Section */}
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Users</h3>
                                        <ul className="space-y-2">
                                            {group.users.map((user) => (
                                                <li key={user._id} className="flex items-center space-x-4">
                                                    <div className="flex-1">
                                                        <p className="text-gray-800 font-medium">{user.name}</p>
                                                        <p className="text-gray-500 text-sm">{user.email}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tasks Section */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Tasks</h3>
                                        <ul className="space-y-4">
                                            {group.tasks.map((task) => (
                                                <li key={task._id} className="p-4 bg-gray-50 rounded-lg">
                                                    <div className="flex justify-between items-center">
                                                        <div>
                                                            <p className="text-gray-800 font-medium">{task.task_title}</p>
                                                            <p className="text-gray-500 text-sm">
                                                                Due: {new Date(task.due_date).toLocaleDateString()}
                                                            </p>
                                                        </div>
                                                        <div className="text-sm text-gray-600">
                                                            <span className={`px-2 py-1 rounded-full ${task.Priority === 'High' ? 'bg-red-100 text-red-600' : task.Priority === 'Medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'}`}>
                                                                {task.Priority}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <p className="text-gray-500 text-sm mt-2">
                                                        Created by: {task.created_by}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </ul>

            <div>
                <div className="mb-4">
                    <label className="block text-gray-700">Select Group</label>
                    <select
                        name="Priority"
                        value={selectedGroupID}
                        onChange={handleGroupChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    >
                        <option value="" disabled>Select a group</option>
                        {groups.map((data) => (
                            <option key={data._id} value={data._id}>
                                {data.group_name}
                            </option>
                        ))}
                    </select>
                </div>
                <AddTaskForm groupID={selectedGroupID} />
            </div>

        </div>
    );

}

export default TutorDashboard