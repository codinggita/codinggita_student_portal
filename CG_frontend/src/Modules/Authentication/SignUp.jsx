import React, { useState } from "react";
import {authStore} from "../../Stores/store.js"; 

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { register } = authStore(); // Ensure this function exists in the store

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents page refresh

        try {
            const response = await register(name, email, password);
            if (!response.success) {
                console.log(response.message);
            } else {
                console.log("Success");
                // navigate('/dashboard');  // Uncomment if using React Router
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    return (
        <div className="mt-45">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
