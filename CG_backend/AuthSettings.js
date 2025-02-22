
const roles = ["Admin", "Tutor", "Student", "Guest"]

const Access = {

    AdminPanel: ["Admin"],
    Dashboard: ["Admin", "Tutor"],
    Portfolio: ["Admin", "Tutor", "Student"],
    Events: ["Admin", "Tutor", "Student", "Guest"]

}



export default Access