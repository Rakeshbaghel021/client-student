import React, { useState } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import axios from "axios";

function Student({ setStudents }) {
  const [name, setName] = useState("");
  const [standard, setStandard] = useState("");
  const [rollNo, setRollno] = useState([]);

  const handleSubmit = async () => {
    await axios
      .post("http://localhost:4000/student", {
        name,
        standard,
        rollNo,
      })
      .then((res) => setStudents(res.data.students));
  };
  return (
    <div className="">
      <form>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Student Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter your Name"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="standard"
            className="block text-sm font-medium text-gray-700"
          >
            Standard Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setStandard(e.target.value)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter your standard"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="account-number"
            className="block text-sm font-medium text-gray-700"
          >
            Roll number
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              name="account-number"
              id="account-number"
              onChange={(e) => setRollno(e.target.value)}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="000-00-0000"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <QuestionMarkCircleIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Student;
