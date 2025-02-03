import { Activity } from '../../Model/Activity.Model.js'


export const getPointsTable = async (req, res) => {
    try {
        const pointstable = await Activity.find();
        console.log('Events: ', pointstable);
        res.status(201).send(pointstable)
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: "Failed to get Activity" });
    }
}

export const addPointsTable = async (req, res) => {

    const { activityDate, activityType, activityPoints, organisedBy, activity } = req.body;
    try {

        const pointsEntry = await Activity.create({
            activityDate: activityDate,
            activityType: activityType,
            activityPoints: activityPoints,
            organisedBy: organisedBy,
            activity: activity
        })

        console.log("Event Added:", pointsEntry);
        res.json({ message: "Event added successfully", event: pointsEntry });

    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: "Failed to add Activity" });
    }

}

export const deletePointsTable = async (req, res) => {

    const { id } = req.body;
    try {
        const deleteActivity = await Activity.findByIdAndDelete(id);

        if (!deleteActivity) {
            return res.status(404).json({ error: "Event not found" });
        }

        console.log("Event Deleted:", id);
        res.json({ message: "Event deleted successfully", deleteActivity });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: "Failed to delete event" });
    }

}

