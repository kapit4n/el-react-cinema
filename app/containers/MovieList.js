import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MovieList from '../components/MovieList';
import * as MovieListActions from '../actions/movielist';

function mapStateToProps(state) {
  return {
    movieList: state.movieList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MovieListActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
