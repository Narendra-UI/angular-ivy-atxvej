import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileAddComponent } from './profile-add/profile-add.component';
import { AppRoutingModule } from './app-routing-module/routing.module';
import { SaleemService } from './saleem.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FaIconLibrary,
  ],

  declarations: [
    AppComponent,
    HelloComponent,
    MainComponent,
    HomeComponent,
    ProfileComponent,
    AboutComponent,
    SettingsComponent,
    ProfileAddComponent,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
