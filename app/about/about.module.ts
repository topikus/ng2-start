import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { AboutUserComponent } from '../about/about-user.component';
import { AboutSectionComponent } from '../about/about-section.component';
import { UserService } from '../shared/services/user.service';
import { AboutRouting } from '../about/about.routing';
import { AboutUsersResolve } from './about-resolve.service';
import { AboutUserResolve } from './about-user-resolve.service';

@NgModule({
	imports: [
		CommonModule,
		AboutRouting
	],
	declarations: [
		AboutComponent,
		AboutUserComponent,
		AboutSectionComponent
	],
	providers: [
		UserService,
		AboutUsersResolve,
		AboutUserResolve
	]
})

export class AboutModule{}