import { User } from '../../Model/User.Model.js'


// Register a User
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password })
        await user.save();
        res.json({ token: user.generateToken(), user });
    } catch (error) {
        res.status(400).json({ error: "User already exists" });
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

        res.json({ token: user.generateToken(), user });

    } catch (error) {
        console.error("Login error:", error); // Logs error to console
        res.status(500).json({ error: "Server error" });
    }
}
