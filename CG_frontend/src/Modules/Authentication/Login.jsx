import React, { useState } from "react";
import { authStore } from "../../Stores/store.js";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = authStore(); // Ensure this function exists in the store

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents page refresh

        try {
            const response = await login(email, password);
            if (!response.success) {
                console.log(response.message);
            } else {
                console.log("Success login");
                // navigate('/dashboard');  // Uncomment if using React Router
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    return (
        <>
            <div className="container m-auto mt-45">
                <div className='w-[21.8125rem] h-[32.5rem] flex-shrink-0 rounded-[0.71875rem] bg-[#F7F2FF] m-auto'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Email</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </div>
                        <button type="submit">login</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Login