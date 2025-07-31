import React from 'react';


const IndianPlayers = () => {
  // Odd-positioned players (1st, 3rd, 5th)
  const oddPlayers = ['Sachin1', 'Virat3', 'Yuvaraj5'];
  const [first, third, fifth] = oddPlayers;

  // Even-positioned players (2nd, 4th, 6th)
  const evenPlayers = ['Dhoni2', 'Rohit4', 'Raina6'];
  const [second, fourth, sixth] = evenPlayers;

  // T20 and Ranji players merged using spread operator
  const T20players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const allMerged = [...T20players, ...RanjiPlayers];

  return (
    <div style={{ padding: '2px' }}>
      <h2>Odd Players</h2>
      <ul>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>

      <h2>Even Players</h2>
      <ul>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </ul>

      <hr />

      <h2>List of Indian Players Merged:</h2>
      <ul>
        {allMerged.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
