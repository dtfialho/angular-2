import {Component} from 'angular2/core';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
	videos:Array<Video>;

	constructor(){
		this.videos = [
			new Video(1, "Installing Django", "qgGIqRFvFFk", "How to install Django"),
			new Video(2, "Surviving the wilderness", "Fgwy-UdtyLs", "Bucky goes hiking")
		]
	}
}
