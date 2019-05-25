import React, {Component} from 'react';
import './Form.css'


class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      continent:'',
      country: ''
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleContinentChange = this.handleContinentChange.bind(this)
    this.handleCountryChange = this.handleCountryChange.bind(this)

    this.populateContinents = this.populateContinents.bind(this)
    this.populateCountries = this.populateCountries.bind(this)

    this.defaultCountryText=this.defaultCountryText.bind(this)
    this.defaultContinentText=this.defaultContinentText.bind(this)
  }

  render(){
    return(
      <div className = 'form-container'>
        <form onSubmit = {this.handleFormSubmit}>
          <select
            className = 'continent-dropdown'
            id = 'continent'
            value = {this.defaultContinentText()}
            onChange = {this.handleContinentChange}
          >
            {this.populateContinents()}
          </select>

          <select
            className = 'country-dropdown'
            id = 'country'
            value = {this.defaultCountryText()}
            onChange = {this.handleCountryChange}
          >
            {this.populateCountries()}
          </select>
          <input
            className = "button"
            type = "submit"
            value = "Add to Bucket List"
          />
        </form>
      </div>
    )
  }

  defaultCountryText(event){
    if (this.state.country){
     return this.state.country
   } else {
     return 'Country'
   }
  }

  defaultContinentText(event){
    if (this.state.continent){
     return this.state.continent
    } else {
     return 'Continent'
    }
  }

  handleContinentChange(event){
    this.setState({continent:event.target.value, country: -1})

  }
  handleCountryChange(event){
    this.setState({country: event.target.value})
  }

  handleFormSubmit(event){
    event.preventDefault()
    if (this.state.country){
      this.props.bucketList(this.state.country)
      this.setState({continent:'', country:''})
    }
  }

  populateContinents(){
      const arrRegions = this.props.countriesData.map((element, index)=>{
          return(
            element.region
          )
        });
      const continentsArray = []
        arrRegions.forEach((element,index)=>{
          if (arrRegions.indexOf(element) === index && element){
            continentsArray.push(element)
          }
        })

      const continentsOptions = continentsArray.map((element,index)=>{
        return(
          <option key={index}>{element}</option>
        )
      })
      continentsOptions.unshift(<option key={-1}>Continent</option>)
      return continentsOptions;
    }

    populateCountries(){
      const arrCountries = []

      if (this.state.continent===''||this.state.continent==='Continent'){
        this.props.countriesData.forEach((country)=>{
            arrCountries.push(country)
      })
      } else {
        this.props.countriesData.forEach((country)=>{
          if (country.region === this.state.continent){
            arrCountries.push(country)
          }
        })
      }

      const countryOptions = arrCountries.map((country)=>{
        return(
          <option key={country.id} value={country.id}>{country.name}</option>
        )
      })
      countryOptions.unshift(<option key={-1}>Country</option>)
      return countryOptions;
    }
}

export default Form;
