



export const getDashboardAdmin = async (req, res) => {
    try {
        res.status(201).send("Accessible to only Admins")
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: "Failed to get Admin Dashboard" });
    }
}




export const getDashboardTutor = async (req, res) => {
    try {
        res.status(201).send("Accessible to only Admins,Tutors")
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: "Failed to get Tutor Dashboard" });
    }
}


export const getDashboardStudent = async (req, res) => {
    try {
        res.status(201).send("Accessible to only Admins,Tutors,Students")
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: "Failed to get Student Dashboard" });
    }
}