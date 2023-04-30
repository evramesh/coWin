import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Coverage from '../VaccinationCoverage'
import Gender from '../VaccinationByGender'
import Age from '../VaccinationByAge'
import './index.css'

const status = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'PROGRESS',
}

class CowinDashboard extends Component {
  state = {active: status.inProgress, newList: {}}

  componentDidMount() {
    this.findData()
  }

  findData = async () => {
    this.setState({active: status.inProgress})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      const convertData = {
        last7Days: data.last_7_days_vaccination,
        byAge: data.vaccination_by_age,
        byGender: data.vaccination_by_gender,
      }
      this.setState({newList: convertData, active: status.success})
    } else {
      this.setState({active: status.failure})
    }
  }

  renderPage = () => {
    const {active} = this.state
    switch (active) {
      case status.success:
        return this.successPage()
      case status.failure:
        return this.failurePage()
      case status.inProgress:
        return this.loadingPage()
      default:
        return null
    }
  }

  successPage = () => {
    const {newList} = this.state
    const {last7Days, byAge, byGender} = newList
    return (
      <div>
        <Coverage send={last7Days} />
        <Gender way={byGender} />
        <Age rent={byAge} />
      </div>
    )
  }

  failurePage = () => (
    <div>
      <img
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
      />
      <h1>Something Went Wrong</h1>
    </div>
  )

  loadingPage = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={180} width={180} />
    </div>
  )

  render() {
    return (
      <div className="main">
        <div className="sub">
          <img
            className="icon"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          />
          <p className="head">Co-WIN</p>
        </div>
        <h1 className="head1">CoWIN Vaccination in India</h1>
        <div>{this.renderPage()}</div>
      </div>
    )
  }
}

export default CowinDashboard
