import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

export default function Experiences() {
  const [experiences, setExperiences] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentExperience, setCurrentExperience] = useState({
    id: null,
    name: "",
    description: "",
    start_date: "",
    end_date: "",
  });

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/experiences");
      setExperiences(response.data.experiences);
    } catch (error) {
      console.error("Error loading experiences:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentExperience((prev) => ({ ...prev, [name]: value }));
    console.log(currentExperience);
  };

  const handleSubmit = async () => {
    const method = currentExperience._id ? "PUT" : "POST";
    const url = currentExperience._id
      ? `http://127.0.0.1:8000/api/experiences/${currentExperience._id}`
      : "http://127.0.0.1:8000/api/experiences";

    console.log("ID:", currentExperience._id); // Log the ID
    console.log("ID:", method); // Log the ID
    console.log("ID:", url); // Log the ID

    try {
      await axios[method.toLowerCase()](url, currentExperience);
      fetchExperiences();
    } catch (error) {
      console.error("Error submitting experience:", error);
    }

    resetFormAndHideModal();
  };

  const handleEdit = (experience) => {
    setCurrentExperience(experience);
    setShowModal(true);
  };

  const handleDelete = async (experience) => {
    try {
      console.log("Deleting experience:", experience);
      let id = experience._id;
      console.log(id);
      await axios.delete(`http://127.0.0.1:8000/api/experiences/${id}`);
      setExperiences((prevExperiences) =>
        prevExperiences.filter(
          (exp) => exp.experience_id !== experience.experience_id
        )
      );
    } catch (error) {
      console.error("Error deleting experience:", error);
    }
  };

  const resetFormAndHideModal = () => {
    setCurrentExperience({
      id: null,
      name: "",
      description: "",
      start_date: "",
      end_date: "",
    });
    setShowModal(false);
  };

  return (
    <div className="mcw">
      <Button className="btn btn-primary" onClick={() => setShowModal(true)}>
        Add Experience
      </Button>
      <Modal show={showModal} onHide={resetFormAndHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentExperience._id ? "Edit Experience" : "Add Experience"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Experience Name"
            value={currentExperience.name}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="start_date"
            className="form-control"
            value={currentExperience.start_date}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="end_date"
            className="form-control"
            value={currentExperience.end_date}
            onChange={handleInputChange}
          />
          <textarea
            name="description"
            className="form-control"
            placeholder="Description"
            value={currentExperience.description}
            onChange={handleInputChange}
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={resetFormAndHideModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {currentExperience._id ? "Update" : "Add"} Experience
          </Button>
        </Modal.Footer>
      </Modal>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {experiences.map((experience) => (
            <tr key={experience.id}>
              <td>{experience.name}</td>
              <td>{experience.description}</td>
              <td>{experience.start_date}</td>
              <td>{experience.end_date}</td>
              <td>
                <Button
                  variant="info"
                  size="sm"
                  onClick={() => handleEdit(experience)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(experience)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
