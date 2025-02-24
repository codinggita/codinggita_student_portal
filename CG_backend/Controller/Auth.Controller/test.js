import { User } from '../../Model/User.Model.js'
import mongoose from 'mongoose';

// Connect to your MongoDB database
mongoose.connect('mongodb+srv://CodingGita:Xn3NZl5dZH2k85Xl@codinggita-student-port.w348a.mongodb.net/', {
    dbName: "CG_Student_Portal"  //  database name here
});

const dummyUsers = [
    {
        "name": "Student1",
        "email": "student1@example.com",
        "password": "password1",
        "role": "Student"
    },
    {
        "name": "Student2",
        "email": "student2@example.com",
        "password": "password2",
        "role": "Student"
    },
    {
        "name": "Student3",
        "email": "student3@example.com",
        "password": "password3",
        "role": "Student"
    },
    {
        "name": "Student4",
        "email": "student4@example.com",
        "password": "password4",
        "role": "Student"
    },
    {
        "name": "Student5",
        "email": "student5@example.com",
        "password": "password5",
        "role": "Student"
    },
    {
        "name": "Student6",
        "email": "student6@example.com",
        "password": "password6",
        "role": "Student"
    },
    {
        "name": "Student7",
        "email": "student7@example.com",
        "password": "password7",
        "role": "Student"
    },
    {
        "name": "Student8",
        "email": "student8@example.com",
        "password": "password8",
        "role": "Student"
    },
    {
        "name": "Student9",
        "email": "student9@example.com",
        "password": "password9",
        "role": "Student"
    },
    {
        "name": "Student10",
        "email": "student10@example.com",
        "password": "password10",
        "role": "Student"
    },
    {
        "name": "Student11",
        "email": "student11@example.com",
        "password": "password11",
        "role": "Student"
    },
    {
        "name": "Student12",
        "email": "student12@example.com",
        "password": "password12",
        "role": "Student"
    },
    {
        "name": "Student13",
        "email": "student13@example.com",
        "password": "password13",
        "role": "Student"
    },
    {
        "name": "Student14",
        "email": "student14@example.com",
        "password": "password14",
        "role": "Student"
    },
    {
        "name": "Student15",
        "email": "student15@example.com",
        "password": "password15",
        "role": "Student"
    },
    {
        "name": "Student16",
        "email": "student16@example.com",
        "password": "password16",
        "role": "Student"
    },
    {
        "name": "Student17",
        "email": "student17@example.com",
        "password": "password17",
        "role": "Student"
    },
    {
        "name": "Student18",
        "email": "student18@example.com",
        "password": "password18",
        "role": "Student"
    },
    {
        "name": "Student19",
        "email": "student19@example.com",
        "password": "password19",
        "role": "Student"
    },
    {
        "name": "Student20",
        "email": "student20@example.com",
        "password": "password20",
        "role": "Student"
    },
    {
        "name": "Student21",
        "email": "student21@example.com",
        "password": "password21",
        "role": "Student"
    },
    {
        "name": "Student22",
        "email": "student22@example.com",
        "password": "password22",
        "role": "Student"
    },
    {
        "name": "Student23",
        "email": "student23@example.com",
        "password": "password23",
        "role": "Student"
    },
    {
        "name": "Student24",
        "email": "student24@example.com",
        "password": "password24",
        "role": "Student"
    },
    {
        "name": "Student25",
        "email": "student25@example.com",
        "password": "password25",
        "role": "Student"
    },
    {
        "name": "Student26",
        "email": "student26@example.com",
        "password": "password26",
        "role": "Student"
    },
    {
        "name": "Student27",
        "email": "student27@example.com",
        "password": "password27",
        "role": "Student"
    },
    {
        "name": "Student28",
        "email": "student28@example.com",
        "password": "password28",
        "role": "Student"
    },
    {
        "name": "Student29",
        "email": "student29@example.com",
        "password": "password29",
        "role": "Student"
    },
    {
        "name": "Student30",
        "email": "student30@example.com",
        "password": "password30",
        "role": "Student"
    },
    {
        "name": "Student31",
        "email": "student31@example.com",
        "password": "password31",
        "role": "Student"
    },
    {
        "name": "Student32",
        "email": "student32@example.com",
        "password": "password32",
        "role": "Student"
    },
    {
        "name": "Student33",
        "email": "student33@example.com",
        "password": "password33",
        "role": "Student"
    },
    {
        "name": "Student34",
        "email": "student34@example.com",
        "password": "password34",
        "role": "Student"
    },
    {
        "name": "Student35",
        "email": "student35@example.com",
        "password": "password35",
        "role": "Student"
    },
    {
        "name": "Student36",
        "email": "student36@example.com",
        "password": "password36",
        "role": "Student"
    },
    {
        "name": "Student37",
        "email": "student37@example.com",
        "password": "password37",
        "role": "Student"
    },
    {
        "name": "Student38",
        "email": "student38@example.com",
        "password": "password38",
        "role": "Student"
    },
    {
        "name": "Student39",
        "email": "student39@example.com",
        "password": "password39",
        "role": "Student"
    },
    {
        "name": "Student40",
        "email": "student40@example.com",
        "password": "password40",
        "role": "Student"
    },
    {
        "name": "Tutor1",
        "email": "tutor1@example.com",
        "password": "tutorpassword1",
        "role": "Tutor"
    },
    {
        "name": "Tutor2",
        "email": "tutor2@example.com",
        "password": "tutorpassword2",
        "role": "Tutor"
    },
    {
        "name": "Tutor3",
        "email": "tutor3@example.com",
        "password": "tutorpassword3",
        "role": "Tutor"
    },
    {
        "name": "Tutor4",
        "email": "tutor4@example.com",
        "password": "tutorpassword4",
        "role": "Tutor"
    },
    {
        "name": "Tutor5",
        "email": "tutor5@example.com",
        "password": "tutorpassword5",
        "role": "Tutor"
    },
    {
        "name": "Tutor6",
        "email": "tutor6@example.com",
        "password": "tutorpassword6",
        "role": "Tutor"
    },
    {
        "name": "Tutor7",
        "email": "tutor7@example.com",
        "password": "tutorpassword7",
        "role": "Tutor"
    },
    {
        "name": "Tutor8",
        "email": "tutor8@example.com",
        "password": "tutorpassword8",
        "role": "Tutor"
    },
    {
        "name": "Tutor9",
        "email": "tutor9@example.com",
        "password": "tutorpassword9",
        "role": "Tutor"
    },
    {
        "name": "Admin1",
        "email": "admin1@example.com",
        "password": "adminpassword1",
        "role": "Admin"
    }
]

// Function to register a single user
const registerUser = async (userData) => {
    try {
        const { name, email, password, role } = userData;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log(`User with email ${email} already exists.`);
            return;
        }

        const user = new User({ name, email, password, role });
        await user.save();
        console.log(`User ${email} registered successfully.`);
    } catch (error) {
        console.error(`Error registering user ${userData.email}:`, error);
    }
};

// Register all dummy users
const registerAllUsers = async () => {
    for (const userData of dummyUsers) {
        await registerUser(userData);
    }
    mongoose.disconnect(); // Disconnect from the database after all users are registered
};

registerAllUsers();