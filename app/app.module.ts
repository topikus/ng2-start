import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [ 
	  BrowserModule,
	  FormsModule,
	  appRouting
],
  declarations: [ 
	  AppComponent,
	  HomeComponent,
	  AboutComponent,
	  ContactComponent
],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
