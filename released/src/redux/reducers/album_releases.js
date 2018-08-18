import { GET_ALBUM_RELEASES } from '../types/album_releases';


const initialState = {
	albums: [
		'test',
		'nog meer test'
	],
};

export default ( state = initialState, action ) => {


	switch ( action.type ) {

		case GET_ALBUM_RELEASES :

			return {
				...state,
				albums: action.payload
			};

		default:
			return state;
	}
}
