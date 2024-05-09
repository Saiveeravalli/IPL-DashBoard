import {Link} from 'react-router-dom'
import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCardItem from '../TeamCard'

class HomePage extends Component {
  state = {teamcard: [], isTeam: true}

  componentDidMount() {
    this.getTeamcard()
  }

  getTeamcard = async () => {
    const {isTeam} = this.state
    const responseTeam = await fetch('https://apis.ccbp.in/ipl')
    const data = await responseTeam.json()
    const {teams} = data
    const updateTeamData = teams.map(team => ({
      id: team.id,
      name: team.name,
      teamImageUrl: team.team_image_url,
    }))
    this.setState({teamcard: updateTeamData, isTeam: !isTeam})
  }

  render() {
    const {teamcard, isTeam} = this.state
    return (
      <Link to="/" className="link">
        <div className="main-container">
          <div className="logo-b-1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logo-img-heading"
            />
            <h1 className="main-heading-1">IPL DASHBOARD</h1>
          </div>
          <div data-testid="loader">
            {isTeam ? (
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            ) : (
              <div className="listTeam-box">
                <ul className="list" type="none">
                  {teamcard.map(each => (
                    <TeamCardItem cardDetails={each} key={each.id} />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Link>
    )
  }
}

export default HomePage
