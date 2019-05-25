import React from 'react';
import CountryTile from './CountryTile'
import './CountriesList.css'

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
      <>
        <div className = 'countries-title'>All Countries</div>
        <div className = 'countries-container'>
          {countriesList}
        </div>
      </>
  )
}

export default AllCountries;
