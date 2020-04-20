import React, { Component } from 'react';

class StepOne extends Component {
  continue = e => {
    e.preventDefault();

    this.props.nextStep();
  }

  render() {
    const {handleChange, monday, tuesday, wednesday, thursday, friday, saturday, sunday} = this.props;
    return (
      <>
        <div className='row'>
          <div className='seven columns'>
            <label>Monday</label>
            <input
              className = 'u-full-width'
              placeholder = 'Monday'
              type = 'number'
              value = {monday}
              onChange = {handleChange('monday')}
              autoFocus
            />
          </div>
        </div>

        <div className='row'>
          <div className='seven columns'>
            <label>Tuesday</label>
            <input
              className = 'u-full-width'
              placeholder = 'Tuesday'
              value = {tuesday}
              onChange = {handleChange('tuesday')}
              type = 'number'
            />
          </div>
        </div>

        <div className='row'>
          <div className='seven columns'>
            <label>Wednesday</label>
            <input
              className = 'u-full-width'
              placeholder = 'Wednesday'
              value = {wednesday}
              onChange = {handleChange('wednesday')}
              type = 'number'
            />
          </div>
        </div>

        <div className='row'>
          <div className='seven columns'>
            <label>Thursday</label>
            <input
              className = 'u-full-width'
              placeholder = 'Thursday'
              value = {thursday}
              onChange = {handleChange('thursday')}
              type = 'number'
            />
          </div>
        </div>

        <div className='row'>
          <div className='seven columns'>
            <label>Friday</label>
            <input
              className = 'u-full-width'
              placeholder = 'Friday'
              value = {friday}
              onChange = {handleChange('friday')}
              type = 'number'
            />
          </div>
        </div>

        <div className='row'>
          <div className='seven columns'>
            <label>Saturday</label>
            <input
              className = 'u-full-width'
              placeholder = 'Saturday'
              value = {saturday}
              onChange = {handleChange('saturday')}
              type = 'number'
            />
          </div>
        </div>

        <div className='row'>
          <div className='seven columns'>
            <label>Sunday</label>
            <input
              className = 'u-full-width'
              placeholder = 'Sunday'
              value = {sunday}
              onChange = {handleChange('sunday')}
              type = 'number'
            />
          </div>
        </div>
        
        <button className='Next' onClick={this.continue}>
          Next
        </button>
      </>
    );
  }
}

export default StepOne;