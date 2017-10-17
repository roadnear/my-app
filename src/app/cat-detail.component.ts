import { Component, Input } from '@angular/core';
import { Cat } from './cat';

@Component({
	selector: 'cat-detail',
	template: `
		<div *ngIf="cat">
	      <div>
	        <label>Name: </label>
	        <input [(ngModel)]="cat.name" placeholder="name">
	       </div>
	      <div>
	        <label>Breed: </label>
	        <input [(ngModel)]="cat.breed" placeholder="breed">
	      </div>
	    </div>
	`
})

export class CatDetailComponent {
	@Input() cat: Cat;
}