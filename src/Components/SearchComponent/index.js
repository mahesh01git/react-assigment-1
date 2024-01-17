import {Component} from 'react'

import './index.css'

import Item from '../ItemComponent'

class SearchItem extends Component {
  render() {
    const {initialHistoryList} = this.props
    return (
      <div className="app-con">
        <div className="search-con">
          <img
            className="history-img"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="input-con">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input type="search" placeholder="Search History" />
          </div>
        </div>
        <div className="buttom-con">
          <ul className="list-con">
            {initialHistoryList.map(eachItem => (
              <Item key={eachItem.id} itemDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SearchItem
