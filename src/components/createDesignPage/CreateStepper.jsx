import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

//Custom Style for stepper
const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#334DD8',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#334DD8',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === 'dark' ? '#444' : '#ccc',
    borderRadius: 1,
  },
}));

const CustomStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: ownerState.active || ownerState.completed ? '#334DD8' : '#B3BDF1',
  zIndex: 1,
  color: '#fff',
  width: 44,
  height: 44,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 24,
  fontWeight: 'bold',
}));

function CustomStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <CustomStepIconRoot ownerState={{ active, completed }} className={className}>
      {completed ? '✓' : active ? <div style={{width: 16,height: 16,backgroundColor: '#fff', borderRadius: '50%',}}/> : props.icon}
    </CustomStepIconRoot>
  );
}

const CustomStepLabel = ({ children, activeStep, index }) => {
  const isActive = index === activeStep;
  const isCompleted = index < activeStep;

  return (
    <StepLabel
      StepIconComponent={CustomStepIcon}
      sx={{
        '.MuiStepLabel-label': {
          fontSize: '24px',
          fontWeight: 600,
          color: isActive || isCompleted ? '#202020' : '#BDBDBD',
          fontFamily: '"Geist", "Roboto", "Helvetica", "Arial", sans-serif',
        },
      }}
    >
      {children}
    </StepLabel>
  );
};

const steps = ['Create Design', 'Collect Details', 'Express & Publish',];


//Stepper component
export default function CreateStepper({step}) {

  return (
    <Box sx={{ width: "1072px" }}>
      <Stepper activeStep={step} alternativeLabel={false} connector={<CustomConnector />}>
        {steps.map((label,index) => (
          <Step key={label} >
            <CustomStepLabel activeStep={step} index={index}>
            {label}
            </CustomStepLabel>
          </Step>
        ))}
      </Stepper>
      <hr className='border-white h-[1px] mt-6 mb-14'/>
    </Box>
  );
}


