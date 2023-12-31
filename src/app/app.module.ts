import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';





@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }