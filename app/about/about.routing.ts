import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { AboutUserComponent } from '../about/about-user.component';
import { AboutSectionComponent } from '../about/about-section.component';
import { AboutUsersResolve } from './about-resolve.service';
import { AboutUserResolve } from './about-user-resolve.service';

const aboutRoutes: Routes = [
	{
		path: '',
		component: AboutSectionComponent,
		children: [
			{
				path: '',
				component: AboutComponent,
				resolve: {
					users: AboutUsersResolve
				}
			},
			{
				path: ':username',
				component: AboutUserComponent,
				resolve: {
					user: AboutUserResolve
				}
			}
		]
	}
];

export const AboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);