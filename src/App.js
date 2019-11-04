//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Seahawks</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">49ers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <select name="Home Score" className='score-dropddown' id="home-score" value='0' onChange={ (e) => setHomeScore(homeScore + parseInt(e.target.value)) }>
            <option value="0">Home Team</option>
            <option value="6">touchdown</option>
            <option value="1">extra point</option>
            <option value="2">two-point conversion</option>
            <option value="3">field goal</option>
            <option value="2">safety</option>
          </select>

          <select name="Away Score" className='score-dropddown' id="away-score" value='0' onChange={ (e) => setAwayScore(awayScore + parseInt(e.target.value)) }>
            <option value="0">Away Team</option>
            <option value="6">touchdown</option>
            <option value="1">extra point</option>
            <option value="2">two-point conversion</option>
            <option value="3">field goal</option>
            <option value="2">safety</option>
          </select>
          {/* <button className="homeButtons__touchdown" onClick={ () => setHomeScore(homeScore + 6)}>Home Touchdown</button>
          <button className="homeButtons__extraPoint" onClick={ () => setHomeScore(homeScore + 1)}>Home Extra point</button>
          <button className="homeButtons__twoPoint" onClick={ () => setHomeScore(homeScore + 2)}>Home Two-point Conversion</button>
          <button className="homeButtons__fieldGoal" onClick={ () => setHomeScore(homeScore + 3)}>Home Field Goal</button>
          <button className="homeButtons__safety" onClick={ () => setHomeScore(homeScore + 2)}>Home Safety</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={ () => setAwayScore(awayScore + 6)}>Away Touchdown</button>
          <button className="awayButtons__extraPoint" onClick={ () => setAwayScore(awayScore + 1)}>Away Extra point</button>
          <button className="awayButtons__twoPoint" onClick={ () => setAwayScore(awayScore + 2)}>Away Two-point Conversion</button>
          <button className="awayButtons__fieldGoal" onClick={ () => setAwayScore(awayScore + 3)}>Away Field Goal</button>
          <button className="awayButtons__safety" onClick={ () => setAwayScore(awayScore + 2)}>Away Safety</button> */}
        </div>
      </section>
    </div>
  );
}

export default App;
