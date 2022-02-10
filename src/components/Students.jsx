import React, { useEffect, useState } from "react";
import axios from "axios";
import EdifForm from "./EditForm";

function Students({ students, setStudents }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [person, setPerson] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:4000/students")
      .then((res) => setStudents(res.data));
  }, []);
  const onDelete = async (id) => {
    await axios
      .delete(`http://localhost:4000/student/${id}`)
      .then((res) => setStudents(res.data.students));
  };

  return (
    <div className="">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Standard
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Roll no
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students.map((person) => (
                    <tr key={person.rollNo}>
                      {console.log(person)}
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {person.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.standard}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.rollNo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => {
                            setPerson(person);
                            setIsModalVisible(true);
                          }}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => onDelete(person._id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {isModalVisible && (
        <EdifForm
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          person={person}
          setStudents={setStudents}
        />
      )}
    </div>
  );
}

export default Students;
