import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { provideIonicAngular, IonicRouteStrategy } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

// 👉 IMPORTACIÓN NECESARIA PARA LA CÁMARA EN WEB (PWA Elements)
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Importación de iconos (no la necesitamos para la cámara, pero la dejo)
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';

if (environment.production) {
  enableProdMode();
}

// 👉 REGISTRA LOS ICONOS
addIcons(allIcons);

// 🎯 LLAMADA CRÍTICA: Registra los elementos custom de PWA para habilitar la cámara en el navegador.
defineCustomElements(window);


bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient(),
    provideIonicAngular(),
    provideRouter(routes),
  ],
});