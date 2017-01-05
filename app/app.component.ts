import { Component } from '@angular/core';
import { User } from './shared/models/user'
@Component({
  selector: 'my-app',
  template: `
  	<header>
  		<nav class="navbar navbar-inverse">
  			<div class="navbar-header"> 
  				<a href="/" class="navbar-brand">My Angular 2 App!</a>
  			</div>
  		</nav>  	</header>
  	<main>
  		<div class="row">
  			<div class="col-sm-4">
	  			<div *ngIf="users">
	  				<ul class="list-group users-list">
				    	<li class="list-group-item" 
				    		*ngFor="let user of users"
				    		(click)="selectUser(user)"
				    		[class.active]="user === activeUser">
				    	 	{{ user.name}} ({{user.username}})
				    	</li>
				    </ul>
				</div>
  			</div>
  			<div class="col-sm-8">
	  			<div class="jumbotron" *ngIf="activeUser">
			      <h2>{{ activeUser.name }} <small> {{activeUser.username}}</small></h2>
			    </div>

			    <div class="jumbotron" *ngIf="!activeUser">
			      <span class="glyphicon glyphicon-hand-left"> </span>
			      <h2>Choose User</h2>
			    </div>
  			</div>
  		</div>
    </main>
    <footer class="text-center">
    	Copyright &copy; 2016
    </footer>
  `,
  styles: [`
    .users-list li
     {cursor: pointer; }
     .jumbotron .glyphicon {
     	font-size: 7em;
     }
  `]
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