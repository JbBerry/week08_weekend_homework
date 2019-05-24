import React from 'react';
import CountryTile from './CountryTile'

const VisitedCountries = (props) => {
  const countriesList = props.countriesData.map((country,index)=>{
    return(
      <CountryTile key={index} country={country}/>
    )
  });
    return(
      <div className = 'CountriesContainer'>
        {countriesList}
      </div>
  )
}

export default VisitedCountries;
