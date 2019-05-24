import { connect } from 'react-redux';
import Form from '../components/Form';

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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
