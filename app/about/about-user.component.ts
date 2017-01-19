import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/models/user.model'; 

@Component ({
	template: `
		<a class="btn btn-sm btn-info" (click)="goBack()">Go Back</a>
		<div class="jumbotron text-center" *ngIf="user">
			<h1>{{ user.name }} ({{ user.username }})</h1>

			<img [src]="user.avatar" class="img-responsive img-circle">

		</div>
	`,
	styles: [`
		img {
			max-width: 50%;
			margin: 30px auto;
		}
	`]
})

export class AboutUserComponent implements OnInit {
	user: User;
	constructor(
		private route: ActivatedRoute, 
		private router: Router
	) {	}

	ngOnInit() {
		//grab the curren username
		this.route.data.forEach((data: {user: User}) => this.user = data.user);
	}

	goBack() {
		this.router.navigate(['/about']);
	}

}
