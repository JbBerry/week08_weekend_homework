import React from 'react';
import BucketButton from './BucketButton';
import VisitedButton from './VisitedButton';


const CountryTile = (props) => {

    return(
      <div className = "CountriesTile" style = {{backgroundImage: `url(${props.country.flag})`}} >
        {props.country.name}
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
