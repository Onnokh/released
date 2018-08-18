import React from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router'

import { getAlbumReleases } from '../redux/actions/album_releases';


class Home extends React.Component {
	constructor() {
		super();


	}

	 check = e => {
		getAlbumReleases();
		console.log(this.props.album_release);
		console.log('hallo');
	};

	render () {


		return (

			<div>

				<h1>Hallooo</h1>

				<button onClick={this.check}>halloo</button>

			</div>
		)
	}
}


const mapStatetoProps = state => ({
	album_release: state.albumReleases
});


export default withRouter(connect(mapStatetoProps, { getAlbumReleases })(Home))