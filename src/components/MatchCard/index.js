import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingLogo, competingTeam, matchStatus} = matchDetails
  const mStatus = matchStatus === 'Won' ? 'm-status' : 'm-status-1'
  return (
    <li className="m-l-1">
      <img
        src={competingLogo}
        className="m-l-img"
        alt={`competing team ${competingTeam}`}
      />
      <p className="m-l-heading">{competingTeam}</p>
      <p className="m-result">{result}</p>
      <p className={mStatus}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
