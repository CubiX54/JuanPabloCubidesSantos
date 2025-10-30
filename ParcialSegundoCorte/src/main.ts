import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser'; 
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes'; 
import { AppComponent } from './app/app.component'; 


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), 
    provideIonicAngular({}),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});