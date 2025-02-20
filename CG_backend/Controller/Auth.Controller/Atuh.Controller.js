import { User } from '../../Model/User.Model.js'


// Register a User
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate required fields
        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }


        const user = new User({ name, email, password });

        await user.save();

        // Assuming generateToken is a method on the User model
        res.json({ token: user.generateToken(), User: user });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong. Please try again." });
    }
}



// Login User 

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        res.json({ token: user.generateToken(), User: user });

    } catch (error) {
        console.error("Login error:", error); // Logs error to console
        res.status(500).json({ error: "Server error" });
    }
}
