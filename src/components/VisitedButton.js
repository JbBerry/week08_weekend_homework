import React from 'react';
import './CountryTile.css'


const VisitedButton = (props) => {

  const handleVisitedClick = () => {
      props.visited(props.country.id);
    }

  const button = () => {
    if(props.country.status !== 'visited'){
      return (
        <button className = 'visited-button' onClick={handleVisitedClick}>Visited</button>
      )
    }else{
      return(null)
    }
  }

    return(
      <div className = 'visited-button-area'>
        {button()}
      </div>
  )
}

export default VisitedButton;
