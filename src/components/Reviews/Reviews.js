import { React, Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Reviews.module.css';
import { getMovieReview } from '../../services/movies-api';

class Reviews extends Component {
  state = {
    reviews: null,
  };

  // async componentDidMount() {
  //   const { movieId } = this.props.match.params;
  //   const key = '1690d1319b4e719ac3308f10c68ac649';
  //   const response = await Axios.get(
  //     `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`,
  //   );

  //   this.setState({ reviews: response.data.results });
  // }

  // ГОТОВО

  async componentDidMount() {
    const response = await getMovieReview(this.props.match.params.movieId);
    // console.log(response.results);
    this.setState({
      reviews: response.results,
    });
  }

  render() {
    return this.state.reviews && this.state.reviews.length > 0 ? (
      <div>
        <ul>
          {this.state.reviews.map(review => (
            <li key={review.id} className={styles.ReviewAuthor}>
              <h1>{review.author}</h1>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <p>We dont have any reviews for this movie</p>
    );
  }
}

Reviews.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default Reviews;

