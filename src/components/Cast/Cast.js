import { React, Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../img/no_photo.jpg';
import styles from './Cast.module.css';
import { getMovieCast } from '../../services/movies-api';

class Cast extends Component {
  state = {
    cast: null,
  };

  async componentDidMount() {
    const response = await getMovieCast(this.props.match.params.movieId);
    // console.log(response);
    this.setState({
      cast: response.cast,
    });
  }

  render() {
    return (
      this.state.cast && (
        <div>
          <ul className={styles.MovieCastCntainer}>
            {this.state.cast.map(actor => (
              <li key={actor.id} className={styles.MovieCastItem}>
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                    alt=""
                    className={styles.CastProfile}
                  />
                ) : (
                  <img src={logo} alt="" className={styles.CastProfile} />
                )}
                <p>{actor.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )
    );
  }
}

Cast.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default Cast;
