import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogComponent } from './components/log/log.component';

import { LogFormComponent } from './components/log-form/log-form.component';
import{ LogService } from './services/log.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogComponent,
    
    LogFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
