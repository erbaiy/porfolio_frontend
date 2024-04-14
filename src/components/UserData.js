import React, { useEffect, useState } from "react";
import axios from "axios";

const UserData = () => {
  const [informations, setInformations] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/informations")
      .then((response) => {
        setInformations(response.data.informations);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="mcw">
      <div className="cv">
        <div>
          <div className="inbox">
            <div className="inbox-sb"></div>
            <div className="inbox-bx container-fluid">
              <div className="row">
                <div className="col-md-2">
                  <ul>
                    <li>
                      <a href="#">Inbox</a>
                    </li>
                    <li>
                      <a href="#">Sent</a>
                    </li>
                    <li>
                      <a href="#">Trash</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-10">
                  <table className="table table-stripped">
                    <thead>
                      <tr>
                        <th>
                          <input type="checkbox" />
                        </th>
                        <th>
                          <i className="fa fa-star"></i>
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Edite</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {informations.map((information) => (
                        <tr key={information.id}>
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>
                            <i className="fa fa-star"></i>
                          </td>
                          <td>
                            <b>{information.name}</b>
                          </td>
                          <td>
                            <b>{information.email}</b>
                          </td>
                          <td>{information.created_at}</td>
                          <td>
                            <button type="button" class="btn btn-primary">
                              Edite
                            </button>
                          </td>
                          <td>
                            <button type="button" class="btn btn-danger">
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;
