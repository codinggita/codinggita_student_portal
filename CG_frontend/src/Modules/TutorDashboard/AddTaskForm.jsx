import React, { useState } from 'react';
import axios from 'axios';

const AddTaskForm = ({ groupID }) => {


    const [task, setTask] = useState({
        task_title: '',
        due_date: '',
        Priority: 'Medium', // Default priority
        created_by: '67b9a3afcfcab0e89cc9ae8e', // This should be the logged-in user's ID
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');




    const addTaskToGroup = async (groupID, taskData) => {
        try {
            const response = await axios.post(`http://localhost:8080/group/task/${groupID}`, { task: task });
            return response.data;
        } catch (error) {
            console.error("Error adding task:", error);
            throw error;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {


        e.preventDefault();
        setLoading(true);
        setError('');

        if (!task.task_title || !task.due_date || !task.Priority) {
            setError("Please fill out all fields.");
            setLoading(false);
            return;
        }


        console.log("Selected Group ID:", groupID);
        console.log("Task Data:", task);



        try {
            const response = await addTaskToGroup(groupID, task);
            console.log("Task added successfully:", response);
            alert("Task added successfully!");
            // Reset the form
            setTask({
                task_title: '',
                due_date: '',
                Priority: 'Medium',
                created_by: '',
            });
        } catch (error) {
            setError("Failed to add task. Please try again.");
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Task Title</label>
                    <input
                        type="text"
                        name="task_title"
                        value={task.task_title}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Due Date</label>
                    <input
                        type="date"
                        name="due_date"
                        value={task.due_date}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Priority</label>
                    <select
                        name="Priority"
                        value={task.Priority}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>


                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                >
                    {loading ? "Adding Task..." : "Add Task"}
                </button>
            </form>
        </div>
    );
};

export default AddTaskForm;