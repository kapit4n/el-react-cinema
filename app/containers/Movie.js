import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Movie from '../components/Movie';
import * as MovieActions from '../actions/movie';

function mapStateToProps(state) {
  console.log('state');
  console.log(state);
  return {
    movie: state.movie
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MovieActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
