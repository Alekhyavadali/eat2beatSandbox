import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { AccountComponent } from './account/account.component';
import { StarComponent } from './shared/star/star.component';
const appRoutes: Routes = [
  { path: 'mainPage', component: MainPageComponent },
  { path: 'registration', component: RegistrationComponent },
  {path: 'account', component:AccountComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    AccountComponent,
    StarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports:[RouterModule],
  providers: [DataService],
  bootstrap: [ AppComponent]
})
export class AppModule { }
