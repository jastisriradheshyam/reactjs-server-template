import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
// import PrivateRoute from './_private';
import GuestRoute from './_guest';
import NoMatch from '../pages/NoMatch';
import Main from '../pages/Main';

const Loading = () => <h1>Loading ...</h1>;

const router = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <GuestRoute exact path="/" component={Main} />
      <GuestRoute component={NoMatch} />
    </Switch>
  </Suspense>
);
export default router;