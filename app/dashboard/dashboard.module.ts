import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardSectionComponent } from './dashboard-section.component';
import { DashboardUsersComponent } from './users/dashboard-users.component';
import { DashboardUserDetailsComponent } from './users/dashboard-user-details.component';
import { DashboardUsersHomeComponent } from './users/dashboard-users-home.component';
import { dashboardRouting } from './dashborad.routing';
import { UserService } from '../shared/services/user.service';

@NgModule({
	imports: [
		CommonModule,
		dashboardRouting
	],
	declarations: [
		DashboardComponent,
		DashboardUsersComponent,
		DashboardUserDetailsComponent,
		DashboardUsersHomeComponent,
		DashboardSectionComponent
	],
	providers: [
		UserService
	]
})

export class DashboardModule {}