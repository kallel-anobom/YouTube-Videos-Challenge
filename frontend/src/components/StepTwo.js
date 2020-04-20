import React, { Component } from 'react';

class StepTwo extends Component {
  continue = e => {
    e.preventDefault();

    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();

    this.props.prevStep();
  }

  render() {
    const {handleChange, subject} = this.props;
    
    return (
      <>
        <div className='row'>
          <div className='seven columns'>
            <label>Subject</label>
            <input
              className = 'u-full-width'
              placeholder = 'Subject'
              type = 'text'
              value = {subject}
              onChange={handleChange('subject')}
              autoFocus
            />
          </div>
        </div>
        
        <button className='Back' onClick={this.back}>
          Back
        </button>

        <button className='Next' onClick={this.continue}>
          Next
        </button>
      </>
    );
  }
}

export default StepTwo;