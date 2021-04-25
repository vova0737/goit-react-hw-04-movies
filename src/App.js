import React, { Suspense, lazy } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'
import styles from './App.module.css';

const HomePage = lazy(() =>
  import(
    './components/HomePage/HomePage.js' /* webpackChunkName: "home-page" */
  ),
);
const MoviesPage = lazy(() =>
  import(
    './components/MoviesPage/MoviesPage.js' /* webpackChunkName: "movie-page" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './components/MovieDetailsPage/MovieDetailsPage.js' /* webpackChunkName: "movie-details-page" */
  ),
);

const App = () => (
  <>
    <NavBar />
    <Suspense
      fallback={<h1 className={styles.LoaderContainer}>Loading...</h1>}
    >
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;