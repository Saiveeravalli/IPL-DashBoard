import './index.css'

const LatestMatch = props => {
  const {mathData} = props
  const {
    competingTeam,
    competingTeamlogo,
    data,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = mathData

  return (
    <div className="L-Match">
      <h1 className="latest-Heading">Latest Matches</h1>
      <div className="flex-box">
        <div className="flex">
          <ul className="m-1" type="none">
            <li>
              <p className="l-heading">{competingTeam}</p>
            </li>
            <li>
              <p className="date-l"> {data}</p>
            </li>
            <li>
              <p className="date-l">{venue}</p>
            </li>
            <li>
              <p className="date-l">{result}</p>
            </li>
          </ul>
          <img
            src={competingTeamlogo}
            className="team-logo-img"
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="hr-line" />
        <div className="m-2">
          <p className="team-inn-h">First Innings</p>
          <p className="team-inn">{firstInnings}</p>
          <p className="team-inn-h">Second Innings</p>
          <p className="team-inn">{secondInnings}</p>
          <p className="team-inn-h">Man Of The Match</p>
          <p className="team-inn">{manOfTheMatch}</p>
          <p className="team-inn-h">umpires</p>
          <p className="team-inn">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
