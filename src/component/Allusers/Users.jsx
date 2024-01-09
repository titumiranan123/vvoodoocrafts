// import { RiAdminFill } from "react-icons/ri";
// import { FaUserTie } from "react-icons/fa";
import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://chamrabari-backend-3gcht6ow4-titumiranan123.vercel.app/user')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error));
    }, []);
    const { data } = users;
    console.log(data)


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
                                Name & Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    {/* <tbody>
                        {
                            data?.map(user => <tr>
                                <td className="px-6 py-4">{user.name}</td>
                                <td className="px-6 py-4">{user.email}</td>
                            </tr>)
                        }
                    </tbody> */}
                </table>
            </div>
        </div>
    );
};

export default Users;
