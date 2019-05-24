import { connect } from 'react-redux';
import BucketCountries from '../components/BucketCountries';

const mapStateToProps = (state) => {
  return {
    countriesData:state.countriesData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    bucketList: (id) => {
      dispatch({
        type: 'BUCKET_LIST',
        id
      })
    },
    Visited: (id) => {
      dispatch({
        type: 'VISITED',
        id
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BucketCountries);
