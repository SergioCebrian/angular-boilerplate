import { HttpBackend, HttpClientModule, HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { enableProdMode, importProvidersFrom, isDevMode } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

import { environment } from '@environments/environment';
import { TokenInterceptor } from '@interceptors/token/token.interceptor';
import { MaterialModule } from '@shared/material.module';

import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app-routing.module';

// tslint:disable-next-line: typedef
export function HttpLoaderFactory(http: HttpBackend) {
  return new MultiTranslateHttpLoader(http, [
    '/assets/i18n/general/',
    '/assets/i18n/menu/',
  ]);
}

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(
  AppComponent,
  {
    providers: [
      importProvidersFrom(BrowserModule.withServerTransition({ appId: 'serverApp' })),
      provideHttpClient(
        // withInterceptors([ TokenInterceptor ])
      ),
      importProvidersFrom([HttpClientModule]),
      provideRouter(APP_ROUTES, 
        withPreloading(PreloadAllModules),
      ),
      importProvidersFrom([BrowserAnimationsModule]),
      provideAnimations(),
      MaterialModule,
      importProvidersFrom(TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpBackend]
        }
      })),
      importProvidersFrom(
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: !isDevMode(),
          registrationStrategy: 'registerWhenStable:30000'
        })
      ),
      { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    ],
  }
);
 
