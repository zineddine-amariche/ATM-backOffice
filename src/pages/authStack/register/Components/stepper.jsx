import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { width } from "@mui/system";

const steps = ["Form One", "Form Two" ];
const stepper = (props) => {
  return (
    <Stepper dir={props.dir} activeStep={props.currentStep} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel></StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default stepper;
