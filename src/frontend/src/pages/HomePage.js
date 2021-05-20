import './HomePage.scss';
import { React, useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard'
import { MatchSmallCard } from '../components/MatchSmallCard'
import { TeamTile } from '../components/TeamTile'
import { useParams } from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';
import { Link } from 'react-router-dom';

export const HomePage = () => {

  const [teams, setTeams] = useState([]);

  useEffect(
        () => {
            const fetchAllTeams = async () => {
                //console.log(teamName);
                const response = await fetch(`http://localhost:8080/teams`);
                const data = await response.json();
                console.log(data);
                setTeams(data);
            };
            fetchAllTeams();
        },[]
  );
  if(!teams)
  {
     return <h1>No Teams Exists</h1>
  }

  return (
    <div className="HomePage">
        <div className="header-section">
            <h1 className="app-name">Test IPL Dashboard</h1>
        </div>
        <div className="team-grid">
             { teams.map(team => <TeamTile key={team.id} teamName={team.teamName} />)}
        </div>
    </div>
  );
}

export default HomePage;
