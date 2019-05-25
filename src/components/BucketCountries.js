import React from 'react';
import CountryTile from './CountryTile'

const BucketCountries = (props) => {

  const bucketListCountries = props.countriesData.filter (country => country.status==='bucket_list');

  const countriesList = bucketListCountries.map((country,index)=>{
    return(
      <CountryTile
        key={index}
        country={country}
        bucketList={props.bucketList}
        visited={props.visited}
      />
    )
  });
    return(
      <div className = 'CountriesContainer'>
        {countriesList}
      </div>
  )
}

export default BucketCountries;
