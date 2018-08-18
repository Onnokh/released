import { GET_ALBUM_RELEASES } from '../types/album_releases';

export function getAlbumReleases() {


	let albums = [
		'U2 - Supersaai',
		'Winnie - de pooh'
	];
	return {
		type: GET_ALBUM_RELEASES,
		payload: albums
	}
}