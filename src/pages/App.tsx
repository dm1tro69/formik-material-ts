import React from 'react';
import {Stepper, Typography, Step, StepLabel} from "@material-ui/core";
import {Wrapper} from "../components/layout";


const steps = ['Shipping address', 'Payment details', 'Review your order']

function App() {
  return (
    <Wrapper>
       <Typography>
         Checkout
       </Typography>

        <Stepper>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    </Wrapper>
  )
}

export default App;
