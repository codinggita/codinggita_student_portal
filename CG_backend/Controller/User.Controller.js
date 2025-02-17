import { User } from '../Model/User.Model.js'


export const getUser = async (req, res) => {

    try {
        const user_id = req.params.uid;

        // Fetch the user and populate the user_activity_id in one go
        const user = await User.findById(user_id).populate("user_activity_id");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // Fetch the user activity data based on the populated user_activity_id
        const user_activity_data = await User_activity.findById(user.user_activity_id);

        return res.status(200).json({
            data: user,  // Return the user data with populated activity
            user_activity_data: user_activity_data // Return the user activity data
        });

    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }


} 