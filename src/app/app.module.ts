import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileAddComponent } from './profile-add/profile-add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { AppRoutingModule } from './app-routing-module/routing.module';
import { SaleemService } from './saleem.service';

//import { ModuleOfNg } from '@angular/core';
//import { ModuleOfNgb } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
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
    ViewComponent,
    EditComponent,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
