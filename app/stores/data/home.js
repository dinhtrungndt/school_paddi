export const dataHomeWorks = [
    {
        id: 1,
        name: "Maths",
        percentComplete: 45,
        daysLeft: 1,
        problems: "Solve the Given problems",
        status: "continue"
    },
    {
        id: 2,
        name: "Physics",
        percentComplete: 80,
        daysLeft: 3,
        problems: "Motion and Energy Questions",
        status: "continue"
    },
    {
        id: 3,
        name: "Chemistry",
        percentComplete: 60,
        daysLeft: 2,
        problems: "Periodic Table Elements",
        status: "continue"
    },
    {
        id: 4,
        name: "Biology",
        percentComplete: 30,
        daysLeft: 4,
        problems: "Cell Structure Analysis",
        status: "continue"
    },
    {
        id: 5,
        name: "Literature",
        percentComplete: 75,
        daysLeft: 2,
        problems: "Essay on Modern Poetry",
        status: "continue"
    },
    {
        id: 6,
        name: "History",
        percentComplete: 50,
        daysLeft: 5,
        problems: "World War II Timeline",
        status: "continue"
    },
    {
        id: 7,
        name: "Geography",
        percentComplete: 65,
        daysLeft: 3,
        problems: "Climate Zones Mapping",
        status: "continue"
    },
    {
        id: 8,
        name: "Computer Science",
        percentComplete: 90,
        daysLeft: 1,
        problems: "Algorithm Implementation",
        status: "continue"
    }
];

const now = new Date();
const today = new Date(now);
const yesterday = new Date(now);
yesterday.setDate(yesterday.getDate() - 1);

const createTimestamp = (baseDate, hours, minutes = 0) => {
    const timestamp = new Date(baseDate);
    timestamp.setHours(hours, minutes, 0, 0);
    return timestamp;
};

export const dataNotifi = [
    {
        id: 1,
        name: "Maths Teacher",
        message: "Ensure you submit your homework before noon tomorrow",
        time: "15 Min",
        timestamp: createTimestamp(today, now.getHours(), now.getMinutes() - 15),
        image: require("../../assets/images/avatar.png"),
    },
    {
        id: 2,
        name: "Physics Teacher",
        message: "Don't forget to review the last chapter before the test",
        time: "1 Hour",
        timestamp: createTimestamp(today, now.getHours() - 1),
        image: require("../../assets/images/avatar2.png"),
    },
    {
        id: 3,
        name: "Chemistry Teacher",
        message: "Lab report is due next week, start working on it.",
        time: "2 Hours",
        timestamp: createTimestamp(today, now.getHours() - 2),
        image: require("../../assets/images/avatar.png"),
    },
    {
        id: 4,
        name: "Biology Teacher",
        message: "Prepare for the upcoming quiz on cell structure.",
        time: "3 Hours",
        timestamp: createTimestamp(yesterday, 16, 30),
        image: require("../../assets/images/avatar.png"),
    },
    {
        id: 5,
        name: "Literature Teacher",
        message: "Read the assigned chapters for the next class.",
        time: "4 Hours",
        timestamp: createTimestamp(yesterday, 15, 45),
        image: require("../../assets/images/avatar3.png"),
    },
    {
        id: 6,
        name: "History Teacher",
        message: "Review the notes from last week's lecture.",
        time: "5 Hours",
        timestamp: createTimestamp(yesterday, 14, 0),
        image: require("../../assets/images/avatar.png"),
    },
    {
        id: 7,
        name: "Geography Teacher",
        message: "Complete the mapping assignment by Friday.",
        time: "6 Hours",
        timestamp: createTimestamp(yesterday, 13, 20),
        image: require("../../assets/images/avatar2.png"),
    },
    {
        id: 8,
        name: "Computer Science Teacher",
        message: "Submit your project by the end of the week.",
        time: "7 Hours",
        timestamp: createTimestamp(yesterday, 10, 15),
        image: require("../../assets/images/avatar.png"),
    }
]