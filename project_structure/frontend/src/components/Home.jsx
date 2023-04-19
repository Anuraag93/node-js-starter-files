import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
  const [val, setVal] = useState([]);
  async function getData() {
    const get = await axios.get("http://localhost:5000");
    console.log(get.data);
    setVal(get.data);
  }
  async function deleteData(id) {
    const del = await axios.delete(`http://localhost:5000/${id}`);
    if (!del) console.log("Error in Deleting");
    console.log(del);
    // getData();
  }
  useEffect(() => {
    getData();
  }, [deleteData]);

  return (
    <div className="data">
      <h1
        style={{
          color: "white",
          textTransform: "capitalize",
          marginBottom: "12px",
        }}
      >
        Modify Form
      </h1>
      {val.map((item) => (
        <div key={item._id}>
          <h1>{item.email}</h1>
          <button onClick={() => deleteData(item._id)}>Delete</button>
          <Link to={`/update/${item._id}`}>
            <button>Update</button>
          </Link>
        </div>
      ))}
    </div>
  );
};
