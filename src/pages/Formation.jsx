import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

export default function Formation() {
  const [formations, setFormations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentFormation, setCurrentFormation] = useState({
    id: null,
    title: "",
    location: "",
    date: "",
    description: "",
  });

  useEffect(() => {
    fetchFormations();
  }, []);

  const fetchFormations = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/formations");
      setFormations(response.data.formations);
    } catch (error) {
      console.error("Error loading formations:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentFormation((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const method = currentFormation._id ? "PUT" : "POST";
    const url = currentFormation._id
      ? `http://127.0.0.1:8000/api/formations/${currentFormation._id}`
      : "http://127.0.0.1:8000/api/formations";
    console.log("ID:", currentFormation._id); // Log the ID
    console.log("ID:", method); // Log the ID
    console.log("ID:", url); // Log the ID

    try {
      await axios[method.toLowerCase()](url, currentFormation);
      fetchFormations();
    } catch (error) {
      console.error("Error submitting formation:", error);
    }

    resetFormAndHideModal();
  };

  const handleEdit = (formation) => {
    setCurrentFormation(formation);
    setShowModal(true);
  };

  const handleDelete = async (formation) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/formations/${formation._id}`
      );
      if (response.status === 200) {
        // Check if the delete was successful
        setFormations((prevFormations) =>
          prevFormations.filter((frm) => frm.id !== formation._id)
        );
        // This filters out the deleted formation from the state
      } else {
        console.error("Failed to delete the formation:", response);
      }
    } catch (error) {
      console.error("Error deleting formation:", error);
    }
  };

  const resetFormAndHideModal = () => {
    setCurrentFormation({
      id: null,
      title: "",
      location: "",
      date: "",
      description: "",
    });
    setShowModal(false);
  };

  return (
    <div className="mcw">
      <Button className="btn btn-primary" onClick={() => setShowModal(true)}>
        Add Formation
      </Button>
      <Modal show={showModal} onHide={resetFormAndHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentFormation._id ? "Edit Formation" : "Add Formation"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Title"
            value={currentFormation.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="location"
            className="form-control"
            placeholder="Location"
            value={currentFormation.location}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="date"
            className="form-control"
            value={currentFormation.date}
            onChange={handleInputChange}
          />
          <textarea
            name="description"
            className="form-control"
            placeholder="Description"
            value={currentFormation.description}
            onChange={handleInputChange}
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={resetFormAndHideModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {currentFormation._id ? "Update" : "Add"} Formation
          </Button>
        </Modal.Footer>
      </Modal>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Date</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {formations.map((formation) => (
            <tr key={formation._id}>
              <td>{formation.title}</td>
              <td>{formation.location}</td>
              <td>{formation.date}</td>
              <td>{formation.description}</td>
              <td>
                <Button
                  variant="info"
                  size="sm"
                  onClick={() => handleEdit(formation)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(formation)}
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
