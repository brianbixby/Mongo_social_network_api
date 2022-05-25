const data = [
    {
        username: 'aaaaa', email: 'aaaaa@aaaaa.com', thoughts: [
            { thoughtText: "thoughtText aaaaa", username: 'aaaaa', reactions: [] }
        ]
    },
    {
        username: 'bbbbb', email: 'bbbbb@bbbbb.com', thoughts: [
            { thoughtText: "thoughtText bbbbb", username: 'bbbbb', reactions: [] }
        ]
    },
    {
        username: 'ccccc', email: 'ccccc@ccccc.com', thoughts: [
            { thoughtText: "thoughtText ccccc", username: 'ccccc', reactions: [] }
        ]
    },
    {
        username: 'ddddd', email: 'ddddd@ddddd.com', thoughts: [
            { thoughtText: "thoughtText ddddd", username: 'ddddd', reactions: [] }
        ]
    },
    {
        username: 'eeeee', email: 'eeeee@eeeee.com', thoughts: [
            { thoughtText: "thoughtText eeeee", username: 'eeeee', reactions: [] }
        ]
    },
    {
        username: 'fffff', email: 'fffff@fffff.com', thoughts: [
            { thoughtText: "thoughtText fffff", username: 'fffff', reactions: [] }
        ]
    },
    {
        username: 'ggggg', email: 'ggggg@ggggg.com', thoughts: [
            { thoughtText: "thoughtText ggggg", username: 'ggggg', reactions: [] }
        ]
    },
    {
        username: 'hhhhh', email: 'hhhhh@hhhhh.com', thoughts: [
            { thoughtText: "thoughtText hhhhh", username: 'hhhhh', reactions: [] }
        ]
    },
    {
        username: 'iiiii', email: 'iiiii@iiiii.com', thoughts: [
            { thoughtText: "thoughtText iiiii", username: 'iiiii', reactions: [] }
        ]
    },
    {
        username: 'jjjjj', email: 'jjjjj@jjjjj.com', thoughts: [
            { thoughtText: "thoughtText jjjjj", username: 'jjjjj', reactions: [] }
        ]
    },
    {
        username: 'kkkkk', email: 'kkkkk@kkkkk.com', thoughts: [
            { thoughtText: "thoughtText kkkkk", username: 'kkkkk', reactions: [] }
        ]
    },
    {
        username: 'lllll', email: 'lllll@lllll.com', thoughts: [
            { thoughtText: "thoughtText lllll", username: 'lllll', reactions: [] }
        ]
    },
    {
        username: 'mmmmm', email: 'mmmmm@mmmmm.com', thoughts: [
            { thoughtText: "thoughtText mmmmm", username: 'mmmmm', reactions: [] }
        ]
    },
    {
        username: 'nnnnn', email: 'nnnnn@nnnnn.com', thoughts: [
            { thoughtText: "thoughtText nnnnn", username: 'nnnnn', reactions: [] }
        ]
    },
    {
        username: 'ooooo', email: 'ooooo@ooooo.com', thoughts: [
            { thoughtText: "thoughtText ooooo", username: 'ooooo', reactions: [] }
        ]
    },
    {
        username: 'ppppp', email: 'ppppp@ppppp.com', thoughts: [
            { thoughtText: "thoughtText ppppp", username: 'ppppp', reactions: [] }
        ]
    },
    {
        username: 'qqqqq', email: 'qqqqq@qqqqq.com', thoughts: [
            { thoughtText: "thoughtText qqqqq", username: 'qqqqq', reactions: [] }
        ]
    },
    {
        username: 'rrrrr', email: 'rrrrr@rrrrr.com', thoughts: [
            { thoughtText: "thoughtText rrrrr", username: 'rrrrr', reactions: [] }
        ]
    },
    {
        username: 'sssss', email: 'sssss@sssss.com', thoughts: [
            { thoughtText: "thoughtText sssss", username: 'sssss', reactions: [] }
        ]
    },
    {
        username: 'ttttt', email: 'ttttt@ttttt.com', thoughts: [
            { thoughtText: "thoughtText ttttt", username: 'ttttt', reactions: [] }
        ]
    },
];

const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
];

const appDescriptions = [
    'Decision Tracker',
    'Find My Phone',
    'Learn Piano',
    'Starbase Defender',
    'Tower Defense',
    'Monopoly Money Manager',
    'Movie trailers',
    'Hello world',
    'Stupid Social Media App',
    'Notes',
    'Messages',
    'Email',
    'Compass',
    'Firefox',
    'Running app',
    'Cooking app',
    'Poker',
    'Deliveries',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random assignments that we can add to student object.
const getRandomAssignments = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            assignmentName: getRandomArrItem(appDescriptions),
            score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
        });
    }
    return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomAssignments };
