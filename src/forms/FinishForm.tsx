import React from "react";
import { Button, Table } from "react-bootstrap";
import { formState } from "../types/formTypes";

interface Props {
  formData: formState;
  handleNext: () => void;
  handleReset: () => void;
}
export const FinishForm: React.FC<Props> = ({
  formData,
  handleNext,
  handleReset,
}) => {
  return (
    <div>
      <Table responsive variant="dark" striped bordered hover size="sm">
        <thead></thead>
        <tbody>
          {Object.entries(formData).map(([keyName, value], ind) => {
            return (
              <tr key={ind}>
                <td className="text-center" style={{ fontWeight: "bold" }}>
                  {keyName.toUpperCase()}
                </td>
                <td className="text-center">{value}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="button-container">
        <Button variant="primary" className="back-button" onClick={handleNext}>
          Submit
        </Button>
        <Button variant="primary" className="next-button" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  );
};
