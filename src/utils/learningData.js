export const LEARNING_PATHS = {
  "Computer Science": {
    domain: "Computer Science",
    progress: 42,
    nodes: [
      { id: "cs1", title: "Arrays & Strings", status: "completed", type: "fundamental", resources: { yt: "https://youtube.com/playlist?list=arrays", gfg: "https://geeksforgeeks.org/array-data-structure/" } },
      { id: "cs2", title: "Two Pointers", status: "completed", type: "pattern", resources: { yt: "https://youtube.com/playlist?list=twopointers", gfg: "https://geeksforgeeks.org/two-pointers-technique/" } },
      { id: "cs3", title: "Sliding Window", status: "active", type: "pattern", resources: { yt: "https://youtube.com/playlist?list=slidingwindow", gfg: "https://geeksforgeeks.org/window-sliding-technique/" } },
      { id: "cs4", title: "Linked Lists", status: "locked", type: "data-structure", resources: { yt: "https://youtube.com/playlist?list=linkedlist", gfg: "https://geeksforgeeks.org/data-structures/linked-list/" } },
      { id: "cs5", title: "Binary Trees", status: "locked", type: "data-structure", resources: { yt: "https://youtube.com/playlist?list=trees", gfg: "https://geeksforgeeks.org/binary-tree-data-structure/" } },
      { id: "cs6", title: "Dynamic Programming", status: "locked", type: "mastery", resources: { yt: "https://youtube.com/playlist?list=dp", gfg: "https://geeksforgeeks.org/dynamic-programming/" } },
    ],
    challenges: [
      { id: "c1", title: "1. Two Sum", difficulty: "Easy", status: "Solved", acceptance: "52.1%" },
      { id: "c2", title: "3. Longest Substring Without Repeating", difficulty: "Medium", status: "Attempted", acceptance: "34.5%" },
      { id: "c3", title: "15. 3Sum", difficulty: "Medium", status: "Todo", acceptance: "33.2%" },
      { id: "c4", title: "42. Trapping Rain Water", difficulty: "Hard", status: "Todo", acceptance: "59.8%" },
    ]
  },
  "Electronics": {
    domain: "Electronics (ECE)",
    progress: 15,
    nodes: [
      { id: "ec1", title: "Ohm's Law & KCL/KVL", status: "completed", type: "fundamental", resources: { yt: "https://youtube.com/playlist?list=kcl", gfg: "https://geeksforgeeks.org/ohms-law-and-its-applications/" } },
      { id: "ec2", title: "Thevenin's Theorem", status: "active", type: "pattern", resources: { yt: "https://youtube.com/playlist?list=thevenin", gfg: "https://geeksforgeeks.org/thevenins-theorem/" } },
      { id: "ec3", title: "Op-Amps Basics", status: "locked", type: "data-structure", resources: { yt: "https://youtube.com/playlist?list=opamp", gfg: "https://geeksforgeeks.org/operational-amplifier/" } },
      { id: "ec4", title: "Microcontrollers", status: "locked", type: "mastery", resources: { yt: "https://youtube.com/playlist?list=micro", gfg: "https://geeksforgeeks.org/microcontrollers-basics/" } },
    ],
    challenges: [
      { id: "e1", title: "E-101. Node Voltage Analysis", difficulty: "Medium", status: "Attempted", acceptance: "41.2%" },
      { id: "e2", title: "E-105. Designing Active Low-Pass Filters", difficulty: "Hard", status: "Todo", acceptance: "22.5%" },
    ]
  }
};

export const CLASSROOM_FEED = [
  {
    id: "ann1",
    type: "announcement",
    author: "Dr. Arjun Mehra",
    time: "2 hours ago",
    content: "Please ensure you have completed the Array manipulation challenges before tomorrow's lab session.",
    attachments: 0
  },
  {
    id: "ass1",
    type: "assignment",
    author: "Prof. Kavitha S.",
    time: "Yesterday",
    title: "Project: Implement a Red-Black Tree",
    due: "Oct 15, 11:59 PM",
    status: "Pending",
    points: 100,
    attachments: 2
  },
  {
    id: "res1",
    type: "material",
    author: "Dr. Priya Nair",
    time: "3 days ago",
    title: "Lecture 04: Intro to Dynamic Programming",
    content: "Slide deck and recorded lecture from Tuesday.",
    attachments: 1
  }
];
