import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import AllCountriesContainer from './containers/AllCountriesContainer.';
import BucketCountriesContainer from './containers/BucketCountriesContainer';
import FormContainer from './containers/FormContainer'
import NavBar from './containers/NavBar';
import VisitedCountriesContainer from './containers/VisitedCountriesContainer';


class App extends Component {

  componentDidMount(){
    this.props.getCountriesData()
  }

  render() {
    return (
      <Router>
        <Fragment>
          <NavBar/>
          <FormContainer/>
          <Route exact path ="/" component = {AllCountriesContainer} />
          <Route path = "/bucket-list" component = {BucketCountriesContainer}/>
          <Route path = "/visited" component = {VisitedCountriesContainer}/>
        </Fragment>
      </Router>
    );
  }

}
const mapDispatchToProps=(dispatch)=>({
  getCountriesData(){
    dispatch(()=>{
      fetch('https://restcountries.eu/rest/v2/all?fields=name;flag;region')
      .then(res=>res.json())
      .then(countriesData=>{
        countriesData.map((country)=>{
          country.status='';
        })
         dispatch({
          type: 'ADD_DATA',
          countriesData
        })
      })
    })
  }
})


export default connect(null, mapDispatchToProps)(App);
