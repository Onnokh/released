import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import albumReleases from './reducers/album_releases';

export default () => {

	let middleware = applyMiddleware( thunk, logger );

	let reducer = combineReducers( {
		albumReleases: albumReleases,

	} );

	return createStore( reducer, middleware )
}