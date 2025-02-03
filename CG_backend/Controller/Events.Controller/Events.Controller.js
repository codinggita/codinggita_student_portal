import { Event } from '../../Model/Events.Model.js'



export const getEventList = async (req, res) => {
    res.json('Get Works')
}

export const postEvent = async (req, res) => {
    const {date,eventTitle,eventLocation,description} = req.body;
    try {
        const newEvent = await Event.create({
            date: date,
            eventTitle: eventTitle,
            eventLocation: eventLocation,
            description: description
        });

        console.log("Event Added:", newEvent);
        res.json({ message: "Event added successfully", event: newEvent });

    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: "Failed to add event" });
    }
};
