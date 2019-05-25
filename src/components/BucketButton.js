import React from 'react';

const BucketButton = (props) => {

  const handleBucketClick = () => {
      props.bucketList(props.country.id);
    }

  const button = () => {
    if(props.country.status === ''){
      return (
        <button onClick={handleBucketClick}>Add to Bucket List</button>
      )
    }else{
      return(null)
    }
  }

  return(
    <div className = 'bucket-button'>
      {button()}
    </div>
  )
}

export default BucketButton;
