
import './App.css';
//import { CohortsData} from './Cohort'
import React from 'react';
import CohortDetails from './CohortDetails';
//import CohortDetails from './components/CohortDetails';

function App() {
  const cohorts = [
    {
      name: "INTADMDF10 -.NET FSD",
      status: "Scheduled",
      startDate: "22-Feb-2022",
      coach: "Aathma",
      trainer: "Jojo Jose"
    },
    {
      name: "ADM21JF014 - Java FSD",
      status: "Ongoing",
      startDate: "10-Sep-2021",
      coach: "Apoorv",
      trainer: "Elisa Smith"
    },
    {
      name: "CDBJF21025 - Java FSD",
      status: "Ongoing",
      startDate: "24-Dec-2021",
      coach: "Aathma",
      trainer: "John Doe"
    }
  ];

  return (
    <div>
      <h2>Cohorts Details</h2>
      {cohorts.map((c, index) => (
        <CohortDetails key={index} cohort={c} />
      ))}
    </div>
  );
}

export default App;
