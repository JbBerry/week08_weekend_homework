import React from 'react';
import './CountryTile.css'

const BucketButton = (props) => {

  const handleBucketClick = () => {
      props.bucketList(props.country.id);
    }

  const button = () => {
    if(props.country.status === ''){
      return (
        <button className = 'bucket-button' onClick={handleBucketClick}>Add to Bucket List</button>
      )
    }else{
      return(null)
    }
  }

  return(
    <div className = 'bucket-button-area'>
      {button()}
    </div>
  )
}

export default BucketButton;
