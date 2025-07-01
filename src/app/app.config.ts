import { ApplicationConfig } from '@angular/core';
import { appRoutes } from './app.routes'
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), provideClientHydration()]
};
