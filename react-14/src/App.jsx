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
      contactsSafe: [],
    }

    this.handler = this.handler.bind(this)
  }
  
  handler(contacts) {
   this.setState({
      contacts: contacts,
    })    
  }

  render() {
    return (
      <div className="app" data-testid="app">
        <Topbar />
        <Filters 
          contacts={this.state.contacts} 
          contactsSafe={this.state.contactsSafe} 
          handler={this.handler} 
        />
        <Contacts contacts={this.state.contacts} />
      </div>
    )
  }

  async componentDidMount() {    
    this.setState({
      contacts: await getApi(
        "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts"
      ),                
    })    
    this.setState({
      contactsSafe: this.state.contacts
    })
  }

}

export default App
