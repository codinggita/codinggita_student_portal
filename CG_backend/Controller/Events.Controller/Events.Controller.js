import { Event } from '../../Model/Events.Model.js'


export const getEventList = async (req, res) => {
    try {
        const EventList = await Event.find();
        console.log('Events: ', EventList);
        res.status(201).send(EventList)
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: "Failed to get events" });
    }
}

export const postEvent = async (req, res) => {
    const { date, eventTitle, eventLocation, description } = req.body;
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

export const deleteEvent = async (req, res) => {

    const { id } = req.body;
    try {
        const deletedEvent = await Event.findByIdAndDelete(id);

        if (!deletedEvent) {
            return res.status(404).json({ error: "Event not found" });
        }

        console.log("Event Deleted:", id);
        res.json({ message: "Event deleted successfully", deletedEvent });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: "Failed to delete event" });
    }

}





