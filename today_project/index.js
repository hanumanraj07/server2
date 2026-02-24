const express = require("express");
const app = express();
app.use(express.json());

const users = [
  {
    studentName: "ABDUL HAQUE",
    university: "SUxCG 714",
    universityUID: "108444",
  },
  {
    studentName: "ADITYA KUMAR",
    university: "SUxCG 702",
    universityUID: "108716",
  },
  {
    studentName: "AMAN KUMAR",
    university: "SUxCG 702",
    universityUID: "108500",
  },
  {
    studentName: "AMRIT RAJ",
    university: "SUxCG 702",
    universityUID: "108587",
  },
];
 
app.get("/", (req, res) => {
  res.send("Express server is running 🚀");
});
 
app.get("/users", (req, res) => {
  res.status(200).json(users);
});
 
app.get("/users/:uid", (req, res) => {
  const { uid } = req.params;

  const student = users.find(
    (user) => user.universityUID === uid
  );

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(200).json(student);
});

app.post("/users", (req, res) => {
  const data = req.body;

   const newUsers = data.map(user => ({
      studentName: user.studentName,
      university: user.university,
      universityUID: user.universityUID
    }));

  users.push(...newUsers);

  res.status(201).json({
    message: "Users added successfully",
    users
  });
});


app.get("/cg/student/name/:name", (req, res) => {
  const { name } = req.params;

  const student = users.find(
    (user) => user.studentName.toLowerCase() === name.toLowerCase()
  );

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(200).json(student);
});


app.listen(3000, () => {
  console.log("Server started on port 3000");
});
