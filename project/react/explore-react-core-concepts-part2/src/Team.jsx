import { useState } from "react";

const Team = () =>{
    const [team, setTeam] = useState(11);
    const handleTeamIncrement = () =>{
        const newTeam = team + 1;
        setTeam(newTeam)
    }

    const handleTeamDecrement = () =>{
        // const newTeam = team - 1;
        setTeam(team - 1);
    }
    return (
      <div
        style={{
          border: "2px solid red",
          padding: "20px",
          margin: "20px",
        }}
      >
        <h3>Player : {team} </h3>
        <button onClick={handleTeamIncrement}>Add Player</button>
        <button onClick={handleTeamDecrement}>Add Remove</button>
      </div>
    );
}

export default Team;