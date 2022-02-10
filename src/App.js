import { useState } from "react";
import Student from "./components/Student";
import Students from "./components/Students";
import "./tailwind.css";

function App() {
  const [students, setStudents] = useState([]);

  return (
    <>
      <div className="flex items-center justify-center">
        <Student setStudents={setStudents} />
      </div>
      <Students students={students} setStudents={setStudents} />
    </>
  );
}

export default App;
