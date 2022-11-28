import React, { useState, useEffect } from 'react';
import { useTheme, MobileStepper, Paper, Button } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MediaQuery from 'react-responsive';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Stepper(props: any) {
  const { topAdSlider } = props;
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [maxSteps, setMaxSteps] = useState(0);
  useEffect(() => {
    setMaxSteps(topAdSlider.length)
  }, [topAdSlider]);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{ marginTop: '5%' }}
      >
        {!!topAdSlider && topAdSlider.map((step: any, index: number) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <MediaQuery minWidth='1000px'>
                  <div className='display-flex cake'>
                    <Paper className='cake-description'>
                      <div className='font-32-bold'>{step.main_title_string}</div>
                      <div className='font-16-medium'>{step.sub_title_string}</div>
                    </Paper>
                    <img
                      className='cake-img'
                      src='/cake.png'
                      alt="cake-img"
                    />
                  </div>
                </MediaQuery>
                <MediaQuery maxWidth='1000px'>
                  <div >
                    <img
                      width='100%'
                      src='/cake.png'
                      alt="cake-img"
                    />
                    <Paper >
                      <div className='font-32-bold'>{step.main_title_string}</div>
                      <div className='font-16-medium'>{step.sub_title_string}</div>
                    </Paper>
                  </div>
                </MediaQuery>
              </>
            ) : <></>}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        className='stepper'
        activeStep={activeStep}
        sx={{ flexGrow: 3, backgroundColor: '#F8F8F8' }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            sx={{ visibility: 'hidden' }}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}
            sx={{ visibility: 'hidden' }}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />

    </div>

  );
}

export default Stepper;
