import { Controller } from "@hotwired/stimulus"
import App from "../components/app"
import { createRoot } from 'react-dom/client'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("React controller connected")

const app = document.getElementById("app");

createRoot(app).render(<Router><App /></Router>)
  }
}
