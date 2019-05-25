import React from 'react';

const VisitedButton = (props) => {

  const handleVisitedClick = () => {
      props.visited(props.country.id);
    }

  const button = () => {
    if(props.country.status !== 'visited'){
      return (
        <button onClick={handleVisitedClick}>Visited</button>
      )
    }else{
      return(null)
    }
  }

    return(
      <div className = 'visited-button'>
        {button()}
      </div>
  )
}

export default VisitedButton;
