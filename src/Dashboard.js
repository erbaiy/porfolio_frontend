import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { FaBars, FaBellO, FaCommentO } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

const Dashboard = () => {
  const [informations, setInformations] = useState([]);

  useEffect(() => {
    fetch("/informations") // Replace with the actual endpoint URL of your Laravel backend
      .then((response) => response.json())
      .then((data) => {
        setInformations(data.informations);
      })
      .catch((error) => console.log(error));
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
                          <td></td>
                          <td>{information.created_at}</td>
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

export default Dashboard;
