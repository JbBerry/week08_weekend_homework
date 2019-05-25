import React from 'react';
import CountryTile from './CountryTile'

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
      <div className = 'CountriesContainer'>
        {countriesList}
      </div>
  )
}

export default VisitedCountries;
