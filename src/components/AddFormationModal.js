import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap"; // Import components from react-bootstrap

const AddFormationModal = ({ showModal, handleClose, handleAddFormation }) => {
  const [newFormation, setNewFormation] = useState({
    title: "",
    description: "",
    date: "",
  }); // State for new formation data

  const handleInputChange = (event) => {
    setNewFormation({
      ...newFormation,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Formation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={newFormation.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={newFormation.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={newFormation.date}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => handleAddFormation(newFormation)}
        >
          Save Formation
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddFormationModal;
