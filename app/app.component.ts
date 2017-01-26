import { Component } from '@angular/core';
import { User } from './shared/models/user'
@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent {
	message: string = 'Hello!';
	users: User[] = [
		{id: 25,name: 'Chris',	username: 'sertalen'},
		{id: 25,name: 'Nick',	username: 'user2'},
		{id: 25,name: 'Tom',	username: 'user3'}
	];
	activeUser: User;

	selectUser(user) {
		this.activeUser = user;
		console.log(this.activeUser);
	}
} 