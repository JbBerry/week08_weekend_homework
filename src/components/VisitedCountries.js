import React from 'react';
import CountryTile from './CountryTile'
import './CountriesList.css'

const VisitedCountries = (props) => {

  const visitedCountries = props.countriesData.filter (country => country.status==='visited');

  const countriesList = visitedCountries.map((country,index)=>{
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
      <div className = 'countries-title'>Visited Countries</div>
      <div className = 'countries-container'>
        {countriesList}
      </div>
    </>
)
}

export default VisitedCountries;
