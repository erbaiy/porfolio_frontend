import React, { useState } from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "./../layouts/login.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom v6

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to store login error messages
  const navigate = useNavigate(); // Get the instance of useNavigate for navigation

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(""); // Reset errors on new login attempt

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      });
      console.log("Login successful", response.data);
      navigate("/experiences");
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : "No response"
      );
      setError("Failed to login. Please check your email and password.");
    }
  };

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <form onSubmit={handleLogin}>
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample"
            />
          </MDBCol>
          <MDBCol col="4" md="6">
            {/* Error Message Display */}
            {error && <p className="text-danger">{error}</p>}

            {/* Email and Password Fields */}
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="formControlLg"
              type="email"
              size="lg"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="formControlLg"
              type="password"
              size="lg"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="#!">Forgot password?</a>
            </div>

            <div className="text-center text-md-start mt-4 pt-2">
              <MDBBtn type="submit" className="mb-0 px-5" size="lg">
                Login
              </MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Don't have an account?{" "}
                <a href="#!" className="link-danger">
                  Register
                </a>
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </form>
    </MDBContainer>
  );
}

export default Login;
