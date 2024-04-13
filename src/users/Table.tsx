import React, { useState, useEffect } from "react";
import { BsTrash3Fill, BsPlusCircleFill } from "react-icons/bs";
import * as client from "./client";
import { User } from "./client";
export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>({
    _id: "", username: "", password: "", firstName: "",
    lastName: "", role: "USER" });
  const createUser = async () => {
    try {
      await client.createUser(user);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteUser = async (user: User) => {
    try {
      await client.deleteUser(user);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => { fetchUsers(); }, [users]);
  return (
    <div>
      <h1>User Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Username/Password</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th></th>
          </tr>
          <tr>
            <td>
              <input value={user.username} onChange={(e) =>
                setUser({ ...user, username: e.target.value })}/>
              <input value={user.password} onChange={(e) =>
                setUser({ ...user, password: e.target.value })}/>
            </td>
            <td>
              <input value={user.firstName} onChange={(e) =>
                setUser({ ...user, firstName: e.target.value })}/>
            </td>
            <td>
              <input value={user.lastName} onChange={(e) =>
                setUser({ ...user, lastName: e.target.value })}/>
            </td>
            <td>
              <select value={user.role} onChange={(e) =>
                setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td>
              <BsPlusCircleFill color='green' className="ms-2" size={25} onClick={createUser}/>
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.firstName || 'N/A'}</td>
              <td>{user.lastName  || 'N/A'}</td>
              <td>{user.role}</td>
              <td>
                <button className='align-items-center btn btn-danger' onClick={() => deleteUser(user)}>
                  <BsTrash3Fill color="white" />
                </button>
              </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
