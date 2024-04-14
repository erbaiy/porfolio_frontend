// Import necessary dependencies
import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function Experiences() {
  const [experiences, setExperiences] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newExperience, setNewExperience] = useState({
    name: "",
    description: "",
    start_date: "",
    end_date: "",
  });

  useEffect(() => {
    // Function to fetch experiences
    fetchExperiences();
  }, []);

  const fetchExperiences = () => {
    fetch("http://127.0.0.1:8000/api/experiences")
      .then((response) => response.json())
      .then((data) => {
        setExperiences(data.experiences);
      })
      .catch((error) => console.log(error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewExperience((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddExperience = () => {
    fetch("http://127.0.0.1:8000/api/experiences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExperience),
    })
      .then((response) => response.json())
      .then((data) => {
        setExperiences((prevState) => [...prevState, data]);
        setNewExperience({
          name: "",
          description: "",
          start_date: "",
          end_date: "",
        });
        setShowAddModal(false);
      })
      .catch((error) => console.log(error));
  };

  const handleEditExperience = (id) => {
    // Implement edit functionality
    // You may use a similar approach as adding a new experience but with PUT method
  };

  const handleDeleteExperience = (id) => {
    // Implement delete functionality
    fetch(`http://127.0.0.1:8000/api/experiences/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setExperiences(
          experiences.filter((experience) => experience.id !== id)
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="mcw">
      {/* Add Modal Component */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Input fields for new experience */}
          <input
            type="text"
            name="name"
            value={newExperience.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="description"
            value={newExperience.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
          <input
            type="data"
            name="start_date"
            value={newExperience.start_date}
            onChange={handleInputChange}
            placeholder="Start Date"
          />
          <input
            type="date"
            name="end_date"
            value={newExperience.end_date}
            onChange={handleInputChange}
            placeholder="End Date"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddExperience}>
            Add Experience
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Add Experience Button */}
      <div className="cv">
        <button
          className="btn btn-primary"
          onClick={() => setShowAddModal(true)}
        >
          Add Experience
        </button>

        {/* Experiences Table */}
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Checkbox</th>
              <th>Name</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Date Value</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping through experiences to display in table */}
            {experiences.map((experience) => (
              <tr key={experience.id}>
                {/* Displaying experience details */}
                <td>{/* Checkbox */}</td>
                <td>{experience.name}</td>
                <td>{experience.description}</td>
                <td></td>
                <td>{experience.start_date}</td>
                <td>{experience.end_date}</td>
                <td>
                  {/* Edit button */}
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEditExperience(experience.id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  {/* Delete button */}
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteExperience(experience.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
