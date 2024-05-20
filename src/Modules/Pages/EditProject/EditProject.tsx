import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditProject() {

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile:any = e.target.files?.[0]; // تحقق من وجود ملف
        if (selectedFile) {
          setPhoto(selectedFile);
        }
      };
      

  const navigate = useNavigate();
  const { id } = useParams();

  const [message, setMessage] = useState("");
  const [inputs, setInputs]:any = useState({
    name: "",
    description: "",
  });
  const [fileImage, setPhoto] = useState("");

  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setInputs((values:any) => ({ ...values, [name]: value }));
  };

  const uploadProject = async () => {
    const formData = new FormData();
    formData.append("_method", "PUT");
    formData.append("name", inputs.name);
    formData.append("description", inputs.description);
    formData.append("image", fileImage);

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/projectsupdate/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setMessage(response.data.message); //"message": "Project successfully updated.."
      setTimeout(() => {
        navigate("/projectlist");
      }, 2000);
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    await uploadProject();
  };

  useEffect(() => {
    getProject();
  }, []);

  function getProject() {
    axios.get(`http://127.0.0.1:8000/api/projects/${id}`).then((response) => {
      setInputs(response.data.project);
    });
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-4">
            <h5 className="mb-4">Edit Project</h5>
            <p className="text-success">
              <b>{message}</b>
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-3">Project Title</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    value={inputs.name || ""}
                    className="form-control"
                    name="name"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3">Description</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    value={inputs.description || ""}
                    className="form-control"
                    name="description"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3">Project Image</label>
                <div className="col-sm-9">
                  <img
                    src={`http://127.0.0.1:8000/storage/${inputs.image}`}
                    alt=""
                    height={300}
                    width={300}
                  />
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3"></label>
                <div className="col-sm-9">
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EditProject;
