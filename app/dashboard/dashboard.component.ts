import { Component } from '@angular/core';

@Component({
	selector: 'dashboard-page',
	template: `
		<div  class="jumbotron text-center">
			<h1>Wellcome to the Dashboard</h1>

			<a routerLink="/dashboard/users" class="btn btn-lg btn-danger">
				Manage Users
			</a>
		</div>
	`
})

export class DashboardComponent {}