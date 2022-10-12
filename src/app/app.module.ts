import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileAddComponent } from './profile-add/profile-add.component';
import { AppRoutingModule } from './app-routing-module/routing.module';
import { SaleemService } from './saleem.service';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],

  declarations: [
    AppComponent,
    HelloComponent,
    MainComponent,
    HomeComponent,
    ProfileComponent,
    AboutComponent,
    ContactComponent,
    SettingsComponent,
    ProfileAddComponent,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
