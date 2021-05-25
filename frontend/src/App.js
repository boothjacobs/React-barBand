import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import SearchResults from './components/SearchResults';
import AlbumPage from './components/AlbumPage';
import CollectionPage from './components/CollectionPage';

function App() {
  //restore user logic
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SearchResults />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/api/albums/:id">
            <AlbumPage />
          </Route>
          <Route path="/api/users/:id">
            <CollectionPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
