import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import FormationList from "../components/FormationList";
import Sidebar from "../Sidebar";
// import AboutPage from "./components/AboutPage";
export default function Users() {
  return (
    <>
      {/* <Sidebar /> */}
      <FormationList />
    </>
  );
}
