import { rand } from "./helpers";

const ROOMS = ["CS-301", "EC-202", "MB-105", "PH-401", "CH-103"];
const PROFS = ["Dr. Arjun Mehra", "Prof. Kavitha S.", "Dr. Priya Nair", "Dr. Ramesh T.", "Prof. Sunil V."];

export function genStudents(n) {
  const names = ["Aarav","Ananya","Rohan","Priya","Karthik","Divya","Arjun","Sneha","Vivek","Meera",
    "Siddharth","Pooja","Rahul","Nisha","Aakash","Kritika","Vikram","Tanvi","Nikhil","Isha",
    "Harish","Deepika","Suresh","Anjali","Ravi","Swati","Manish","Rekha","Ajay","Sunita"];
  return Array.from({length: n}, (_, i) => ({
    id: `REG${String(2024001 + i).padStart(7,'0')}`,
    name: names[i % names.length] + " " + ["K","S","R","M","P","V","N","A","T","G"][i % 10] + ".",
    afi: Math.round(rand(55, 99)),
    present: Math.random() > 0.08,
    pocketTime: Math.round(rand(0, 18)),
    appSwitch: Math.round(rand(0, 5)),
    clusterHead: i === 0,
    shadowHead: i === 1,
    battery: Math.round(rand(40, 100)),
    uuid: `HW-${Math.random().toString(36).slice(2,8).toUpperCase()}`,
    token: Math.random() > 0.02 ? "VALID" : "MISSING",
  }));
}

export function genSession(room, prof, idx) {
  const students = genStudents(Math.round(rand(22, 45)));
  const present = students.filter(s => s.present).length;
  return {
    id: `S${idx}`,
    room, prof,
    subject: ["Data Structures","Analog Electronics","Biochemistry","Quantum Physics","Organic Chem"][idx % 5],
    started: Date.now() - Math.round(rand(600,3600)) * 1000,
    duration: Math.round(rand(3600, 5400)),
    students,
    present,
    avgAfi: Math.round(students.reduce((a,s) => a + s.afi, 0) / students.length),
    espStatus: Math.random() > 0.1 ? "ONLINE" : "WARN",
    clusterNodes: Math.round(rand(3,8)),
    shadowActive: Math.random() > 0.8,
    tokenRotation: Math.round(rand(10, 45)),
  };
}

export const SESSIONS = ROOMS.map((r, i) => genSession(r, PROFS[i], i));
