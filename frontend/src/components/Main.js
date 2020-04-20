import React, { Component } from 'react';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import Result from './Result';

class Main extends Component {
  state = {
    step: 1,

    //step 1
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: '',

    //step 2
    subject: ''
  }

  start = () => {
    const { step } = this.state;

    this.setState({ step: step  - 2 });
  }

  nextStep = () => {
    const { step } = this.state;

    this.setState({ step: step + 1 });
  }

  prevStep = () => {
    const { step } = this.state;

    this.setState({ step: step - 1 });
  }

  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  showStep = () => {
    const { step, monday, tuesday, wednesday, thursday, friday, saturday, sunday, subject } = this.state;

    if (step === 1) 
      return (
        <StepOne 
          handleChange = {this.handleChange}
          nextStep = {this.nextStep}
          monday = {monday}
          tuesday = {tuesday}
          wednesday = {wednesday}
          thursday = {thursday}
          friday = {friday}
          saturday = {saturday}
          sunday = {sunday}
        />
      );
    
    if (step === 2)
      return (
        <StepTwo
          handleChange = {this.handleChange}
          nextStep = {this.nextStep}
          prevStep = {this.prevStep}
          subject = {subject}
        />
      );

    if (step === 3)
      return (
        <Result 
        start = {this.start}
          monday = {monday}
          tuesday = {tuesday}
          wednesday = {wednesday}
          thursday = {thursday}
          friday = {friday}
          saturday = {saturday}
          sunday = {sunday}
          subject = {subject}
        />
      );
  }

  render() {
    const { step } = this.state;

    return (
      <>
        <h2>Step {step} of 3.</h2>
        {this.showStep()}
      </>
    );
  }
}

export default Main;