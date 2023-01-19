import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebspeechComponent } from './webspeech/webspeech.component';
import { HomeRecentEntitiesComponent } from './home-recent-entities/home-recent-entities.component';
import { HomeQuickActionsComponent } from './home-quick-actions/home-quick-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    WebspeechComponent,
    HomeRecentEntitiesComponent,
    HomeQuickActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
