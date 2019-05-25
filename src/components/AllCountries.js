import React from 'react';
import CountryTile from './CountryTile'

const AllCountries = (props) => {
  const countriesList = props.countriesData.map((country,index)=>{
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

export default AllCountries;
