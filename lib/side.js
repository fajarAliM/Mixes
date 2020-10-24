export default class Side {
	constructor() {
		this.tracks = [];
	}

	add( track ) {
		this.tracks.push( track );
	}

	get duration() {
		if ( ! this.tracks.length ) {
			return 0;
		}

		return this.tracks.reduce(
			( acc, track ) => acc + track.duration_ms,
			0
		);
	}
}
