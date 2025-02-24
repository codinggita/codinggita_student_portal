import React, { useState } from 'react';
import { Search, Plus, X, Users, CheckCircle } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Mock data - In real app, this would come from your backend
const mockUsers = [
    { id: 1, name: "Student 1", email: "john@example.com", role: "student" },
    { id: 2, name: "Student 2", email: "jane@example.com", role: "student" },
    { id: 3, name: "Student 3", email: "bob@example.com", role: "student" },
    { id: 4, name: "Tutor 1", email: "alice@example.com", role: "tutor" },
    { id: 5, name: "Tutor 2", email: "charlie@example.com", role: "tutor" }
];

const AdminDashboard = () => {
    const [groups, setGroups] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [groupName, setGroupName] = useState('');
    const [showCreateGroup, setShowCreateGroup] = useState(false);
    const [tasks, setTasks] = useState({});
    const [newTask, setNewTask] = useState('');
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [tutorAccess, setTutorAccess] = useState({});

    // Filter users based on search term
    const filteredUsers = mockUsers.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleUserSelect = (user) => {
        if (selectedUsers.find(u => u.id === user.id)) {
            setSelectedUsers(selectedUsers.filter(u => u.id !== user.id));
        } else {
            setSelectedUsers([...selectedUsers, user]);
        }
    };

    const handleCreateGroup = () => {
        if (groupName && selectedUsers.length > 0) {
            const newGroup = {
                id: groups.length + 1,
                name: groupName,
                members: selectedUsers,
            };
            setGroups([...groups, newGroup]);
            setGroupName('');
            setSelectedUsers([]);
            setShowCreateGroup(false);
        }
    };

    const handleAddTask = (groupId) => {
        if (newTask.trim()) {
            setTasks({
                ...tasks,
                [groupId]: [...(tasks[groupId] || []), { id: Date.now(), text: newTask }]
            });
            setNewTask('');
        }
    };

    const handleTutorAccess = (groupId, tutorId) => {
        setTutorAccess({
            ...tutorAccess,
            [groupId]: {
                ...(tutorAccess[groupId] || {}),
                [tutorId]: !(tutorAccess[groupId]?.[tutorId])
            }
        });
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <div className=" justify-between items-center mb-6">

                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <Dialog open={showCreateGroup} onOpenChange={setShowCreateGroup}>
                    <DialogTrigger asChild>
                        <Button className="flex items-center gap-2">
                            <Plus size={16} /> Create New Group
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Create New Group</DialogTitle>
                            <DialogDescription>
                                Select members and give your group a name
                            </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                            <Input
                                placeholder="Group Name"
                                value={groupName}
                                onChange={(e) => setGroupName(e.target.value)}
                                className="mb-4"
                            />
                            <div className="relative mb-4">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                                <Input
                                    placeholder="Search users..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-8"
                                />
                            </div>
                            <div className="mb-4">
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {selectedUsers.map(user => (
                                        <div key={user.id} className="bg-blue-100 rounded-full px-3 py-1 text-sm flex items-center gap-1">
                                            {user.name}
                                            <X
                                                size={14}
                                                className="cursor-pointer"
                                                onClick={() => handleUserSelect(user)}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="max-h-48 overflow-y-auto border rounded-md">
                                    {filteredUsers.map(user => (
                                        <div
                                            key={user.id}
                                            className="p-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
                                            onClick={() => handleUserSelect(user)}
                                        >
                                            <div>
                                                <div>{user.name}</div>
                                                <div className="text-sm text-gray-500">{user.email}</div>
                                            </div>
                                            {selectedUsers.find(u => u.id === user.id) && (
                                                <CheckCircle size={16} className="text-green-500" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Button onClick={handleCreateGroup} disabled={!groupName || selectedUsers.length === 0}>
                                Create Group
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groups.map(group => (
                    <Card key={group.id} className="w-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Users size={20} />
                                {group.name}
                            </CardTitle>
                            <CardDescription>
                                {group.members.length} members
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-4">
                                <h3 className="font-semibold mb-2">Tasks</h3>
                                <div className="flex gap-2 mb-2">
                                    <Input
                                        placeholder="Add new task..."
                                        value={newTask}
                                        onChange={(e) => setNewTask(e.target.value)}
                                    />
                                    <Button onClick={() => handleAddTask(group.id)}>Add</Button>
                                </div>
                                <ul className="space-y-1">
                                    {(tasks[group.id] || []).map(task => (
                                        <li key={task.id} className="text-sm">
                                            • {task.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2">Tutor Access</h3>
                                {mockUsers.filter(user => user.role === 'tutor').map(tutor => (
                                    <div key={tutor.id} className="flex items-center gap-2 mb-1">
                                        <input
                                            type="checkbox"
                                            checked={tutorAccess[group.id]?.[tutor.id] || false}
                                            onChange={() => handleTutorAccess(group.id, tutor.id)}
                                            className="rounded"
                                        />
                                        <span className="text-sm">{tutor.name}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;