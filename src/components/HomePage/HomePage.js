import { React, Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './HomePage.module.css';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const key = '1690d1319b4e719ac3308f10c68ac649';
    const response = await Axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    );

    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <div className={styles.HomePageContainer}>
        <h1 className={styles.ListHeader}>Trending today</h1>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id} className={styles.MovieItem}>
              <NavLink
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: this.props.location },
                }}
                className={styles.MovieLink}
                activeClassName={styles.MovieLinkActive}
              >
                {movie.title ? movie.title : movie.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(HomePage);
