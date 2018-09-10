import React from 'react';
import Query from 'react-apollo';
import { HOME_PAGE } from './quries';

const Home = () => <Query qeury={HOME_PAGE}>Home</Query>
export default Home;