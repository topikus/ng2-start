import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';

@Component({
	template: ` 
		<div *ngIf="user">
			<h2> {{ user.name }}</h2>
		</div>
	`

})

export class DashboardUserDetailsComponent implements OnInit {

	user: User;

	constructor(private service: UserService, private route: ActivatedRoute) {}

	ngOnInit() {

		this.route.params.forEach(params => {
			let username = params['username'];
			
			this.service.getUser(username).then(user => this.user = user); 
		});
	}
}