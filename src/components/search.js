import React from 'react';

export default class Search extends React.Component {
  render() {
    return(
      <div className="flex h-min items-center">
        <div className="pt-1 mr-2">
          <svg width="21" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9.5" cy="9.5" r="8" stroke="black" strokeWidth="3"/>
            <line x1="17.1" y1="14.7" x2="22.7" y2="18.9" stroke="black" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
        <input type="text" placeholder="Search" className="border-b-2 border-black w-80"/>
      </div>
    )
  }
}