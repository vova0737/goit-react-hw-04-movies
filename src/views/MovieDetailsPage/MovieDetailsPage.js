import React, { Component, Suspense, lazy } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { getMovieDetails } from '../../services/movies-api';
import styles from './MovieDetailsPage.module.css';

const Cast = lazy(() =>
  import('../../components/Cast/Cast' /* webpackChunkName: "movie-cast" */),
);

const Reviews = lazy(() =>
  import(
    '../../components/Reviews/Reviews' /* webpackChunkName: "movie-reviews" */
  ),
);

class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };

  clickBack = event => {
    event.preventDefault();
    if (this.props.location.state && this.props.location.state.from) {
      this.props.history.push(this.props.location.state.from);
    }
  };

  async componentDidMount() {
    const response = await getMovieDetails(this.props.match.params.movieId);
    this.setState({
      movie: response,
    });
  }

  render() {
    return (
      this.state.movie && (
        <div className={styles.MovieDetailsContainer}>
          <button
            type="button"
            onClick={this.clickBack}
            className={styles.BackButton}
          >
            Go back
          </button>
          <div className={styles.MovieDetails}>
            <div>
              <img
                className={styles.MoviePoster}
                src={`https://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`}
                alt=""
              />
            </div>
            <div className={styles.MovieDescrtiption}>
              <h1 className={styles.MovieTitle}>{this.state.movie.title}</h1>
              <p>
                User score:
                <span> {this.state.movie.vote_average} </span>
              </p>
              <h2>Overview</h2>
              <p>{this.state.movie.overview}</p>
              <h2>Genres</h2>
              <ul className={styles.MovieGenres}>
                {this.state.movie.genres.map(genre => (
                  <li key={genre.id} className={styles.GenreTitles}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h2>Adittional information</h2>
            <ul>
              <li>
                <NavLink
                  to={{
                    pathname: `${this.props.match.url}/cast`,
                    state: {
                      from: this.props.location.state.from,
                    },
                  }}
                  className={styles.AdditionatIfoLink}
                  activeClassName={styles.AdditionatIfoLinkActive}
                >
                  Cast
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={{
                    pathname: `${this.props.match.url}/reviews`,
                    state: {
                      from: this.props.location.state.from,
                    },
                  }}
                  className={styles.AdditionatIfoLink}
                  activeClassName={styles.AdditionatIfoLinkActive}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Route path="/movies/:movieId/cast" component={Cast} />
            <Route path="/movies/:movieId/reviews" component={Reviews} />
          </Suspense>
        </div>
      )
    );
  }
}

export default withRouter(MovieDetailsPage);
