c:\IQAC\client\public\certificate-icon.svgimport faculty from "./data/faculty.js";
import students from "./data/students.js";
import connectDB from "./db/connect.js";
import Faculty from "./models/faculty.model.js";
import Student from "./models/student.model.js";

await connectDB();

const importData = async () => {
  try {
    await Student.deleteMany();
    await Faculty.deleteMany();

    await Student.insertMany(students);
    await Faculty.insertMany(faculty);

    console.log("Data imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Student.deleteMany();
    await Faculty.deleteMany();

    console.log("Data destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
