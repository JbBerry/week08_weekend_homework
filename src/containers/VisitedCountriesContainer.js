import { connect } from 'react-redux';
import VisitedCountries from '../components/VisitedCountries';

const mapStateToProps = (state) => {
  return {
    countriesData:state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Visited: (id) => {
      dispatch({
        type: 'VISITED',
        id
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VisitedCountries);
