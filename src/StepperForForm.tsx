import React, { useState } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import DoneIcon from "@material-ui/icons/Done";
import StepConnector from "@material-ui/core/StepConnector";
import { StepIconProps } from "@material-ui/core/StepIcon";

import { SignUpForm } from "./forms/SignUpForm";
import { PersonalInformationForm } from "./forms/PersonalInformationForm";
import { FinishForm } from "./forms/FinishForm";
import { formState, setFormState } from "./types/formTypes";
import Swal from "sweetalert2";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  fatherName: "",
  motherName: "",
  address1: "",
  address2: "",
  country: "",
  city: "",
  zip: "",
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage: "linear-gradient(315deg, #485461 0%, #28313b 74%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage: "linear-gradient(315deg, #485461 0%, #28313b 74%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage: "linear-gradient(315deg, #485461 0%, #28313b 74%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage: "linear-gradient(315deg, #485461 0%, #28313b 74%)",
  },
});

function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <LockIcon />,
    2: <PersonIcon />,
    3: <DoneIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

function getSteps() {
  return ["SignUp Form", "Personal Information", "Finish"];
}

function getStepContent(
  step: number,
  formData: formState,
  handleNext: () => void,
  handleBack: () => void,
  handleReset: () => void,
  setFormData?: setFormState
) {
  switch (step) {
    case 0:
      if (handleNext && setFormData)
        return (
          <SignUpForm
            handleNext={handleNext}
            formData={formData}
            setFormData={setFormData}
          />
        );
      break;
    case 1:
      if (handleBack && handleNext && setFormData)
        return (
          <PersonalInformationForm
            formData={formData}
            handleNext={handleNext}
            handleBack={handleBack}
            setFormData={setFormData}
          />
        );
      break;
    case 2:
      return (
        <FinishForm
          formData={formData}
          handleReset={handleReset}
          handleNext={handleNext}
        />
      );
    default:
      return "Unknown step";
  }
}

export default function StepperForForm() {
  const [formData, setFormData] = useState(initialValues);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData(initialValues);
  };

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
        {console.log(formData)}
      </Stepper>
      {activeStep === steps.length ? (
        //display the sweet alert
        <div>
          {Swal.fire("Good Job", "Form Submitted", "success")}
          {handleReset()}
        </div>
      ) : (
        <div>
          {getStepContent(
            activeStep,
            formData,
            handleNext,
            handleBack,
            handleReset,
            setFormData
          )}
        </div>
      )}
    </div>
  );
}
