import React from 'react';
import CountryTile from './CountryTile'
import './CountriesList.css'

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
    <>
      <div className = 'countries-title'>My Bucket List</div>
      <div className = 'countries-container'>
        {countriesList}
      </div>
    </>
)
}

export default BucketCountries;
