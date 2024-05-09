import {Link} from 'react-router-dom'
import './index.css'

const TeamCardItem = props => {
  const {cardDetails} = props
  const {id, name, teamImageUrl} = cardDetails
  return (
    <Link to={`/team-matches/${id}`} className="card-link">
      <li className="l-1">
        <div className="card-1">
          <img src={teamImageUrl} alt={name} className="team-img" />
        </div>
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCardItem
