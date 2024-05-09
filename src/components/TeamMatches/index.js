import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {mathData: [], latestMatch: [], bannerImg: '', isMatchLoad: true}

  componentDidMount() {
    this.getMatches()
  }

  getMatches = async () => {
    const {isMatchLoad} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    const matchResponse = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const dataMatch = await matchResponse.json()
    console.log(dataMatch)

    const teamBannerImg = dataMatch.team_banner_url
    const lMatch = dataMatch.latest_match_details
    const recentMatch = dataMatch.recent_matches
    const latestMatchDetails = {
      competingTeam: lMatch.competing_team,
      competingTeamlogo: lMatch.competing_team_logo,
      data: lMatch.date,
      firstInnings: lMatch.first_innings,
      id: lMatch.id,
      manOfTheMatch: lMatch.man_of_the_match,
      matchStatus: lMatch.match_status,
      result: lMatch.result,
      secondInnings: lMatch.second_innings,
      umpires: lMatch.umpires,
      venue: lMatch.venue,
    }
    const dataM = recentMatch.map(each => ({
      competingTeam: each.competing_team,
      competingLogo: each.competing_team_logo,
      matchStatus: each.match_status,
      result: each.result,
      id: each.id,
    }))

    this.setState({
      bannerImg: teamBannerImg,
      mathData: latestMatchDetails,
      latestMatch: dataM,
      isMatchLoad: !isMatchLoad,
    })
  }

  render() {
    const {bannerImg, mathData, isMatchLoad, latestMatch} = this.state
    return (
      <div>
        <div data-testid="loader">
          {isMatchLoad ? (
            <div className="loading-box">
              <Loader type="Oval" color="black" height={50} width={50} />
            </div>
          ) : (
            <div className="team-bg">
              <img src={bannerImg} className="banner" alt="team banner" />
              <LatestMatch mathData={mathData} />
              <ul className="Match-list-box" type="none">
                {latestMatch.map(eachmatch => (
                  <MatchCard matchDetails={eachmatch} key={eachmatch.id} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default TeamMatches
