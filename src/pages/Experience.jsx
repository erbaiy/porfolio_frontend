import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function Experiences() {
  const [experiences, setExperiences] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newFormation, setNewFormation] = useState({
    title: "",
    location: "",
    date: "",
    description: "",
  });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/experiences") // Replace with the actual endpoint URL of your Laravel backend
      .then((response) => response.json())
      .then((data) => {
        setExperiences(data.experiences);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewFormation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddFormation = () => {
    // Add the logic to handle adding a new formation
  };

  return (
    <div className="mcw">
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Formation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Formation Title"
            value={newFormation.title}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="start_date"
            className="form-control"
            placeholder="Formation Date"
            value={newFormation.date}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="end_date"
            className="form-control"
            placeholder="end Date"
            value={newFormation.date}
            onChange={handleInputChange}
          />
          <textarea
            name="description"
            className="form-control"
            placeholder="Formation Description"
            value={newFormation.description}
            onChange={handleInputChange}
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddFormation}>
            Add Formation
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="cv">
        <button
          className="btn btn-primary"
          onClick={() => setShowAddModal(true)}
        >
          Add Formation
        </button>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>
                <i className="fa fa-star"></i>
              </th>
              <th>name</th>
              <th>Description</th>
              <th>start_date</th>
              <th>end_date</th>
              <th>Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {experiences.map((experience) => (
              <tr key={experience.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <i className="fa fa-star"></i>
                </td>
                <td>
                  <b>{experience.name}</b>
                </td>
                <td>
                  <b>{experience.description}</b>
                </td>
                <td>
                  <b>{experience.start_date}</b>
                </td>
                <td>
                  <b>{experience.end_date}</b>
                </td>
                <td>{/* Add the Date value here */}</td>
                <td>{/* Add the Edit button here */}</td>
                <td>{/* Add the Delete button here */}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
