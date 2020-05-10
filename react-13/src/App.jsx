import React from "react"

import Topbar from "./components/Topbar"
import Filters from "./components/Filters"
import Contacts from "./components/Contacts"

import { getApi } from "./services/api"

import "./App.scss"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
    }
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters />
        <Contacts contacts={this.state.contacts} />
      </React.Fragment>
    )
  }

  async componentDidMount() {
    this.setState({
      contacts: await getApi(
        "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts"
      ),
    })
  }
}

export default App
