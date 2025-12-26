// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  OnChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="App-container">
        <div className="DestinationSearch-container">
          <h1 className="search-heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              className="search-input"
              type="search"
              placeholder="Search Your Destination"
              onChange={this.OnChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="Destination-list-container">
            {searchResult.map(eachDestination => (
              <DestinationItem
                key={eachDestination.id}
                destinationDetails={eachDestination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch


/*
  git config --global user.email naikc8468@gmail.com
    git config --global user.name Chetannaik-9535
     git remote add origin https://github.com/Chetannaik-9535/-Destination-Search.git
*/