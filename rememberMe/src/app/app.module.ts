import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonGenericComponent } from './components/common/button-generic/button-generic.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { SingUpComponent } from './components/pages/sing-up/sing-up.component';
import { UploadImagesComponent } from './components/pages/upload-images/upload-images.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonGenericComponent,
    LoginPageComponent,
    SingUpComponent,
    UploadImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
