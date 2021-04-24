import { React, Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import logo from '../../img/no_photo.jpg';
import styles from './Cast.module.css';

class Cast extends Component {
  state = {
    cast: null,
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const key = '1690d1319b4e719ac3308f10c68ac649';
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`,
    );
    this.setState({ cast: response.data.cast });
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

export default Cast;
