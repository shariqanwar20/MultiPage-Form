import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StepperForForm from "./StepperForForm";
import { Paper } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Paper
        elevation={3}
        className="centered"
        style={{ width: "75%", margin: "0 auto", padding: "3%" }}
      >
        <StepperForForm />
      </Paper>
    </div>
  );
}

export default App;
