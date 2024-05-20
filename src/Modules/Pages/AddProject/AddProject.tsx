import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";

function AddProject() {

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile:any = e.target.files?.[0]; // تحقق من وجود ملف
        if (selectedFile) {
          setPhoto(selectedFile);
        }
      };

  const navigate = useNavigate();
  const [txtName, setName] = useState('');
  const [txtDescription, setDescription] = useState('');
  const [fileImage, setPhoto] = useState('');
  const [message, setMessage] = useState('');

  const uploadproject = async () => {
    const formData = new FormData();
    formData.append('name', txtName);
    formData.append('description', txtDescription);
    formData.append('image', fileImage);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/projects", formData, {
        headers: { 'Content-Type': "multipart/form-data" },
      });

      if (response.data.message) {
        setMessage(response.data.message);
        setTimeout(() => {
          navigate('/projectlist');
        }, 2000);
      }
    } catch (error) {
      console.error("Error uploading project:", error);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await uploadproject();
  };

  return (
    <React.Fragment>
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-4">
            <h5 className="mb-4">Add project</h5>
            <p className="text-warning">{message}</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-3">Project Title</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3">Description</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" onChange={(e) => setDescription(e.target.value)} />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3">Product Image</label>
                <div className="col-sm-9">
                  <input type="file" className="form-control" onChange={handleFileChange} />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3"></label>
                <div className="col-sm-9">
                  <input type="submit" value={'send'}  className="btn btn-success"/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AddProject;
