import { User } from '../../Model/User.Model.js'


// Register a User
export const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Validate required fields
        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }


        const user = new User({ name, email, password, role });

        await user.save();

        // Assuming generateToken is a method on the User model
        res.json({ token: user.generateToken({ name, email, password, role }), User: user });

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

        res.json({ token: user.generateToken(user._doc), User: user });

    } catch (error) {
        console.error("Login error:", error); // Logs error to console
        res.status(500).json({ error: "Server error" });
    }
}


export const getAllUsers = async (req, res) => {

    try {
        const user = await User.find();

        if (!user) {
            return res.status(401).json({ error: "Users Not Found" });
        }

        res.status(200).json({ Users: user });

    } catch (error) {
        console.error("error:", error);
        res.status(500).json({ error: "Cannot Get Users" });
    }
}

