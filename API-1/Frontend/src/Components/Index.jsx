import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios.get("http://localhost:1008/viewAdmin")
      .then((res) => {
        console.log("Fetched data:", res.data.data); // Add console log
        setData(res.data.data);
      })
      .catch((error) => {
      });
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('image', image);

    if (editIndex) {
      axios.put(`http://localhost:1008/updateAdmin?id=${editIndex}`, formData)
        .then((data) => {
          fetchData();
          setName('');
          setEmail('');
          setPassword('');
          setImage(null);
          setEditIndex('');
        })
    } else {
      axios.post('http://localhost:1008/addAdmin', formData)
        .then(res => {
          fetchData();
          setName('');
          setEmail('');
          setPassword('');
          setImage(null);
        })

    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:1008/deleteAdmin?id=${id}`)
      .then((res) => {
        fetchData();
      })
  };

  const handleEdit = (data) => {
    setName(data.name);
    setEmail(data.email);
    setPassword(data.password);
    setEditIndex(data._id);
  };

  return (
    <>
      <center>
        <h1>API CRUD </h1> <br /><br />
        <form onSubmit={handleAdd}>
          <input type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} name="name" value={name} required /> <br /><br />
          <input type="text" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} name="email" value={email} required /> <br /><br />
          <input type="text" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} name="password" value={password} required /> <br /><br />
          <input type="file" onChange={(e) => setImage(e.target.files[0])} name="image" required /> <br /><br />
          <button id="bt1" type="submit" >{editIndex ? "Update Data" : "Add Data"}</button>  <br /><br /><br />
        </form>
        <table width={"90%"} border={2}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Image</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(data => {
                return (
                  <tr key={data._id}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.password}</td>
                    <td>
                      <img src={`http://localhost:1008/${data.image}`} width="75px" alt="User" />
                    </td>
                    <td>
                      <button style={{ color: "red" }} onClick={() => handleDelete(data._id)}><i className="fa-solid fa-trash"></i></button>
                      <button style={{ color: "green" }} onClick={() => handleEdit(data)}><i className="fa-solid fa-pen-to-square"></i></button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </center>
    </>
  );
}
