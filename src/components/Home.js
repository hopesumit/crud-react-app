import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    userData();
  }, []);

  const userData = async () => {
    const response = await axios.get("http://localhost:3001/users");
    setusers(response.data.reverse());
  };

  const deleteContact = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    userData();
  };
  return (
    <div>
      <h1>Home</h1>
      <table class="table border shadow">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Mail-id</th>
            <th scope="col">Company name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company}</td>

              <Link
                className="btn btn-outline-primary mr-2"
                to={`/users/${user.id}`}
              >
                <i class="fa fa-eye" aria-hidden="true"></i>
              </Link>
              <Link
                className="btn btn-outline-primary mr-2"
                to={`users/edit/${user.id}`}
              >
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              </Link>
              <Link
                className="btn btn-danger"
                onClick={() => deleteContact(user.id)}
              >
                <i class="fa fa-trash" aria-hidden="true"></i>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
