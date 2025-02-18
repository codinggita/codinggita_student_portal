import { User } from '../Model/User.Model.js'
import { portfolioForm } from '../Model/Portfolio.Model.js'


export const getUser = async (req, res) => {

    try {
        // const user_id = req.params.uid;

        // Fetch the user and populate the user_activity_id in one go
        const user = await User.findById("67b41dfd4256658a7f503abd").populate("Portfolio_id");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }


        return res.status(200).json({
            data: user
        });

    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }


}


// this function sends put request to refer portfolio id to user object
export const EditUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.body.id,
            { Portfolio_id: req.body.Portfolio_id },
            { new: true, runValidators: true } // Ensures updated data is returned & validated
        );

        if (!updatedUser) return res.status(404).json({ error: "User not found" });

        res.json({ "User_Updated": updatedUser });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
