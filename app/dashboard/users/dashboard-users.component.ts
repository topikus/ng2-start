import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';

@Component({
	template: `
		<h2>Users section </h2>
		<p>Manage you users</p>

		<div class="row">
			<div class="col-sm-4">
				<div *ngIf="users" class="list-group">
					<a *ngFor="let user of users" 
						class="list-group-item"
						[routerLink] = "['/dashboard/users',user.username]">
							{{ user.name }}
						</a>
				</div>
				list of users goes here
			</div>
			<div class="col-sm-8">
				<router-outlet></router-outlet>
			</div>
		</div>
	`
})

export class DashboardUsersComponent implements OnInit {
	users: User[];

	constructor(private service: UserService) {}

	ngOnInit() {
		this.service.getUsers().then(users => this.users = users);
	}

}