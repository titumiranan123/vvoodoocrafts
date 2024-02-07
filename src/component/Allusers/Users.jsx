// import { RiAdminFill } from "react-icons/ri";
// import { FaUserTie } from "react-icons/fa";
import { useEffect, useState } from "react";
import setTitle from "../../hook/setTitle";

const Users = () => {
  const [users, setUsers] = useState([]);
  setTitle("Chamrabari || Dashboard-User");
  useEffect(() => {
    fetch("http://localhost:3001/api/v1/user", {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  console.log(users);

  return (
    <div>
      <div className="pb-4">
        <h2 className="text-center">Our All Users</h2>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-secondary-500 dark:text-secondary-400">
          <thead className="text-xs text-secondary-700 uppercase bg-secondary-50 dark:bg-secondary-700 dark:text-secondary-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>

              <th scope="col" className="px-6 py-3">
                Email
              </th>

              <th scope="col" className="px-6 py-3">
                Role
              </th>

              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user._id}>
                <th scope="col" className="px-6 py-3">
                  {user.name}
                </th>

                <th scope="col" className="px-6 py-3">
                  {user.email}
                </th>

                <th scope="col" className="px-6 cursor-pointer py-3">
                  {user.role}
                </th>

                <th scope="col" className="px-6 bg-red-500 btn py-3">
                  Delete
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
