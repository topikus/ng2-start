import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component ({
	selector: 'about-page',
	templateUrl: './app/about/about.component.html',
	styleUrls: ['./app/about/about.component.css']
})

export class AboutComponent implements OnInit{
	users: User[];

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.data.forEach((data: { users: User[] }) => this.users = data.users);
	}
}