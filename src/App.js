import './App.css';
import { useState } from 'react';

const HeaderText = (props) => {
  return (
    <div>
      <p className='header-name'>{props.name}</p>
      <p className='header-text'>{props.text}</p>
    </div>
  )
}



const myObject = {
  name: "Hafþór Frímannsson",
  text: "Rookie programmer",
  jobs: [
    {
      title: "atNorth",
      date: "October 2019 - Present",
      description : "Technician. Repairing Bitcoin/Ethereum machines."
    },
    {
      title: "Airport Associates",
      date: "April 2018 - September 2019 ",
      description : "Load Control. calculating aircraft weight, balance and control of wide body aircraft to determine load limits."
    },
    {
      title: "Airport Associates",
      date: "May 2015 - April 2018",
      description : "Baggage Handler. Loading and unloading baggages."
    },
  ]
}


const jobList = (jobs) => {
  return (
    <div className='jobList'>
      <h1>{jobs.title}</h1>
      <h2>{jobs.date}</h2>
      <p>{jobs.description}</p>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <img className="image" src="me.png"></img>
        <h1><HeaderText name={myObject.name}/></h1>
        <p className="HeaderP"><HeaderText text={myObject.text}/></p>
        </div>
        <hr></hr>
        <div>
        <h1>{myObject.jobs[0].title}</h1>
        <h2>{}</h2>
        <p>{}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
