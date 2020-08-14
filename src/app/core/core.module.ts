import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FackeAuthBackendInterceptor } from './interceptors/facke-auth-backend.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

      // provider used to create fake backend
      FackeAuthBackendInterceptor
  ],
})
export class CoreModule { }
