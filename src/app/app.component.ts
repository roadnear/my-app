import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<nav>
			<a routerLink="/dashboard">Dashboard</a>
			<a routerLink="/cats">Cats</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	styleUrls: [ './app.component.css' ]
})

export class AppComponent {
	title = 'Tour of Maws';
}