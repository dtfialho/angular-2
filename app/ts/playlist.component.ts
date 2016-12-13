import {Component} from 'angular2/core';
import {Video} from './video';

@Component({
	selector: 'playlist',
	templateUrl: 'app/templates/playlist.component.html',
	inputs: ['videos']
})

export class PlaylistComponent{
	constructor() {
		this.newVideo = {};
		this.lastId = null;
	}

	showVideo(vid:Video) {
		console.log(JSON.stringify(vid));
	}
	addVideo(e, newVideo:Object) {
		e.preventDefault();
		this.lastId = !this.lastId ? (this.videos[this.videos.length - 1].id + 1) : (this.videos.length + 1);

		var video = {};

		if(!newVideo.title || !newVideo.videoCode || !newVideo.desc) {
			window.alert("There is some data missing.");
			return;
		} else {
			this.videos.push(new Video(this.lastId, newVideo.title, newVideo.videoCode, newVideo.desc));
			this.newVideo = {};
		}
	}
}