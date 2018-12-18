import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { NgMarqueeModule } from 'ng-marquee';
import { MarqueeComponent } from './marquee/marquee.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    MenuComponent,
    HeaderComponent,
    MarqueeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgMarqueeModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
