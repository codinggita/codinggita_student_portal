
// const roles = ["Admin", "Tutor", "Student", "Guest"]

const Access = {

    // AdminPanel: ["Admin"],
    // TutorDashboard: ["Admin", "Tutor"],
    // StudentDashboard: ["Admin", "Student"],
    // Portfolio: ["Admin", "Tutor", "Student"],
    // Events: ["Admin", "Tutor", "Student", "Guest"]

    LevelOne: ["Admin"],
    LevelTwo: ["Admin", "Tutor"],
    LevelThree: ["Admin", "Tutor", "Student",],
    LevelFour: ["Admin", "Tutor", "Student", "Guest"],


}



export default Access