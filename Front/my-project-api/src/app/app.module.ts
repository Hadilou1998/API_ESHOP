import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './container/login/login.component';
import { RegisterComponent } from './container/register/register.component';
import { NavBarComponent } from './container/nav-bar/nav-bar.component';
import { ProductComponent } from './container/product/product.component';
import { ProductContainerComponent } from './container/product-container/product-container.component';
import { UserComponent } from './container/user/user.component';
import { JwtInterceptor } from './common/jwt.interceptor';
import { AdminComponent } from './container/admin/admin.component';
import { ErrorInterceptor } from './common/error.interceptor';
import { UpdateUserComponent } from './container/update-user/update-user.component';


@NgModule
({
  declarations: 
  [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    ProductComponent,
    ProductContainerComponent,
    UserComponent,
    AdminComponent,
    UpdateUserComponent,
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: 
  [
    HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
