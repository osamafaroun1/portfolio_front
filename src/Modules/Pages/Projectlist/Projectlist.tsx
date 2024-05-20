import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Header from "../../Components/Header/Header";

function ProjectList() {
  const [product, setProject] = useState([]);

  useEffect(() => {
    const getProject = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/projects");
        const response = await res.json();
        setProject(response.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    getProject();
  }, []);

  const deleteProject = async (id:any) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/projectdelete/${id}`);
      alert("Successfully Deleted");
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <>
    <Header/>
    <Container className="container_overflow">
      <div className="row">
        <div className="col-12">
          <h5 className="mb-4">Project List</h5>
          <Table bordered>
            <thead>
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Project Title</th>
                <th scope="col">Project Description</th>
                <th scope="col">Project Image</th>
                <th scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
   {product.length > 0 ? (
    product.map((pdata:any, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{pdata.name}</td>
        <td>{pdata.description}</td>
        <td>
          <img
            src={`http://127.0.0.1:8000/storage/${pdata.image}`}
            alt=""
            height={50}
            width={90}
          />
        </td>
        <td>
          <Link
            to={`/editProject/${pdata.id}/edit`}
            className="btn btn-success mx-2"
          >
            Edit
          </Link>
          <Button
            variant="danger"
            onClick={() => deleteProject(pdata.id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={5}>No products found.</td>
    </tr>
  )}
</tbody>

          </Table>
        </div>
      </div>
    </Container>
  </>
  );
}

export default ProjectList;
