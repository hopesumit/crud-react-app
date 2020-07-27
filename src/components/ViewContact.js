import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ViewContact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    company: "",
  });

  const { id } = useParams();

  useEffect(() => {
    viewContact();
  }, []);

  const viewContact = async () => {
    const view = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(view.data);
  };
  return (
    <div className="container py-3">
      <Link className="btn btn-primary" to="/">
        Back
      </Link>
      <h1 className="display-4"></h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.company}</li>
      </ul>
    </div>
  );
}

export default ViewContact;
