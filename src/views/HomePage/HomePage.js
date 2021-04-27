import { React, Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './HomePage.module.css';
import { getPopularFilms } from '../../services/movies-api';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await getPopularFilms();
    this.setState({
      movies: response.results,
    });
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
