import React, { Component } from 'react';

class Result extends Component {
  start = e => {
    e.preventDefault();

    this.props.start();
  }

  render() {
    const {monday, tuesday, wednesday, thursday, friday, saturday, sunday, subject} = this.props;

    return (
      <>
        <h2>Dados</h2>
        Monday: <b>{monday}</b><br />
        Tuesday: <b>{tuesday}</b><br />
        Wednesday: <b>{wednesday}</b><br />
        Thursday: <b>{thursday}</b><br />
        Friday: <b>{friday}</b><br />
        Saturday: <b>{saturday}</b><br />
        Sunday: <b>{sunday}</b><br />
        Subject: <b>{subject}</b><br />

        <button className='back' onClick={this.start}>
          Inicio
        </button>
      </>
    );
  }
}

export default Result;