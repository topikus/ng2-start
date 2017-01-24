import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';

@Injectable()

export class AuthGuard implements CanActivate, CanActivateChild {
	canActivate() {
		console.log(' i am checking to see if you are logged in');
		return true;
	}
	canActivateChild() {
		console.log(' i am checking child access');
		return true;
	}
}