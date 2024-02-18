import { useEffect, useState } from "react";
import setTitle from "../../hook/setTitle";
import Swal from "sweetalert2";
import useUser from "../../hook/useUser";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [data, refetch] = useUser();
  console.log(data);
  setTitle("Chamrabari || Dashboard-User");
  useEffect(() => {
    fetch("http://localhost:3001/api/v1/user", {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const updateUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3001/api/v1/user/${id}`, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}), // You can include data to update here if needed
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            if (data.message === "User updated successfully") {
              // Assuming refetch() is a function that fetches updated data
              refetch(); // Make sure refetch() is defined and works correctly
              Swal.fire("Updated!", "Your file has been updated.", "success");
            } else {
              throw new Error("Update failed"); // or handle different messages
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire("Error", "Failed to update user.", "error");
          });
      }
    });
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3001/api/v1/user/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}), // You can include data to update here if needed
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            if (data.message === "User deleted successfully") {
              // Assuming refetch() is a function that fetches updated data
              refetch(); // Make sure refetch() is defined and works correctly
              Swal.fire("Deleted!", "Your file has been Deleted.", "success");
            } else {
              throw new Error("Delete failed"); // or handle different messages
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire("Error", "Failed to Delete user.", "error");
          });
      }
    });
  };

  return (
    <div>
      <div className="pb-4">
        <h2 className="text-center font-bold text-xl mt-5">Our All Users</h2>
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
            {data?.map((user) => (
              <tr key={user._doc._id}>
                <th scope="col" className="px-6 py-3">
                  {user._doc.name}
                </th>

                <th scope="col" className="px-6 py-3">
                  {user._doc.email}
                </th>

                <th
                  onClick={() => updateUser(user._doc._id)}
                  scope="col"
                  className={`px-6 cursor-pointer py-3${
                    user._doc.role === ("SUPERADMIN" || "ADMIN")
                      ? "disabled cursor-not-allowed"
                      : ""
                  }`}
                >
                  {user._doc.role}
                </th>
                {user._doc.role !== "SUPERADMIN" && (
                  <th
                    onClick={() => deleteUser(user._doc._id)}
                    scope="col"
                    className={`px-6 bg-red-500 btn py-3 `}
                  >
                    Delete
                  </th>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
