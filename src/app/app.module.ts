import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WebService } from './services/web.service';
import { InterceptorService } from './services/interceptor.service';


import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { UpperCasePipe } from './pipes/upper-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlaylistComponent,
    SafeUrlPipe,
    UpperCasePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    WebService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
