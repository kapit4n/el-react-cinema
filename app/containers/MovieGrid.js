import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MovieGrid from '../components/MovieGrid';
import * as MovieListActions from '../actions/movielist';

function mapStateToProps(state) {
  return {
    movieList: state.movieList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MovieListActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieGrid);
