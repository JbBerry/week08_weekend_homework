import React from 'react';
import BucketButton from './BucketButton';
import VisitedButton from './VisitedButton';
import './CountryTile.css'



const CountryTile = (props) => {

    return(
      <div className = 'countries-tile' style = {{backgroundImage: `url(${props.country.flag})`}} >
        <div className = 'countries-details'>{props.country.name}</div>
        <BucketButton
        bucketList={props.bucketList}
        country={props.country}
        />
        <VisitedButton
        visited={props.visited}
        country={props.country}
        />
      </div>
  )
}

export default CountryTile;
